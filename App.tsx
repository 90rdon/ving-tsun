import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Lineage from './components/Lineage';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Lineage />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;