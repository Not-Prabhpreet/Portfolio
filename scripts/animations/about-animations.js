gsap.registerPlugin(ScrollTrigger);

// Set initial states
gsap.set('.about__text-section', {
    x: '-100%',
    opacity: 0
});

gsap.set('.about__image-section', {
    x: '100%',  
    opacity: 0
});

// Create ScrollTrigger animation
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: "top 65%",    // Start when the top of about section reaches 60% of viewport
        toggleActions: "play none none reset", // Play on enter, reset on leave
        markers: true        // For debugging - we'll remove this later
    }
});

// Add animations to timeline
tl.to('.about__text-section', {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out"
})
.to('.about__image-section', {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out"
}, "-=1"); // Start slightly before the text animation finishes