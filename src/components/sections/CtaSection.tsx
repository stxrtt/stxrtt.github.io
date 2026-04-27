import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="cta" className="cta">
      <div className="cta-inner">
        <p className="eyebrow">Get started</p>
        <h2>Bring WorldPool to your community.</h2>
        <p>
          If you are building for people who want to save together with clarity and trust, WorldPool is designed for that use case.
        </p>
        <div className="cta-actions">
          <a className="button button--primary" href="mailto:hello@worldpool.app">
            Contact the team <ArrowUpRight size={16} />
          </a>
          <a className="button button--secondary" href="#top">
            Back to top <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
