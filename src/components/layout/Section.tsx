import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  soft?: boolean;
};

export function Section({ id, eyebrow, title, children, soft = false }: SectionProps) {
  return (
    <section id={id} className={soft ? 'section section--soft' : 'section'}>
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
