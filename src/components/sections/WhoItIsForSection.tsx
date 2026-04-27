import { whoItIsFor } from '../../content/siteContent';
import { Section } from '../layout/Section';

export function WhoItIsForSection() {
  return (
    <Section id="who-its-for" eyebrow="Who it’s for" title="Built for real groups saving for real goals.">
      <div className="grid grid--3">
        {whoItIsFor.map((item) => (
          <article key={item.title} className="panel">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
