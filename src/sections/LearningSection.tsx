import type { SectionProps } from '../content/contracts';
import { BookOpen } from 'lucide-react';
import { courses } from '../content/courses';
import { SectionHeading } from '../components/SectionHeading';

export function LearningSection({ text }: SectionProps) {
  return (
    <section id="learning" className="section learning-section">
      <div className="container">
        <SectionHeading
          kicker={text.kickers.learning}
          title={text.learning}
          lead={text.learningLead}
        />
        <div className="learning-grid">
          {courses.map((course, index) => (
            <div className="course" key={course.id}>
              <span className="course-index">0{index + 1}</span>
              <div>
                <h3>{course.title}</h3>
                <p>{course.institution}</p>
              </div>
              <BookOpen size={22} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
