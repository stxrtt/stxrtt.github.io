import { Play } from 'lucide-react';
import { heroIcons } from '../../content/siteContent';

export function HeroVideo() {
  return (
    <div className="hero-video" aria-hidden="true">
      <div className="hero-video__overlay" />
      <div className="hero-video__grain" />
      <div className="hero-orbit hero-orbit--a" />
      <div className="hero-orbit hero-orbit--b" />
      <div className="hero-orbit hero-orbit--c" />

      <div className="hero-card hero-card--top">
        <Play size={16} />
        <span>Placeholder launch film</span>
      </div>

      <div className="hero-card hero-card--center">
        <div className="card-stack">
          {heroIcons.map((Icon) => (
            <div key={Icon.displayName ?? Icon.name} className="card-icon">
              <Icon size={16} />
            </div>
          ))}
        </div>
        <div>
          <p className="card-title">Shared savings</p>
          <p className="card-copy">Transparent progress for one collective goal.</p>
        </div>
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Trust-first savings for World communities</p>
        <h1>Save together, grow together</h1>
        <p className="hero-summary">
          WorldPool is a non-custodial World Mini App for friends, family, and communities saving towards something they care about.
        </p>
      </div>
    </div>
  );
}
