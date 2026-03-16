// Main JS for Olfix Landing Site

document.addEventListener('DOMContentLoaded', () => {
    // Handle Lead Form Submission
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value
            };

            console.log('Lead Captured:', formData);
            
            // Show success message
            const formParent = leadForm.parentElement;
            formParent.innerHTML = `
                <div style="text-align: center; padding: 40px 0;">
                    <div style="width: 64px; height: 64px; background: #10b981; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
                        <i data-lucide="check" style="width: 32px; height: 32px;"></i>
                    </div>
                    <h3>Thank You!</h3>
                    <p style="color: #64748b; margin-top: 12px;">We've received your request. Our expert will contact you within 24 hours.</p>
                    <button onclick="location.reload()" class="btn btn-outline" style="margin-top: 24px;">Send Another</button>
                </div>
            `;
            lucide.createIcons();
        });
    }

    // Header scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .section h2, .section p').forEach(el => {
        observer.observe(el);
    });
});
