
// Simple scroll reveal animations
export const initScrollAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: "-50px"
    }
  );

  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((element) => {
    observer.observe(element);
  });
};
