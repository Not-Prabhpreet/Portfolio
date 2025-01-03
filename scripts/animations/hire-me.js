document.addEventListener('DOMContentLoaded', () => {
    const randomRotation = () => gsap.utils.random(-45, 45);
    
    let startingPositions = [
        { x: -350 }, // H
        { x: -250 }, // I
        { x: -150 }, // R
        { x: -50 },  // E
        { x: 50 },   // M
        { x: 150 },  // E
    ];

    // Function to update positions based on screen width
    function updatePositions() {
        const screenWidth = window.innerWidth;
        const scaleFactor = screenWidth <= 480 ? 0.4 : 
                           screenWidth <= 768 ? 0.6 : 1;

        startingPositions = [
            { x: -350 * scaleFactor },
            { x: -250 * scaleFactor },
            { x: -150 * scaleFactor },
            { x: -50 * scaleFactor },
            { x: 50 * scaleFactor },
            { x: 150 * scaleFactor },
        ];
    }

    // Update positions initially and on resize
    updatePositions();
    window.addEventListener('resize', updatePositions);

    ScrollTrigger.create({
        trigger: ".contact",
        start: "top center",
        onEnter: () => {
            document.querySelectorAll('.falling-letter').forEach((letter, i) => {
                // Set initial positions
                gsap.set(letter, {
                    x: startingPositions[i].x,
                    y: -1000,
                    rotation: randomRotation()
                });

                // Falling animation
                gsap.to(letter, {
                    y: 0,
                    opacity: 1,
                    duration: gsap.utils.random(2, 2.5),
                    delay: i * 0.25,
                    ease: "bounce.out",
                    onComplete: () => startIndividualAnimation(letter, i)
                });
            });
        },
        once: true
    });

    function startIndividualAnimation(letter, index) {
        // Get current screen width for responsive animations
        const screenWidth = window.innerWidth;
        const moveScale = screenWidth <= 480 ? 0.4 : 
                         screenWidth <= 768 ? 0.6 : 1;

        // Vertical bounce with scaled movement
        gsap.to(letter, {
            y: `+=${20 * moveScale}`,
            duration: 1 + (index * 0.1),
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Rotation with scaled values
        gsap.to(letter, {
            rotation: `+=${gsap.utils.random(-15, 15) * moveScale}`,
            duration: 1.5 + (index * 0.1),
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Horizontal movement with scaled values
        gsap.to(letter, {
            x: `+=${gsap.utils.random(-30, 30) * moveScale}`,
            duration: 2 + (index * 0.2),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
});