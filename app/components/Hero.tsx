import { portfolioData } from '../data/portfolio';

export const Hero = () => {
  const { bio } = portfolioData.hero;
  const paragraphs = bio.split('\n\n');

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
