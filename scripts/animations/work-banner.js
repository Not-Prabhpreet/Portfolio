gsap.registerPlugin(ScrollTrigger);

const banner = document.querySelector('.banner-content');

gsap.to(banner, {
    x: () => -(banner.offsetWidth - window.innerWidth) * 0.7, // Increased movement range
    ease: "none",
    scrollTrigger: {
        trigger: ".work-banner",
        start: "top 60%", // Changed to start when banner hits center
        end: "+=150%",      // Increased scroll distance
        scrub: 2,           // Made scrub faster for smoother movement
       //markers: true    // Uncomment to see trigger points
    }
});