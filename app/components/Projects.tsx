"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "../data/portfolio";

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!activeProject) {
      setLightboxSrc(null);
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (lightboxSrc) {
        setLightboxSrc(null);
        return;
      }
      setActiveProject(null);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeProject, lightboxSrc]);

  function closeDrawer() {
    setLightboxSrc(null);
    setActiveProject(null);
  }

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
            onClick={closeDrawer}
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
                onClick={closeDrawer}
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
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                  {imgs.map((src, i) => (
                    <button
                      key={`${src}-${i}`}
                      type="button"
                      onClick={() => setLightboxSrc(src)}
                      className="group relative rounded-lg border border-white/20 bg-zinc-950/50 overflow-hidden p-1 sm:p-2 focus:outline-none focus:ring-2 focus:ring-white/40"
                      aria-label={`Enlarge screenshot ${i + 1} of ${imgs.length}`}
                    >
                      <img
                        src={src}
                        alt={`${activeProject.title} preview${imgs.length > 1 ? ` ${i + 1}` : ""}`}
                        className="h-28 sm:h-36 md:h-44 w-full object-contain object-top bg-black/40"
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                      <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-semibold drop-shadow">
                          View larger
                        </span>
                      </span>
                    </button>
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

      {lightboxSrc && activeProject ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8">
          <button
            type="button"
            aria-label="Close enlarged image"
            onClick={() => setLightboxSrc(null)}
            className="absolute inset-0 bg-black/85"
          />
          <div className="relative z-10 max-h-[90vh] max-w-[min(96vw,1200px)] w-full flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setLightboxSrc(null)}
              aria-label="Close"
              className="self-end flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black border border-white/20 text-white text-xl leading-none hover:bg-white/10"
            >
              ×
            </button>
            <img
              src={lightboxSrc}
              alt={`${activeProject.title} enlarged preview`}
              className="max-h-[calc(90vh-4rem)] w-full object-contain rounded-lg border border-white/20 shadow-2xl"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
};
