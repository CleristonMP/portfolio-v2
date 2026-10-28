import type { Language, LocalMedia } from '../content/contracts';

interface ContentImageProps {
  readonly image: LocalMedia;
  readonly language: Language;
}

export function ContentImage({ image, language }: ContentImageProps) {
  return (
    <img
      className="content-image"
      src={image.src}
      width={image.width}
      height={image.height}
      alt={image.alt[language]}
      loading="lazy"
      decoding="async"
    />
  );
}

interface MediaFigureProps extends ContentImageProps {
  readonly originalLabel: string;
}

// A native image URL provides readable originals without a gallery or app route.
export function MediaFigure({
  image,
  language,
  originalLabel,
}: MediaFigureProps) {
  return (
    <figure className="media-figure">
      <ContentImage image={image} language={language} />
      <figcaption>
        <a
          className="media-original-link"
          href={image.src}
          aria-label={`${originalLabel}: ${image.alt[language]}`}
        >
          {originalLabel}
        </a>
      </figcaption>
    </figure>
  );
}
