import type { SectionProps } from '../content/contracts';
import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { courses } from '../content/courses';
import { SectionHeading } from '../components/SectionHeading';
import { MediaFigure } from '../components/ContentImage';
import { GalleryViewer } from '../components/GalleryViewer';
import { certificateGalleries } from '../content/galleries';

export function LearningSection({ language, text }: SectionProps) {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  return (
    <section id="learning" tabIndex={-1} className="section learning-section">
      <div className="container">
        <SectionHeading
          kicker={text.kickers.learning}
          title={text.learning}
          lead={text.learningLead}
        />
        <ol className="learning-grid" aria-label={text.learning}>
          {courses.map((course, index) => (
            <li className="course" key={course.id}>
              <span className="course-index" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>{course.title}</h3>
                <p>{course.institution}</p>
                {course.completedYear && course.completionLabel && (
                  <p>
                    {course.completionLabel[language].replace(
                      '{year}',
                      String(course.completedYear),
                    )}
                  </p>
                )}
              </div>
              <BookOpen size={22} aria-hidden="true" focusable="false" />
              {course.image && (
                <MediaFigure
                  image={course.image}
                  language={language}
                  actionLabel={text.gallery.viewImage}
                  onOpen={() => setViewerIndex(index)}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
      {viewerIndex !== null && (
        <GalleryViewer
          collection={certificateGalleries[viewerIndex]}
          language={language}
          text={text.gallery}
          onClose={() => setViewerIndex(null)}
        />
      )}
    </section>
  );
}
