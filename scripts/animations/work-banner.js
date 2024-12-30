gsap.registerPlugin(ScrollTrigger);

const banner = document.querySelector('.banner-content');

gsap.to(banner, {
    x: () => -(banner.offsetWidth - window.innerWidth) * 0.5, // Increased movement range
    ease: "none",
    scrollTrigger: {
        trigger: ".work-banner",
        start: "top 40%", // Changed to start when banner hits center
        end: "+=180%",      // Increased scroll distance
        scrub: 2,           // Made scrub faster for smoother movement
       //markers: true    // Uncomment to see trigger points
    }
});