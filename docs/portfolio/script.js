console.log("%c SYSTEM ONLINE: AI HERO PROTOCOL INITIATED", "color: #E63946; font-weight: bold; font-size: 16px; background: #0B132B; padding: 10px;");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('leadMagnetForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            // Simulation of Zapier Webhook
            btn.innerText = "TRANSMITTING...";
            btn.style.opacity = "0.7";
            btn.disabled = true;
            
            // Simulate network delay
            setTimeout(() => {
                console.log(`[ZAPIER WEBHOOK] Payload sent: { email: "${emailInput.value}", source: "portfolio_lead_magnet" }`);
                
                btn.innerText = "INTEL ACQUIRED";
                btn.style.backgroundColor = "#4CAF50";
                btn.style.color = "#fff";
                btn.style.boxShadow = "0 0 15px rgba(76, 175, 80, 0.5)";
                
                emailInput.value = "";
                
                // Reset after 3 seconds
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = "";
                    btn.style.color = "";
                    btn.style.boxShadow = "";
                    btn.style.opacity = "1";
                    btn.disabled = false;
                }, 3000);
                
                alert("Intel sent to your secure inbox. (This is a simulation)");
                
            }, 1500);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
