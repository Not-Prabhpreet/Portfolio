// document.addEventListener('DOMContentLoaded', () => {
//   // Set initial states
//   gsap.set('.card-content', {
//       y: 100,
//       opacity: 0
//   });

//   // Add hover animations for each card
//   document.querySelectorAll('.project-card').forEach(card => {
//       const content = card.querySelector('.card-content');
      
//       // Create hover timeline
//       const hoverTl = gsap.timeline({ paused: true });
      
//       hoverTl
//           .to(content, {
//               y: 0,
//               opacity: 1,
//               duration: 0.5,
//               ease: "power3.out"
//           });

//       // Add hover listeners
//       card.addEventListener('mouseenter', () => {
//           hoverTl.play();
//       });

//       card.addEventListener('mouseleave', () => {
//           hoverTl.reverse();
//       });
//   });

//   // Add scroll reveal animation
//   gsap.from('.project-card', {
//       scrollTrigger: {
//           trigger: '.projects',
//           start: "top center",
//           end: "bottom center",
//           toggleActions: "play none none reset"
//       },
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out"
//   });
// });