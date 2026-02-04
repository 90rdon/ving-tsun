import React from 'react';

interface PhilosophyCardProps {
  icon: string;
  title: string;
  description: string;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ icon, title, description }) => (
  <div className="group relative bg-[#FDFBF7] p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-[#EBE5D5] hover:border-heritage-green transition-all duration-300">
    <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-heritage-green text-heritage-light shadow-lg group-hover:bg-heritage-ochre group-hover:text-heritage-green transition-colors">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="mb-4 text-2xl font-serif text-heritage-green">{title}</h3>
    <p className="text-heritage-gray leading-relaxed">{description}</p>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-heritage-ochre scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
  </div>
);

const Philosophy: React.FC = () => {
  const items = [
    {
      icon: "psychology",
      title: "Mindfulness",
      description: "Find stillness in motion. Ving Tsun demands total focus, offering a necessary mental break from code and meetings."
    },
    {
      icon: "timer",
      title: "Efficiency",
      description: "Maximum output, minimum effort. We apply the physics of \"centerline theory\" to combat, much like optimizing an algorithm."
    },
    {
      icon: "shield",
      title: "Application",
      description: "Traditional techniques refined for urban self-defense. Practical, direct, and effective for the South Austin environment."
    }
  ];

  return (
    <section className="relative bg-heritage-light py-32" id="training">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/5 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-heritage-green/60 block mb-4">The Practice</span>
          <h2 className="text-5xl font-serif text-heritage-green mb-6">The Kung Fu Life</h2>
          <div className="w-24 h-1 bg-heritage-ochre mx-auto mb-6"></div>
          <p className="text-xl text-heritage-gray max-w-2xl mx-auto font-light leading-relaxed">
            Unlock efficiency and mindfulness through the Ving Tsun system. A physical reset from the digital grind.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {items.map((item, index) => (
            <PhilosophyCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;