import React from 'react';

const Lineage: React.FC = () => {
  const masters = [
    {
      name: "Grandmaster Moy Yat",
      title: "The Patriarch - NYC",
      description: "A close student of Yip Man who brought the system to New York City, emphasizing \"Kung Fu Life\" lived everyday.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTc7eQCAJy9bWTTZSsIqOeT8_lDFLapltSyOlv89C911OPY0ppiuENeNctT4Zwy1nzmlfRkyMM79C_fkl0pZI6pqmshZgmP6CTcEKiXSVEstQsn8uB1q95RRqSAXtIptVo8tNqmevGkkpl4MH3c-_mEhsfiasqObBT7_FkzbYP95txeQCq8PZ6-9aeeefZRVnlTxzyvLPz7xU-t0nFXcVFScUI1YtRn_2Vun7UdQm9cY9CkRYBKTj3-hYWPudLC2b_2m722fSeb8Y8",
      borderColor: "border-heritage-light"
    },
    {
      name: "Grandmaster Moy Tung",
      title: "Richmond, VA",
      description: "Founder of the Moy Yat Ving Tsun Kung Fu realm in Richmond, known for his powerful application and dedication.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxx3460r40Ohh7DaGjktv5RA4G4Zoi8Vo3hFOAeqIrTwrqoED1X9PreEtU1fHn_d_PjWMW7xThrIBcZeS_vZZX0F5J8tOCLL0aM5LZgNrflGYz0xndwmNDxVQ1AISyhnIa7G179wiowm7wuuh8G9ci8omYFSjNLeIs3zgrsQXcEcqzb-G2tCbVBXTySIg_MOqKFBnrY2PNItQruTX7Y_bSAUuSUoVzjlxLGXBmbj6_NSDTNPgUP6KikdyJMEhn7S9h-lk4Jt39HmUc",
      borderColor: "border-heritage-light"
    },
    {
      name: "Sifu Moy Sup Tung",
      title: "Head Instructor - South Austin",
      description: "Bringing the lineage to the tech hub of Texas. Teaching the art with precision and modern context.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPqGwyeBQ7okMuDHZBi6CMD_u0kBMpnmIXClqSLnmsk6yyl3IfALaEHmhPnW0CZCHzWATOqwJX9UN6eN-NPJ0SfZdG4L1t4eZlMewuJj9BX9GPHSms47yPq7pdTyfFZeMKAPnCPmzpbYTIWINp-BrKysYAj2Jz6-i9BX6aFK3plJtq3lwZ-3CzkxdhnxU-16Sjz5vfpM2DcrW8zxsiCZJqU2cUUprBe-AFvTDASlxKmVfALmB-QdE3azZ3HBlz722uv1BAF3w9rpHw",
      borderColor: "border-heritage-ochre"
    }
  ];

  return (
    <section className="relative bg-heritage-tan py-24 border-y border-heritage-ochre/30" id="lineage">
      <div className="grain-overlay opacity-30"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Image & Text */}
          <div>
            <div className="inline-flex items-center gap-3 text-heritage-green font-mono font-bold mb-6 uppercase tracking-widest text-xs">
              <span className="h-px w-12 bg-heritage-green"></span>
              Authentic Roots
            </div>
            <h2 className="text-5xl font-serif text-heritage-green mb-8 leading-tight">Our Lineage</h2>
            <p className="text-heritage-dark/80 text-lg leading-relaxed mb-10 font-light">
              We are dedicated to preserving the Ving Tsun (Wing Chun) system as passed down through the late Grandmaster Moy Yat. Our connection to the source ensures you learn the complete system, unaltered.
            </p>
            <div className="relative h-80 w-full overflow-hidden shadow-2xl border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div 
                className="absolute inset-0 bg-cover bg-center sepia-[.3]" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0TQ4aulnBLOR80hTviTuF1rR2-gHaNGNrlkR40p4D9NJZ5QF6o2wgxeIaMa09x9kSYNHK0YFY1sAp5fMwgIKGxNtUXW4kJ5OcXAKyIC2jMFEA77auQ8Hbt453tRuTHBvBlmeSSnwyLzhTnHz1qY5RNdTf9AHWRDCkST0jdBk9FONBNZ75bh6bLrfxHP8VQGQ2LLRyy9XHO_Zfw_2zLqr-OdUdjalXd_8V52uUnvdlPUzOsey9wPm8N9i5t_uXcnSD_PDGT77QtfV")' }}
              />
              <div className="absolute inset-0 bg-heritage-green/20 mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 w-full bg-heritage-green/90 p-6 backdrop-blur-sm">
                <p className="font-serif text-2xl text-heritage-light">The Wooden Dummy</p>
                <p className="text-heritage-ochre font-mono text-xs uppercase tracking-widest mt-1">Precision Training Tool</p>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="relative pt-8 lg:pl-10">
            {/* The vertical dashed line */}
            <div className="absolute left-10 lg:left-20 top-0 bottom-0 w-px dashed-line"></div>
            
            <div className="space-y-12">
              {masters.map((master, index) => (
                <div key={index} className="flex gap-6 relative group">
                  <div className="flex flex-col items-center relative z-10">
                    <div 
                      className={`h-16 w-16 rounded-full border-4 ${master.borderColor} shadow-md bg-heritage-gray bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300`} 
                      style={{ backgroundImage: `url("${master.image}")` }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-heritage-green">{master.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-heritage-ochre mb-3 font-mono">{master.title}</p>
                    <p className="text-heritage-dark/70 text-sm leading-relaxed">{master.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Lineage;