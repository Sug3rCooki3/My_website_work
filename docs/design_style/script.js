document.addEventListener('DOMContentLoaded', () => {
    const glitchText = document.querySelector('.glitch');
    
    // Random glitch effect
    setInterval(() => {
        const originalText = glitchText.getAttribute('data-text');
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/';
        
        // 10% chance to glitch
        if (Math.random() < 0.1) {
            let newText = '';
            for (let i = 0; i < originalText.length; i++) {
                if (Math.random() < 0.3) {
                    newText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                } else {
                    newText += originalText[i];
                }
            }
            glitchText.innerText = newText;
            
            // Reset quickly
            setTimeout(() => {
                glitchText.innerText = originalText;
            }, 100);
        }
    }, 200);

    // Button interactions
    const buttons = document.querySelectorAll('.cyber-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const originalText = btn.innerText;
            btn.innerText = 'PROCESSING...';
            setTimeout(() => {
                btn.innerText = 'ACCESS GRANTED';
                setTimeout(() => {
                    btn.innerText = originalText;
                }, 2000);
            }, 1000);
        });
    });

    // Background Effects
    const colors = ['#fcee0a', '#00f0ff', '#ff003c'];
    const heroSection = document.querySelector('.hero-section');

    // Create random sparks
    function createSpark() {
        if (!heroSection) return;

        const spark = document.createElement('div');
        spark.classList.add('bg-spark');
        
        // Random Position within hero section
        const x = Math.random() * heroSection.offsetWidth;
        const y = Math.random() * heroSection.offsetHeight;
        
        // Random Color
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.backgroundColor = color;
        spark.style.boxShadow = `0 0 10px 2px ${color}`;
        
        heroSection.appendChild(spark);
        
        // Remove after animation
        setTimeout(() => {
            spark.remove();
        }, 800);
    }

    // Create sparks frequently
    setInterval(createSpark, 150);

    // Create random glitch lines
    function createGlitchLine() {
        if (!heroSection) return;

        const line = document.createElement('div');
        line.classList.add('bg-glitch-line');
        
        const top = Math.random() * heroSection.offsetHeight;
        const height = Math.random() * 4 + 1; // 1px to 5px
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        line.style.top = `${top}px`;
        line.style.height = `${height}px`;
        line.style.backgroundColor = color;
        
        heroSection.appendChild(line);
        
        setTimeout(() => {
            line.remove();
        }, 200);
    }

    // Create glitch lines occasionally
    setInterval(() => {
        if (Math.random() < 0.2) { // 20% chance every 200ms
            createGlitchLine();
        }
    }, 200);
});
