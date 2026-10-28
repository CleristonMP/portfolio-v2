import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContentImage, MediaFigure } from '../src/components/ContentImage';
import { projects } from '../src/content/projects';
import { media } from '../src/content/media';
import { translations } from '../src/i18n/translations';
import { ProjectsSection } from '../src/sections/ProjectsSection';

describe.each(['pt', 'en'] as const)('local media %s', (language) => {
  it('localizes the image alternative and distinguishes the original raster from credential validation', () => {
    const image = media.modernCertificate;
    render(
      <MediaFigure
        image={image}
        language={language}
        originalLabel={translations[language].openOriginalImage}
      />,
    );
    const picture = screen.getByRole('img', { name: image.alt[language] });
    expect(picture).toHaveAttribute('width', '2339');
    expect(picture).toHaveAttribute('height', '1653');
    expect(picture).toHaveAttribute('loading', 'lazy');
    expect(picture).toHaveAttribute('decoding', 'async');
    const link = screen.getByRole('link', {
      name: `${translations[language].openOriginalImage}: ${image.alt[language]}`,
    });
    expect(link).toHaveAttribute('href', image.src);
    expect(link).not.toHaveAttribute('target');
  });
  it('keeps an image without creating an interactive control for card covers', () => {
    render(<ContentImage image={media.audienceCover} language={language} />);
    expect(
      screen.getByRole('img', { name: media.audienceCover.alt[language] }),
    ).toHaveAttribute('src', media.audienceCover.src);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});

it('omits an absent optional project image without a placeholder or broken src', () => {
  const original = projects[0].image;
  Object.defineProperty(projects[0], 'image', {
    value: undefined,
    configurable: true,
  });
  try {
    render(<ProjectsSection language="pt" text={translations.pt} />);
    expect(screen.getAllByRole('img')).toHaveLength(4);
    expect(
      screen.queryByAltText(media.reportsCover.alt.pt),
    ).not.toBeInTheDocument();
  } finally {
    Object.defineProperty(projects[0], 'image', {
      value: original,
      configurable: true,
    });
  }
});
