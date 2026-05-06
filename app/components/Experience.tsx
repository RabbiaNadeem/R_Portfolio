import { portfolioData } from '../data/portfolio';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
        Professional Experience
      </h2>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/5 border border-white/20 rounded-lg p-5 sm:p-6 md:p-8 hover:border-white/50 transition-all duration-300"
          >
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">{job.title}</h3>
              <p className="text-white font-semibold">{job.company}</p>
              <p className="text-sm text-gray-400">{job.timeline}</p>
            </div>
            <ul className="space-y-3">
              {job.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-0.5 shrink-0 text-white font-bold" aria-hidden="true">
                    ▸
                  </span>
                  <span className="min-w-0">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
