gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Animate each skill category
    const categories = gsap.utils.toArray('.skill-category');
    
    categories.forEach((category) => {
        const heading = category.querySelector('h2');
        const line = category.querySelector('.heading-line');
        const description = category.querySelector('.category-description');
        const techItems = category.querySelectorAll('.tech-stack span');

        // Create timeline for this category
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: category, // Changed from ".skill_category" to category
                start: "top 90%", // Changed to trigger earlier
                end: "center center", // Adjusted end point
                toggleActions: "play none none reverse",
                // markers: true, // Uncomment for debugging
                onEnter: () => {
                    tl.play();
                }
            }
        });

        // Add animations to timeline
        tl.fromTo(heading, 
            { 
                y: 50,
                opacity: 0 
            },
            {
                duration: 0.8, // Slightly faster
                y: 0,
                opacity: 1,
                ease: "power3.out"
            }
        )
        .to(line, {
            duration: 1,
            scaleX: 1,
            ease: "power3.inOut"
        }, "-=0.3") // Adjusted overlap
        .fromTo(description,
            {
                y: 30,
                opacity: 0,
                filter: 'blur(5px)'
            },
            {
                duration: 0.8,
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: "power3.out"
            }, 
            "-=0.6"
        )
        .fromTo(techItems,
            {
                y: 20,
                opacity: 0
            },
            {
                duration: 0.6,
                y: 0,
                opacity: 1,
                stagger: 0.05, // Faster stagger
                ease: "power3.out"
            }, 
            "-=0.3"
        );

        // Pause timeline initially
        tl.pause();
    });

    // Modify hover effect for touch devices
    const techItems = document.querySelectorAll('.tech-stack span');
    techItems.forEach(item => {
        if ('ontouchstart' in window) {
            // Touch devices - simple tap effect
            item.addEventListener('touchstart', () => {
                gsap.to(item, {
                    scale: 1.1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
            
            item.addEventListener('touchend', () => {
                gsap.to(item, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
        } else {
            // Mouse devices - original hover effect
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        }
    });
});