function initMovingBanner() {
    // Select both banner contents for the infinite scroll effect
    const bannerWrapper = document.querySelector('.banner-wrapper');
    
    // Create the scrolling animation
    gsap.to(bannerWrapper, {
        x: '-50%',
        duration: 18,
        ease: 'none',
        repeat: -1,
        // Makes the animation run smoothly with no jumps
        onComplete: () => {
            gsap.set(bannerWrapper, { x: '0%' });
        }
    });
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', initMovingBanner);