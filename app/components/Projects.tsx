"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "../data/portfolio";

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!activeProject) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeProject]);

  return (
    <section id="projects" className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Featured Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setActiveProject(project)}
            className="text-left backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/30 rounded-lg p-5 sm:p-6 md:p-8 hover:border-white/60 transition-all duration-300 group"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm font-semibold mt-1">{project.subtitle}</p>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed line-clamp-2">{project.description}</p>
            <p className="text-white text-sm mt-5 font-semibold">Click to view project details</p>
          </button>
        ))}
      </div>

      {activeProject ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close project details"
            onClick={() => setActiveProject(null)}
            className="absolute inset-0 bg-black/70"
          />
          <aside className="absolute right-0 bottom-0 top-[clamp(5.5rem,12vh,9.5rem)] w-full sm:w-[82vw] lg:w-[75vw] max-w-6xl overflow-y-auto bg-black border-l border-t border-white/20 rounded-none sm:rounded-tl-2xl sm:rounded-bl-2xl p-5 sm:p-6 md:p-8 shadow-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:bg-transparent">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{activeProject.title}</h3>
                <p className="text-gray-300 font-semibold mt-1">{activeProject.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black text-lg font-light leading-none text-white hover:bg-black/90 border border-white/10 transition-colors"
              >
                ×
              </button>
            </div>

            {(() => {
              const imgs = [activeProject.image, ...(activeProject.gallery ?? [])].filter(
                (src): src is string => Boolean(src)
              );
              return (
                <div className="space-y-3 mb-6">
                  {imgs.map((src, i) => (
                    <div
                      key={`${src}-${i}`}
                      className="rounded-lg border border-white/20 bg-zinc-950/50 flex justify-center p-2 sm:p-3"
                    >
                      <img
                        src={src}
                        alt={`${activeProject.title} preview${imgs.length > 1 ? ` ${i + 1}` : ""}`}
                        className="h-auto w-full max-w-full max-h-[min(78vh,920px)] object-contain object-center"
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              );
            })()}

            <p className="text-gray-300 leading-relaxed mb-6">{activeProject.description}</p>

            <ul className="space-y-3 text-gray-300 mb-6">
              {(activeProject.bullets ?? []).map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="flex items-start gap-3">
                  <span className="text-white/70 mt-1.5 shrink-0" aria-hidden="true">
                    ◆
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {activeProject.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-3 py-1 rounded-full bg-white/20 text-white border border-white/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 px-4 py-2 rounded-lg border border-white text-white hover:bg-white/20 transition-all duration-300 text-center font-semibold"
              >
                GitHub
              </a>
              {(() => {
                const url =
                  "liveDemo" in activeProject
                    ? (activeProject as { liveDemo?: string }).liveDemo
                    : undefined;
                return url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 px-4 py-2 rounded-lg border border-white text-white hover:bg-white/20 transition-all duration-300 text-center font-semibold"
                  >
                    Live Demo
                  </a>
                ) : null;
              })()}
            </div>
          </aside>
        </div>
      ) : null}
    </section>
  );
};
