gsap.registerPlugin(ScrollTrigger);

// First, split text into spans
function splitTextIntoLetters() {
    const paragraph = document.querySelector('.about__text');
    const text = paragraph.textContent.trim();
    const letters = text.split('');
    
    paragraph.textContent = '';
    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.color = '#444';
        span.className = 'letter';
        paragraph.appendChild(span);
    });
}

// Call splitTextIntoLetters immediately since we don't wait for animation
splitTextIntoLetters();

// Image parallax
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

// Text highlight animation
gsap.timeline({
    scrollTrigger: {
        trigger: '.about__text',
        start: "top 80%",
        end: "bottom center",
        scrub: 0.5,
        onUpdate: self => {
            if(self.progress === 1) {
                // Force all letters to be highlighted at the end
                document.querySelectorAll('.letter').forEach(letter => 
                    letter.style.color = 'var(--color-offwhite)'
                );
            }
        }
    }
}).to('.letter', {
    color: 'var(--color-offwhite)',
    duration: 0.1,
    stagger: {
        each: 0.005,
        from: 0,
        axis: "x",
        ease: "none"
    },
    ease: "none"
});