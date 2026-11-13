import type { SectionProps } from '../content/contracts';
import { BookOpen } from 'lucide-react';
import { courses } from '../content/courses';
import { SectionHeading } from '../components/SectionHeading';

export function LearningSection({ text }: SectionProps) {
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
              </div>
              <BookOpen size={22} aria-hidden="true" focusable="false" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
