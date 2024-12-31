// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Parallax effect for first S image
  gsap.to('.first-s-image', {
      scrollTrigger: {
          trigger: '.skills-showcase',
          start: "top bottom",
          end: "bottom top",
          scrub: 2
      },
      y: "-22%",
      ease: "none"
  });

  // Parallax effect for K image
  gsap.to('.k-image', {
      scrollTrigger: {
          trigger: '.skills-showcase',
          start: "top bottom",
          end: "bottom top",
          scrub: 2
      },
      y: "22%",
      ease: "none"
  });

  // Parallax effect for L below image
  gsap.to('.l-below-image', {
      scrollTrigger: {
          trigger: '.skills-showcase',
          start: "top bottom",
          end: "bottom top",
          scrub: 2
      },
      y: "-22%",
      ease: "none"
  });

  // Parallax effect for L above image
  gsap.to('.l-above-image', {
      scrollTrigger: {
          trigger: '.skills-showcase',
          start: "top bottom",
          end: "bottom top",
          scrub: 2
      },
      y: "22%",
      ease: "none"
  });

  // Parallax effect for last S image
  gsap.to('.last-s-image', {
      scrollTrigger: {
          trigger: '.skills-showcase',
          start: "top bottom",
          end: "bottom top",
          scrub: 2
      },
      y: "-22%",
      ease: "none"
  });
});