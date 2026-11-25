import { useId, useLayoutEffect, useRef, useState } from 'react';
import { ModalDialog } from './ModalDialog';
import { animateSafely, motion } from '../motion/motion';
import type {
  GalleryCollection,
  GalleryItem,
  Language,
  Translation,
} from '../content/contracts';

interface GalleryViewerProps {
  readonly collection: GalleryCollection;
  readonly initialIndex?: number;
  readonly language: Language;
  readonly text: Translation['gallery'];
  readonly onClose: () => void;
}

function GalleryMedia({
  item,
  language,
  enlarged,
  errorText,
}: {
  readonly item: GalleryItem;
  readonly language: Language;
  readonly enlarged: boolean;
  readonly errorText: string;
}) {
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    const video = videoRef.current;
    const element = video ?? imageRef.current;
    const animation =
      element &&
      animateSafely(element, [{ opacity: 0.7 }, { opacity: 1 }], motion.media);
    return () => {
      animation?.cancel();
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
    };
  }, []);

  if (failed) return <p role="alert">{errorText}</p>;
  if (item.kind === 'video') {
    return (
      <video
        ref={videoRef}
        src={item.src}
        poster={item.poster.src}
        width={item.poster.width}
        height={item.poster.height}
        controls
        preload="none"
        aria-label={item.caption[language]}
        onError={(event) => {
          event.currentTarget.pause();
          setFailed(true);
        }}
      />
    );
  }
  return (
    <img
      ref={imageRef}
      src={item.image.src}
      width={item.image.width}
      height={item.image.height}
      alt={item.image.alt[language]}
      decoding="async"
      className={enlarged ? 'gallery-image-enlarged' : undefined}
      onError={() => setFailed(true)}
    />
  );
}

export function GalleryViewer({
  collection,
  initialIndex = 0,
  language,
  text,
  onClose,
}: GalleryViewerProps) {
  const [index, setIndex] = useState(initialIndex);
  const [enlarged, setEnlarged] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const captionId = useId();
  const helpId = useId();
  const item = collection.items[index];
  const position = text.position
    .replace('{current}', String(index + 1))
    .replace('{total}', String(collection.items.length));

  function choose(nextIndex: number) {
    setIndex(nextIndex);
    setEnlarged(false);
    if (viewportRef.current) {
      viewportRef.current.scrollTop = 0;
      viewportRef.current.scrollLeft = 0;
      viewportRef.current.focus({ preventScroll: true });
    }
  }

  return (
    <ModalDialog
      className="gallery-dialog"
      titleId={titleId}
      descriptionId={descriptionId}
      initialFocus={closeRef}
      onClose={onClose}
    >
      <header className="gallery-header">
        <h2 id={titleId}>{collection.title}</h2>
        <button ref={closeRef} type="button" data-dialog-close>
          {text.close}
        </button>
      </header>
      {collection.category && <p>{collection.category[language]}</p>}
      <p id={descriptionId}>{collection.description[language]}</p>
      <div className="gallery-controls">
        <button
          type="button"
          disabled={index === 0}
          onClick={() => choose(index - 1)}
        >
          {text.previous}
        </button>
        <p role="status" aria-live="polite" aria-atomic="true">
          {position}
        </p>
        <button
          type="button"
          disabled={index === collection.items.length - 1}
          onClick={() => choose(index + 1)}
        >
          {text.next}
        </button>
      </div>
      {item.kind === 'image' && (
        <button
          className="gallery-zoom-button"
          type="button"
          aria-pressed={enlarged}
          onClick={() => setEnlarged(!enlarged)}
        >
          {enlarged ? text.resetZoom : text.zoom}
        </button>
      )}
      {enlarged && <p id={helpId}>{text.zoomHelp}</p>}
      <div
        className={`gallery-viewport${enlarged ? ' is-enlarged' : ''}`}
        ref={viewportRef}
        role="region"
        aria-labelledby={captionId}
        aria-describedby={enlarged ? helpId : undefined}
        tabIndex={0}
      >
        <GalleryMedia
          key={item.id}
          item={item}
          language={language}
          enlarged={enlarged}
          errorText={text.error}
        />
      </div>
      <p className="gallery-caption" id={captionId}>
        {item.caption[language]}
      </p>
      <div
        className="gallery-thumbnails"
        role="group"
        aria-label={text.thumbnails}
      >
        {collection.items.map((entry, entryIndex) => (
          <button
            key={entry.id}
            type="button"
            aria-pressed={entryIndex === index}
            aria-label={text.choose
              .replace('{number}', String(entryIndex + 1))
              .replace('{caption}', entry.caption[language])}
            onClick={() => choose(entryIndex)}
          >
            <img
              src={entry.thumbnail.src}
              width={entry.thumbnail.width}
              height={entry.thumbnail.height}
              alt=""
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.visibility = 'hidden';
              }}
            />
            <span aria-hidden="true">
              {entryIndex + 1}
              {entry.kind === 'video' ? ` · ${text.video}` : ''}
            </span>
          </button>
        ))}
      </div>
    </ModalDialog>
  );
}
