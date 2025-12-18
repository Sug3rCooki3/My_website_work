document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // CTA Button Scroll
    const ctaBtn = document.getElementById('cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Form Handling
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = form.querySelector('.submit-btn');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sending...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                btn.innerText = 'Request Sent!';
                btn.style.backgroundColor = '#4CAF50'; // Success Green
                
                // Reset form
                form.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = ''; // Revert to CSS default
                }, 3000);
            }, 1500);
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.forEach(linkGroup => {
                linkGroup.classList.toggle('active');
                // Clean up inline styles if they exist from previous versions
                linkGroup.style = ''; 
            });
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.forEach(group => group.classList.remove('active'));
            });
        });
    }
});
