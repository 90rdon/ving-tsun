import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b-8 border-heritage-ochre">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat grayscale-[20%] sepia-[10%] transform scale-105" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXTUFsFTlZua1QwMGfZgRqD2E0JB4GZvQVDga-G1u6ta3GIadAsJP0F5OjUM-LhPNqNzBEZQdE4Hd24hRRRVshTcWItBqXo7568IAh7G9vQis3O7TMC1pf_XyLatjvTtpjBtrAcsexT--yTImwnMFoYf3IE5sIG9OI0ZiGlDps11dvI1M-BulbrkM0ZCLcdMoGQ5tN_XVVeQ9VQqYklDsHIDNtOH2pQqOqSoBN7rJewp-oRs49LVj2sQr7hWSwdJbN5ZloMCD7x9e8")' }}
          role="img"
          aria-label="Martial artist silhouette practicing wing chun against a neon stylized Austin skyline at night"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-green/95 via-heritage-green/70 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-green via-transparent to-transparent opacity-90"></div>
        <div className="grain-overlay"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl animate-fadeIn">
          <div className="mb-8 inline-flex items-center border-b-2 border-heritage-ochre pb-2">
            <span className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-heritage-ochre">Est. South Austin</span>
          </div>
          <h1 className="mb-6 text-6xl font-serif leading-none text-heritage-light sm:text-7xl lg:text-8xl text-shadow">
            Traditional Lineage.<br />
            <span className="italic text-heritage-ochre">Modern Mindset.</span>
          </h1>
          <p className="mb-10 text-xl text-heritage-light/90 font-light leading-relaxed max-w-lg text-shadow-sm font-sans border-l-4 border-heritage-ochre pl-6">
            Authentic Ving Tsun Kung Fu for the modern professional. Merging ancient efficiency with the innovative spirit of Austin.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="flex items-center justify-center gap-3 rounded-sm bg-heritage-ochre px-8 py-4 text-base font-bold uppercase tracking-wider text-heritage-green transition-all hover:bg-[#C28E4D] shadow-xl hover:translate-y-[-2px] hover:text-white">
              <span className="material-symbols-outlined text-[22px]">bolt</span>
              Intro Course $49.95
            </button>
            <button className="flex items-center justify-center gap-2 rounded-sm border-2 border-heritage-light px-8 py-4 text-base font-bold uppercase tracking-wider text-heritage-light transition-all hover:bg-heritage-light hover:text-heritage-green">
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;