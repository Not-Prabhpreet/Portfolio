// Animation Functions
function textInAnimation(textColor) {
    const tl = gsap.timeline();
    tl.set('.text-line', { 
        opacity: 0, 
        y: 50,
        color: textColor 
    });
    tl.to('.text-line', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
    });
    return tl;
}

function stripTransition(stripColor, bgColor) {
    const tl = gsap.timeline();
    tl.set('.transition-strips', { display: 'block' })
      .set('.strip', { backgroundColor: stripColor })
      
      .to('.strip', {
        x: 0,
        duration: 0.75,
        stagger: {
            each: 0.1,
            ease: "power1.Out",
            scrub:2
        }
    })
    .to('.hero__section .text-line', {
        opacity: 0,
        duration: 1,
        stagger: {
            each: 0.1,
            ease: "power2.Out",
            
        }
    }, "<")
   
    .to('.hero__background', {
        backgroundColor: bgColor,
        duration: 0.2
    }, "-=0.5")
    .set('.strip', { x: '100%' })
    .set('.transition-strips', { display: 'none' });
    return tl;
}

function menuOpenAnimation() {
    console.log('Starting menu open animation');
    
    // Reset menu links position and opacity first
    gsap.set('.menu-link', {
        y: 50,
        opacity: 0
    });
    
    gsap.set('.menu-overlay', {
        display: 'flex',
        visibility: 'visible',
        opacity: 1,
        backgroundColor: 'var(--color-black)',
        yPercent: -100
    });
    
    const tl = gsap.timeline();
    tl.to('.menu-overlay', {
        yPercent: 0,
        duration: 0.5,
        ease: 'power4.inOut'
    })
    .to('.menu-link', {  // Changed from .from to .to
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.15,
        ease: 'power4.out'
    })
    .to('.close-btn', {
        rotation: 360,
        y: 50,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.inOut'
    }, '-=0.1')
    .to('.close-btn', {
        rotation: '+=360',
        duration: 0.8,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        repeatDelay: 4
    }, '+=3');
    return tl;
}

function menuCloseAnimation() {
    console.log('Starting menu close animation');
    const tl = gsap.timeline();
    
    tl.to('.menu-link', {
        y: 100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power4.in'
    })
    .to('.close-btn', {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
    }, '<')
    .to('.menu-overlay', {
        yPercent: -100,
        duration: 0.3,
        ease: 'power4.inOut'
    })
    .set('.menu-overlay', {
        display: 'none',
        visibility: 'hidden',
        opacity: 0
    })
    .set('.menu-link', {  // Reset menu links to initial state
        clearProps: 'all'
    });
    
    return tl;
} 