gsap.registerPlugin(ScrollTrigger);

// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.bannerw-content');
    
    // Check if banner exists to prevent errors
    if (banner) {
        // Ensure the banner has its full width calculated
        setTimeout(() => {
            gsap.to(banner, {
                x: () => -(banner.offsetWidth - window.innerWidth) * 0.7,
                ease: "none",
                scrollTrigger: {
                    trigger: ".work-banner",
                    start: "top 70%",
                    end: "+=150%",
                    scrub: 2,
                    // markers: true,
                    invalidateOnRefresh: true // Recalculate on window resize
                }
            });
        }, 100);

        // Add resize handler
        window.addEventListener('resize', () => {
            ScrollTrigger.refresh();
        });
    }
});