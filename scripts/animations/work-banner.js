// Replace your current work-banner.js with this updated version

gsap.registerPlugin(ScrollTrigger);

// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.bannerw-content');
    
    // Check if banner exists to prevent errors
    if (banner) {
        let scrollTriggerInstance = null;

        function initBannerAnimation() {
            // Kill existing animation if it exists
            if (scrollTriggerInstance) {
                scrollTriggerInstance.kill();
                scrollTriggerInstance = null;
            }

            // Reset banner position
            gsap.set(banner, { x: 0 });

            // Only animate on screens wider than 768px
            if (window.innerWidth > 768) {
                // Ensure the banner has its full width calculated
                setTimeout(() => {
                    const bannerWidth = banner.offsetWidth;
                    const windowWidth = window.innerWidth;
                    
                    // Only animate if banner is wider than viewport
                    if (bannerWidth > windowWidth) {
                        scrollTriggerInstance = ScrollTrigger.create({
                            trigger: ".work-banner",
                            start: "top 70%",
                            end: "+=150%",
                            scrub: 2,
                            invalidateOnRefresh: true,
                            animation: gsap.to(banner, {
                                x: () => -(bannerWidth - windowWidth) * 0.7,
                                ease: "none"
                            })
                        });
                    }
                }, 100);
            }
        }

        // Initialize animation
        initBannerAnimation();

        // Add resize handler with debouncing
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                initBannerAnimation();
                ScrollTrigger.refresh();
            }, 250);
        });
    }
});