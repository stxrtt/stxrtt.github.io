import { navigation } from '../../content/siteContent';

export function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="WorldPool home">
        <img className="brand-logo" src="/worldpool.svg" alt="WorldPool" />
        <span>WorldPool</span>
      </a>
      <nav className="nav" aria-label="Primary">
        {navigation.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
