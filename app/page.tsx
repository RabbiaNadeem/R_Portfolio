'use client';

import StarField from './components/StarField';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { portfolioData } from './data/portfolio';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <div className="relative z-10 text-[var(--text)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-16">
            {/* Left Column - Header (Sticky) */}
            <div className="lg:w-1/3 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-20">
              <div>
                <div className="name-container mb-12">
                  {'RABBIA NADEEM'.split('').map((char, index) => (
                    <div key={index} className="hover">
                      <h1>{char === ' ' ? '\u00A0' : char}</h1>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-xs">
                  Full Stack Developer crafting intelligent web solutions with AI
                </p>
                <nav>
                  <ul className="space-y-3">
                    <li>
                      <a href="#about" className="nav-item text-white hover:text-gray-300">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#tech-stack" className="nav-item text-white hover:text-gray-300">
                        Tech Stack
                      </a>
                    </li>
                    <li>
                      <a href="#experience" className="nav-item text-white hover:text-gray-300">
                        Experience
                      </a>
                    </li>
                    <li>
                      <a href="#projects" className="nav-item text-white hover:text-gray-300">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="#education" className="nav-item text-white hover:text-gray-300">
                        Education
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="nav-item text-white hover:text-gray-300">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-8 lg:pt-0">
                <a
                  href={portfolioData.contact.github}
                  target="https://github.com/RabbiaNadeem"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
                >
                  GitHub
                </a>
                <a
                  href={portfolioData.contact.linkedin}
                  target="www.linkedin.com/in/rabbianadeem"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-2/3 py-20 space-y-24">
              <Hero />
              <TechStack />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
