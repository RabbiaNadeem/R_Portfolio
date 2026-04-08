import { portfolioData } from '../data/portfolio';

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-cyan-400/30 rounded-lg p-8 hover:border-cyan-400/60 transition-all duration-300 group"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-purple-300 text-sm font-semibold mt-1">
                {project.subtitle}
              </p>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-400/20 transition-all duration-300 text-center font-semibold"
              >
                GitHub
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 text-white hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 text-center font-semibold"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
