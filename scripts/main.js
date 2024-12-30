gsap.registerPlugin(ScrollTrigger);
let isMenuOpen = false;
let mainTimeline;

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const menuBtn = document.querySelector('.menu-btn');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Create transition strips
    const stripsContainer = document.querySelector('.transition-strips');
    stripsContainer.className = 'transition-strips';
    document.body.appendChild(stripsContainer);

    // Create 4 strips
    for (let i = 0; i < 4; i++) {
        const strip = document.createElement('div');
        strip.className = 'strip';
        strip.style.top = `${i * 25}%`;
        stripsContainer.appendChild(strip);
    }

       // Main animation timeline
       mainTimeline = gsap.timeline({
        repeat: -1
    });

    // Add this after the mainTimeline setup
  

    // Add sequences to main timeline
    mainTimeline
        .add(textInAnimation('var(--color-offwhite)'))
        .add(stripTransition('var(--color-offwhite)', 'var(--color-offwhite)'))
        .to('.hero__subtitle', {
            color: 'var(--color-black)',
            duration: 0
        },"-=2")
        .add(textInAnimation('var(--color-black)'))
        .add('+=10')
        .add(stripTransition('var(--color-black)', 'var(--color-black)'))
        .to('.hero__subtitle', {
            color: 'var(--color-offwhite)',
            duration: 0
        },"-=2");

    // Menu button hover animation
    menuBtn.addEventListener('mouseenter', () => {
        gsap.to('.menu-btn .menu-text', {
            x: 20,
            duration: 0.3,
            ease: 'power2.out'
        });
       
        gsap.to('.menu-btn .arrow-right', {
            x: 30,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        gsap.to('.menu-btn .arrow-left', {
            x: 30,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    menuBtn.addEventListener('mouseleave', () => {
        gsap.to('.menu-btn .menu-text', {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        gsap.to('.menu-btn .arrow-right', {
            x: 0,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        gsap.to('.menu-btn .arrow-left', {
            x: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    // Menu links hover animation
    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link.querySelector('.menu-text'), {
                x: 40,
                duration: 0.3,
                ease: 'power3.out'
            });
           
            gsap.to(link.querySelector('.arrow-right'), {
                x: 40,
                duration: 0.3,
                ease: 'power3.out'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link.querySelector('.menu-text'), {
                x: 0,
                duration: 0.3,
                ease: 'power3.inOut'
            });
            
            gsap.to(link.querySelector('.arrow-right'), {
                x: 0,
                duration: 0.3,
                ease: 'power3.inOut'
            });
        });
    });

    // Menu Click Handlers
   // Menu Click Handlers
menuBtn.addEventListener('click', () => {
    console.log('Menu button clicked, current state:', isMenuOpen);
    if (!isMenuOpen) {
        isMenuOpen = true;  // Set this first
        menuOverlay.style.display = 'flex';  // Ensure display is set
        menuOverlay.classList.add('menu-open');
        menuOpenAnimation();
        console.log('Menu should now be open');
    }
});

closeBtn.addEventListener('click', () => {
    console.log('Close button clicked, current state:', isMenuOpen);
    if (isMenuOpen) {
        menuCloseAnimation().then(() => {
            menuOverlay.classList.remove('menu-open');
            isMenuOpen = false;  // Set this last
            console.log('Menu should now be closed');
        });
        
    }
});
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Close menu first
        if (isMenuOpen) {
            menuCloseAnimation().then(() => {
                menuOverlay.classList.remove('menu-open');
                isMenuOpen = false;
                
                // Scroll to section
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            });
        }
    });
});
});