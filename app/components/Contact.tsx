import { portfolioData } from '../data/portfolio';

export const Contact = () => {
  const { contact } = portfolioData;

  const contactLinks = [
    { label: 'GitHub', href: contact.github, icon: '🔗' },
    { label: 'LinkedIn', href: contact.linkedin, icon: '🔗' },
    { label: 'Email', href: `mailto:${contact.email}`, icon: '✉️' },
    { label: 'Phone', href: `tel:${contact.phone}`, icon: '📞' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-purple-400/20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-gray-300 mb-12 text-lg">
          Feel free to reach out for collaborations or discussions about AI, web development, and innovative tech solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="backdrop-blur-md bg-white/5 border border-cyan-400/30 rounded-lg p-4 hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <p className="text-cyan-300 font-semibold hover:text-white">
                {link.label}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-purple-400/20">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rabbia Nadeem. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
