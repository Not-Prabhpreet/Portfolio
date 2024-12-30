document.addEventListener('DOMContentLoaded', () => {
  const string = document.querySelector("#string");
  const baseY = 50;
  
  // Using wider coordinates for the path
  let path = `M 10 ${baseY} Q 1000 ${baseY} 1990 ${baseY}`;
  let finalPath = `M 10 ${baseY} Q 1000 ${baseY} 1990 ${baseY}`;

  ScrollTrigger.create({
    trigger: ".string-section",
    start: "top center",
    onEnter: () => {
        // String animation
        gsap.to("svg path", {
            attr: { 
                d: `M 10 ${baseY} Q 1000 ${baseY + 100} 1990 ${baseY}` 
            },
            duration: 0.4,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 2
        });
        
        // Fade in message
        gsap.to(".string-message", {
            opacity: 1,
            duration: 1,
            delay: 0.5
        });
    }
});
  string.addEventListener("mousemove", function(dets) {
      // Scale mouse position to match the wider viewBox
      const rect = string.getBoundingClientRect();
      const scaleX = 2000 / rect.width;
      const mouseX = (dets.clientX - rect.left) * scaleX;
      const mouseY = dets.clientY - rect.top;
      
      path = `M 10 ${baseY} Q ${mouseX} ${mouseY} 1990 ${baseY}`;
      gsap.to("svg path", {
          attr: {d: path},
          duration: 0.2,
          ease: "power3.out",
      });
  });

  string.addEventListener("mouseleave", function() {
      gsap.to("svg path", {
          attr: {d: finalPath},
          duration: 1.5,
          ease: "elastic.out(1,0.15)"
      });
  });
});