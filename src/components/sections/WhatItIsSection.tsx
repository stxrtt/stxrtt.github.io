import { whatItIs } from '../../content/siteContent';
import { Section } from '../layout/Section';

export function WhatItIsSection() {
  return (
    <Section id="what-it-is" eyebrow="What it is" title="A simple way to save with the people you trust." soft>
      <div className="grid grid--3">
        {whatItIs.map((item) => (
          <article key={item.title} className="info-card">
            <item.icon size={20} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
