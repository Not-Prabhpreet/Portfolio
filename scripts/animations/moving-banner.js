function initMovingBanner() {
    const bannerWrapper = document.querySelector('.banner-wrapper');
    const movingBanner = document.querySelector('.moving-banner');
    const bannerTexts = document.querySelectorAll('.banner-text');
    
    const animationSpeed = 18;
    let isBlackMode = false; // Track current state

    // Initial animation
    let tween = gsap.to(bannerWrapper, {
        x: '-50%',
        duration: animationSpeed,
        ease: 'none',
        repeat: -1
    });

    // Function to toggle animation state
    function toggleBannerState() {
        tween.kill();
        
        isBlackMode = !isBlackMode; // Toggle state

        if (isBlackMode) {
            // Switch to black mode
            movingBanner.style.backgroundColor = 'var(--color-black)';
            bannerTexts.forEach(text => text.style.color = 'var(--color-offwhite)');
            
            tween = gsap.fromTo(bannerWrapper,
                { x: '-50%' },
                {
                    x: '0%',
                    duration: animationSpeed,
                    ease: 'none',
                    repeat: -1
                }
            );
        } else {
            // Switch to white mode
            movingBanner.style.backgroundColor = 'var(--color-offwhite)';
            bannerTexts.forEach(text => text.style.color = 'var(--color-black)');
            
            tween = gsap.fromTo(bannerWrapper,
                { x: '0%' },
                {
                    x: '-50%',
                    duration: animationSpeed,
                    ease: 'none',
                    repeat: -1
                }
            );
        }
    }

    // Handle mouse events for desktop
    movingBanner.addEventListener('mouseenter', toggleBannerState);
    movingBanner.addEventListener('mouseleave', toggleBannerState);

    // Handle touch events for mobile
    movingBanner.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default touch behavior
        toggleBannerState();
    });
}

document.addEventListener('DOMContentLoaded', initMovingBanner);