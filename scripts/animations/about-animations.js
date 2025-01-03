gsap.registerPlugin(ScrollTrigger);

function splitTextIntoLetters() {
    const paragraph = document.querySelector('.about__text');
    if (!paragraph) return;
    
    const words = paragraph.textContent.trim().split(/\s+/);
    paragraph.textContent = '';

    words.forEach((word, wordIndex) => {
        const wordContainer = document.createElement('span');
        wordContainer.className = 'word';
        
        const letters = word.split('');
        letters.forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.color = '#444';
            span.className = 'letter';
            wordContainer.appendChild(span);
        });

        paragraph.appendChild(wordContainer);

        if (wordIndex < words.length - 1) {
            const space = document.createElement('span');
            space.textContent = ' ';
            space.className = 'letter space';
            paragraph.appendChild(space);
        }
    });
}

splitTextIntoLetters();

// Responsive parallax for image
function createImageParallax() {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
        // Desktop parallax
        gsap.to('.about__image', {
            scrollTrigger: {
                trigger: '.about',
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            },
            y: "-20%",
            ease: "none"
        });
    });

    mm.add("(max-width: 768px)", () => {
        // Mobile parallax - reduced movement
        gsap.to('.about__image', {
            scrollTrigger: {
                trigger: '.about',
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            },
            y: "-10%",
            ease: "none"
        });
    });
}

createImageParallax();

// Text animation with responsive timing
const textAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: '.about__text',
        start: "top 80%",
        end: "bottom center",
        scrub: 0.5,
        onUpdate: self => {
            if(self.progress === 1) {
                document.querySelectorAll('.letter').forEach(letter => 
                    letter.style.color = 'var(--color-offwhite)'
                );
            }
        }
    }
});

// Adjust animation speed based on screen size
const animationSpeed = window.innerWidth <= 768 ? 0.003 : 0.005;

textAnimation.to('.letter', {
    color: 'var(--color-offwhite)',
    duration: 0.1,
    stagger: {
        each: animationSpeed,
        from: 0,
        axis: "x",
        ease: "none"
    },
    ease: "none"
});

// Handle resize events
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});