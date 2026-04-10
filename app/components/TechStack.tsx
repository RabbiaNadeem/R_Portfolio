import { portfolioData } from '../data/portfolio';

export const TechStack = () => {
  const tech = portfolioData.techStack;

  const categories = [
    { label: 'Languages & Frameworks', items: tech.languages },
    { label: 'APIs & Services', items: tech.tools },
    { label: 'Infrastructure', items: tech.infrastructure },
    { label: 'AI & Advanced Concepts', items: tech.ai },
  ];

  return (
    <section id="tech-stack" className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div
            key={category.label}
            className="backdrop-blur-md bg-white/5 border border-white/20 rounded-lg p-5 sm:p-6 hover:border-white/50 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              {category.label}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-white mr-3"></span>
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
