gsap.registerPlugin(ScrollTrigger);

function splitTextIntoLetters() {
    const paragraph = document.querySelector('.about__text');
    const words = paragraph.textContent.trim().split(/\s+/);
    paragraph.textContent = '';

    words.forEach((word, wordIndex) => {
        // Create a container for each word
        const wordContainer = document.createElement('span');
        wordContainer.className = 'word';
        
        // Split word into letters
        const letters = word.split('');
        letters.forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.color = '#444';
            span.className = 'letter';
            wordContainer.appendChild(span);
        });

        paragraph.appendChild(wordContainer);

        // Add space after word (if not last word)
        if (wordIndex < words.length - 1) {
            const space = document.createElement('span');
            space.textContent = ' ';
            space.className = 'letter space';
            paragraph.appendChild(space);
        }
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