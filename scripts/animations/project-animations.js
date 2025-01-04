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
        const cardImage = card.querySelector('.card-video img');
        const cardOverlay = card.querySelector('.card-overlay');
        const cardInitial = card.querySelector('.card-initial');
        const cardContent = card.querySelector('.card-content');
        const closeBtn = card.querySelector('.close-btn1');
        const viewDetailsBtn = card.querySelector('.view-details');

        // Safety check for elements
        if (!cardImage || !cardOverlay || !cardInitial || !cardContent || !closeBtn) {
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
        function resetCardState() {
            gsap.set(cardContent, { opacity: 0, display: 'none', scaleY: 0 });
            gsap.set([contentElements.title, contentElements.description, 
                     contentElements.techStack, contentElements.links], 
                    { y: 30, opacity: 0 });
            gsap.set(closeBtn, { opacity: 0, visibility: 'hidden', scale: 0 });
            gsap.set(cardInitial, { y: 0, opacity: 1 });
            gsap.set(cardOverlay, { 
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 90%, rgba(0, 0, 0, 0.8) 100%)'
            });
        }

        resetCardState();

        // Create reveal timeline
        const revealTimeline = gsap.timeline({ paused: true });

        revealTimeline
            .to(cardInitial, {
                y: -30,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut"
            })
            .to(cardOverlay, {
                background: 'var(--color-offwhite)',
                duration: 0.4
            }, "-=0.3")
            .to(cardContent, {
                display: 'block',
                opacity: 1,
                scaleY: 1,
                duration: 0.5,
                ease: "power4.out"
            })
            .to(closeBtn, {
                opacity: 1,
                visibility: 'visible',
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)"
            })
            .to([contentElements.title, contentElements.description, 
                contentElements.techStack, contentElements.links], {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.7)",
                stagger: 0.1
            });

        let isOpen = false;

        function toggleCard(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (!isOpen) {
                revealTimeline.play();
            } else {
                gsap.to(closeBtn, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.2,
                    ease: "power2.in",
                    onComplete: () => {
                        closeBtn.style.visibility = 'hidden';
                    }
                });

                gsap.to(cardContent, {
                    scaleY: 0,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.in",
                    onComplete: () => {
                        resetCardState();
                        revealTimeline.pause(0);
                        gsap.to(cardInitial, {
                            y: 0,
                            opacity: 1,
                            duration: 0.3
                        });
                    }
                });

                gsap.to(cardOverlay, {
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 90%, rgba(0, 0, 0, 0.8) 100%)',
                    duration: 0.4
                });
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
        viewDetailsBtn.addEventListener('click', toggleCard);
        closeBtn.addEventListener('click', toggleCard);
    });
});