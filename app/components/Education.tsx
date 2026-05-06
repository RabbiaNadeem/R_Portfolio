import { portfolioData } from '../data/portfolio';

export const Education = () => {
  const { education, achievements, certifications } = portfolioData;

  return (
    <section id="education" className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Education</h2>

      {/* Education */}
      <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-lg p-5 sm:p-6 md:p-8 mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{education.degree}</h3>
        <p className="text-white font-semibold">{education.school}</p>
        <p className="text-sm text-gray-400 mb-6">{education.timeline}</p>

        <h4 className="text-white font-semibold mb-3">Relevant Coursework</h4>
        <ul className="space-y-2">
          {education.coursework.map((course, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white"
                aria-hidden="true"
              />
              <span className="min-w-0">{course}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      <div className="mb-12">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/5 border border-white/20 rounded-lg p-4 sm:p-5 hover:border-white/50 transition-all duration-300 flex flex-col"
            >
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Certifications & Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/5 border border-white/20 rounded-lg p-4 hover:border-white/50 transition-all duration-300"
            >
              <p className="text-gray-300 flex items-start">
                <span className="text-white mr-3 font-bold">✓</span>
                <span>{cert}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
