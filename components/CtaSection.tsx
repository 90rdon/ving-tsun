import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="relative bg-heritage-green py-24 overflow-hidden" id="schedule">
      <div className="grain-overlay opacity-10"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 border-[40px] border-white/5 rounded-full"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 border-[20px] border-heritage-ochre/10 rounded-full"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 bg-heritage-light rounded-sm shadow-2xl overflow-hidden">
          
          {/* Info Side */}
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <div className="inline-block border border-heritage-green/20 px-3 py-1 mb-6 w-fit bg-heritage-green/5">
              <span className="text-xs font-mono uppercase tracking-widest text-heritage-green">Introductory Offer</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-heritage-green mb-6 leading-none">Upgrade your hardware.</h2>
            <p className="text-heritage-gray mb-10 text-lg leading-relaxed">
              Join us for a one-week introductory course. Experience the training firsthand with no long-term commitment.
            </p>
            <ul className="space-y-4 mb-10">
              {['Private Orientation Lesson', 'Access to Group Classes', 'Official Ving Tsun Uniform Shirt'].map((item, i) => (
                <li key={i} className="flex items-center text-heritage-dark font-medium">
                  <span className="material-symbols-outlined text-heritage-ochre mr-4">verified</span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full sm:w-auto flex items-center justify-center rounded-sm bg-heritage-green px-8 py-4 text-base font-bold uppercase tracking-wider text-heritage-light transition-all hover:bg-heritage-dark hover:shadow-lg border border-transparent hover:border-heritage-ochre">
              Sign Up Now - $49.95
            </button>
          </div>

          {/* Map Side */}
          <div className="relative h-96 lg:h-auto bg-heritage-tan border-l border-heritage-gray/10 group">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale sepia contrast-125 transition-transform duration-1000 group-hover:scale-105" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB80Esd1Cqp5LxXLPUWAMrjL7ctKrzPvecc7JDbJM16BGtSKHit-6zaSTYwazZh1LULeBh7EKYVE4GWe3z1JwfX2OwflsIeBllWl2IACNURxO-82J6gX8bdp9T-xzs3HOXtt00xpOHLsbHKloTYA2KNePsI_zTum3vWPIgTOBgmywMz6InS629Rw8AOV9oIJXGz6tMEo-RlN1TgJlJFO_1SgVc_FrZ8utRVpHWtZhyDCYlipHTEpfDNgtBzn4XxmMAJoVYygxsu8MH5")' }}
            />
            <div className="absolute inset-0 bg-heritage-ochre/20 mix-blend-multiply"></div>
            
            {/* Map Pin Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-heritage-light p-6 shadow-xl border-t-4 border-heritage-ochre hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-heritage-green font-serif text-xl">South Austin Ving Tsun</p>
                  <p className="text-heritage-gray text-sm mt-2 font-light">123 Congress Ave, Suite 101<br />Austin, TX 78704</p>
                </div>
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-heritage-green text-heritage-light">
                  <span className="material-symbols-outlined text-xl">near_me</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;