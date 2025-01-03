// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Initial states
        gsap.set(card, {
            opacity: 0,
            y: 100
        });

        // Entrance animation
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.2
        });

        // Get elements
        const cardVideo = card.querySelector('.card-video video');
        const cardOverlay = card.querySelector('.card-overlay');
        const cardInitial = card.querySelector('.card-initial');
        const cardContent = card.querySelector('.card-content');
        const closeBtn = card.querySelector('.close-btn1');

        // Safety check for elements
        if (!cardVideo || !cardOverlay || !cardInitial || !cardContent || !closeBtn) {
            console.warn('Missing required elements in card:', card);
            return;
        }

        const contentElements = {
            title: cardContent.querySelector('h3'),
            description: cardContent.querySelector('.card-description'),
            techStack: cardContent.querySelector('.tech-stack1'),
            links: cardContent.querySelector('.card-links')
        };

        // Set initial states
        gsap.set(cardContent, { opacity: 0, display: 'none' });
        gsap.set([contentElements.title, contentElements.description, 
                 contentElements.techStack, contentElements.links], 
                { y: 30, opacity: 0 });
        gsap.set(closeBtn, { opacity: 0, visibility: 'hidden' });

        // Create reveal timeline
        const revealTimeline = gsap.timeline({ paused: true });

        revealTimeline
            .to(cardInitial, {
                y: -30,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut"
            })
            .to(cardVideo, {
                scale: 1.1,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.3")
            .to(cardContent, {
                display: 'block',
                opacity: 1,
                duration: 0.1
            }, "-=0.3")
            .to(closeBtn, {
                opacity: 1,
                visibility: 'visible',
                duration: 0.3,
                ease: "power2.out"
            })
            .to(contentElements.title, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.7)"
            }, "-=0.2")
            .to(contentElements.description, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.7)"
            }, "-=0.2")
            .to(contentElements.techStack, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.7)"
            }, "-=0.2")
            .to(contentElements.links, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.7)"
            }, "-=0.2");

        let isOpen = false;

        function toggleCard(e) {
            // Prevent any parent elements from receiving the click event
            e.stopPropagation();
            
            if (!isOpen) {
                gsap.to(cardOverlay, {
                    backgroundColor: 'rgba(250, 243, 224, 1)',
                    duration: 0.4,
                    ease: "power2.inOut"
                });
                revealTimeline.play();
            } else {
                gsap.to(cardOverlay, {
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    duration: 0.4,
                    ease: "power2.inOut"
                });
                revealTimeline.reverse();
            }
            isOpen = !isOpen;
        }

        // Desktop hover effects
        if (window.innerWidth > 768) {
            card.addEventListener('mouseenter', () => {
                if (!isOpen) {
                    gsap.to(cardInitial, {
                        y: -10,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            });

            card.addEventListener('mouseleave', () => {
                if (!isOpen) {
                    gsap.to(cardInitial, {
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            });
        }

        // Event listeners
        card.addEventListener('click', toggleCard);
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isOpen) {
                toggleCard(e);
            }
        });
    });
});