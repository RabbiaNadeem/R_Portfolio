import { portfolioData } from '../data/portfolio';

export const Hero = () => {
  const { tagline, bio } = portfolioData.hero;

  return (
    <section id="about" className="py-12 md:py-20">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Full Stack Developer
        </h2>
        <p className="text-xl text-white font-semibold leading-relaxed">
          {tagline}
        </p>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
          {bio}
        </p>
      </div>
    </section>
  );
};
