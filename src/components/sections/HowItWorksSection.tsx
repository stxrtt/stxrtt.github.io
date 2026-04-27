import { howItWorks } from '../../content/siteContent';
import { Section } from '../layout/Section';

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" eyebrow="How it works" title="Clear structure, low friction, shared visibility." soft>
      <div className="timeline">
        {howItWorks.map((item) => (
          <article key={item.step} className="timeline-item">
            <span className="timeline-step">{item.step}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
