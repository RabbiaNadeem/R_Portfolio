import StarField from './components/StarField';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <div className="relative z-10 min-h-screen text-[var(--text)]">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="lg:flex">
            {/* Left Column - Header */}
            <div className="lg:w-2/5 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-16">
              <div>
                <div className="name-container">
                  {'RABBIA NADEEM'.split('').map((char, index) => (
                    <div key={index} className="hover">
                      <h1>{char === ' ' ? '\u00A0' : char}</h1>
                    </div>
                  ))}
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a href="#about" className="nav-item text-[var(--accent)] hover:text-white transition-colors">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#experience" className="nav-item text-[var(--accent)] hover:text-white transition-colors">
                        Experience
                      </a>
                    </li>
                    <li>
                      <a href="#projects" className="nav-item text-[var(--accent)] hover:text-white transition-colors">
                        Projects
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex space-x-4 mt-8 lg:mt-0">
                <a href="#" className="text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                  Twitter
                </a>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-3/5 lg:pl-16">
              {/* About Section */}
              <section id="about" className="py-16">
                <div className="bg-white p-8 rounded-lg hover:bg-gray-300 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <h2 className="text-2xl font-bold text-black mb-6">About</h2>
                  <p className="mb-4 text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-black">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </section>

              {/* Experience Section */}
              <section id="experience" className="py-16">
                <div className="bg-white p-8 rounded-lg hover:bg-gray-300 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <h2 className="text-2xl font-bold text-black mb-6">Experience</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-black">Senior Developer</h3>
                      <p className="text-black mb-2">Company Name • 2020 - Present</p>
                      <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black">Junior Developer</h3>
                      <p className="text-black mb-2">Another Company • 2018 - 2020</p>
                      <p className="text-black">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="py-16">
                <div className="bg-white p-8 rounded-lg hover:bg-gray-300 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <h2 className="text-2xl font-bold text-black mb-6">Projects</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-6 bg-gray-400 rounded-lg hover:bg-gray-300 transition-colors">
                      <h3 className="text-xl font-semibold text-black mb-2">Project One</h3>
                      <p className="mb-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-300 text-black text-xs rounded">React</span>
                        <span className="px-2 py-1 bg-gray-300 text-black text-xs rounded">TypeScript</span>
                        <span className="px-2 py-1 bg-gray-300 text-black text-xs rounded">Tailwind</span>
                      </div>
                    </div>
                    <div className="p-6 bg-gray-400 rounded-lg hover:bg-gray-300 transition-colors">
                      <h3 className="text-xl font-semibold text-black mb-2">Project Two</h3>
                      <p className="mb-4 text-black">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-300 text-black text-xs rounded">Next.js</span>
                        <span className="px-2 py-1 bg-gray-300 text-black text-xs rounded">Node.js</span>
                        <span className="px-2 py-1 bg-gray-300 text-black text-xs rounded">MongoDB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
