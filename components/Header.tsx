import React, { useState } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-heritage-green text-heritage-light border-b border-[#3D5E4D] shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Lockup */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-heritage-ochre bg-heritage-green text-heritage-ochre transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-[24px]">self_improvement</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif tracking-wide leading-none text-white uppercase group-hover:text-heritage-ochre transition-colors">South Austin</span>
            <span className="text-xs font-mono tracking-[0.2em] text-heritage-ochre uppercase">Ving Tsun Kung Fu</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {['Lineage', 'Training', 'Schedule'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-bold uppercase tracking-widest text-heritage-light/80 hover:text-heritage-ochre transition-colors font-mono"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center justify-center rounded-sm bg-heritage-ochre px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-heritage-green transition-all hover:bg-[#C28E4D] hover:shadow-lg hover:text-white">
            Start Training
          </button>
          
          <button 
            className="flex md:hidden items-center justify-center text-heritage-light hover:text-heritage-ochre transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-heritage-green border-b border-[#3D5E4D] shadow-xl py-6 px-4 flex flex-col gap-6">
          <nav className="flex flex-col gap-4 text-center">
            {['Lineage', 'Training', 'Schedule'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-bold uppercase tracking-widest text-heritage-light/90 hover:text-heritage-ochre transition-colors font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <button className="w-full flex items-center justify-center rounded-sm bg-heritage-ochre px-6 py-3 text-sm font-bold uppercase tracking-wider text-heritage-green">
            Start Training
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;