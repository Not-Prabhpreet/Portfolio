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
                trigger: category,
                start: "top 70%",
                end: "top 20%",
                toggleActions: "play none none reverse"
            }
        });

        // Add animations to timeline
        tl.fromTo(heading, 
            { 
                y: 50,
                opacity: 0 
            },
            {
                duration: 1,
                y: 0,
                opacity: 1,
                ease: "power3.out"
            }
        )
        .to(line, {
            duration: 1.2,
            scaleX: 1,
            ease: "power3.inOut"
        }, "-=0.5")
        .fromTo(description,
            {
                y: 30,
                opacity: 0,
                filter: 'blur(5px)'
            },
            {
                duration: 1,
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: "power3.out"
            }, 
            "-=0.8"
        )
        .fromTo(techItems,
            {
                y: 20,
                opacity: 0
            },
            {
                duration: 0.8,
                y: 0,
                opacity: 1,
                stagger: 0.1,
                ease: "power3.out"
            }, 
            "-=0.5"
        );
    });

    // Optional: Add hover effect for tech stack items
    const techItems = document.querySelectorAll('.tech-stack span');
    techItems.forEach(item => {
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
    });
});