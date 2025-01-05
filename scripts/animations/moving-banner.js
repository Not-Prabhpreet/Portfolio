function initMovingBanner() {
  const bannerWrapper = document.querySelector('.banner-wrapper');
  const movingBanner = document.querySelector('.moving-banner');
  const bannerTexts = document.querySelectorAll('.banner-text');
  
  const animationSpeed = 18;

  // Initial left-moving animation
  let tween = gsap.to(bannerWrapper, {
      x: '-50%',
      duration: animationSpeed,
      ease: 'none',
      repeat: -1
  });

  movingBanner.addEventListener('mouseenter', () => {
      tween.kill();
      
      // Instant color change
      movingBanner.style.backgroundColor = 'var(--color-black)';
      bannerTexts.forEach(text => text.style.color = 'var(--color-offwhite)');
      
      // Set same speed for right movement
      tween = gsap.fromTo(bannerWrapper,
          { x: '-50%' }, // Start position
          {
              x: '0%',
              duration: animationSpeed,
              ease: 'none',
              repeat: -1
          }
      );
  });

  movingBanner.addEventListener('mouseleave', () => {
      tween.kill();
      
      // Instant color reversion
      movingBanner.style.backgroundColor = 'var(--color-offwhite)';
      bannerTexts.forEach(text => text.style.color = 'var(--color-black)');
      
      // Set same speed for left movement
      tween = gsap.fromTo(bannerWrapper,
          { x: '0%' }, // Start position
          {
              x: '-50%',
              duration: animationSpeed,
              ease: 'none',
              repeat: -1
          }
      );
  });
}

document.addEventListener('DOMContentLoaded', initMovingBanner);