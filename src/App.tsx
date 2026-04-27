import { Header } from './components/layout/Header';
import { HeroVideo } from './components/hero/HeroVideo';
import { CtaSection } from './components/sections/CtaSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { WhatItIsSection } from './components/sections/WhatItIsSection';
import { WhoItIsForSection } from './components/sections/WhoItIsForSection';

export default function App() {
  return (
    <main className="page">
      <Header />
      <section id="top" className="hero">
        <HeroVideo />
      </section>
      <WhatItIsSection />
      <WhoItIsForSection />
      <HowItWorksSection />
      <CtaSection />
    </main>
  );
}
