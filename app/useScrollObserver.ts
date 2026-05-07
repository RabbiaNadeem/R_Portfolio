import { useEffect } from 'react';

export const useScrollObserver = () => {
  useEffect(() => {
    const sections = ['about', 'chat-with-biyya', 'tech-stack', 'experience', 'projects', 'education', 'contact'];
    const navLinks = document.querySelectorAll('.nav-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
            if (activeLink) {
              activeLink.classList.add('active');
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
};
