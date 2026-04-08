import { portfolioData } from '../data/portfolio';

export const Hero = () => {
  const { tagline, bio } = portfolioData.hero;

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Full Stack Developer & AI Enthusiast
        </h2>
        <p className="text-xl text-cyan-300 font-semibold leading-relaxed">
          {tagline}
        </p>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
          {bio}
        </p>
      </div>
    </section>
  );
};
