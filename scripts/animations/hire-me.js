document.addEventListener('DOMContentLoaded', () => {
  const randomRotation = () => gsap.utils.random(-45, 45);

    const startingPositions = [
      { x: -350 }, // L
      { x: -250 }, // E
      { x: -150 }, // T
      { x: -50 },  // S
      { x: 50 },   // C
      { x: 150 },  // O
      
  ];
  
  
  ScrollTrigger.create({
      trigger: ".contact",
      start: "top center",
      onEnter: () => {
          document.querySelectorAll('.falling-letter').forEach((letter, i) => {
              // Set initial positions
              gsap.set(letter, {
                  x: startingPositions[i].x,
                  y: -1000, // Start higher
                  //opacity: 0,
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
      // Vertical bounce
      gsap.to(letter, {
          y: "+=20",
          duration: 1 + (index * 0.1),
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
      });

      // Rotation
      gsap.to(letter, {
          rotation: `+=${gsap.utils.random(-15, 15)}`,
          duration: 1.5 + (index * 0.1),
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
      });

      // Small horizontal movement
      gsap.to(letter, {
          x: `+=${gsap.utils.random(-30, 30)}`,
          duration: 2 + (index * 0.2),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
      });
  }
});