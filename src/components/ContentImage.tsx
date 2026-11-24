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
  readonly actionLabel: string;
  readonly onOpen: () => void;
}

export function MediaFigure({
  image,
  language,
  actionLabel,
  onOpen,
}: MediaFigureProps) {
  return (
    <figure className="media-figure">
      <ContentImage image={image} language={language} />
      <figcaption>
        <button
          type="button"
          className="media-original-link"
          onClick={onOpen}
          aria-label={`${actionLabel}: ${image.alt[language]}`}
        >
          {actionLabel}
        </button>
      </figcaption>
    </figure>
  );
}
