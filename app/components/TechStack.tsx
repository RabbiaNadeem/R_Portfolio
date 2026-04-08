import { portfolioData } from '../data/portfolio';

export const TechStack = () => {
  const tech = portfolioData.techStack;

  const categories = [
    { label: 'Languages & Frameworks', items: tech.languages },
    { label: 'APIs & Services', items: tech.apis },
    { label: 'Databases', items: tech.databases },
    { label: 'Deployment', items: tech.deployment },
    { label: 'AI & Advanced', items: tech.ai },
    { label: 'Tools', items: tech.tools },
  ];

  return (
    <section id="tech-stack" className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.label}
            className="backdrop-blur-md bg-white/5 border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-cyan-300 mb-4">
              {category.label}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
