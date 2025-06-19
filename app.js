 document.addEventListener('DOMContentLoaded', function() {
            // Animate widgets on scroll
            const widgets = document.querySelectorAll('.widget');
            
            // Add hover effects to widgets
            widgets.forEach(widget => {
                widget.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                    this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
                });
                
                widget.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
                });
            });

            // Animate income bars
            const incomeBars = document.querySelectorAll('.income-bar');
            incomeBars.forEach((bar, index) => {
                const originalHeight = bar.style.height;
                bar.style.height = '0%';
                setTimeout(() => {
                    bar.style.transition = 'height 0.8s ease';
                    bar.style.height = originalHeight;
                }, index * 100 + 1000);
            });

            // Add click animation to CTA button
            const ctaButton = document.querySelector('.cta-button');
            ctaButton.addEventListener('click', function(e) {
                e.preventDefault();
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });

            // Parallax effect for geometric shapes
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const shapes = document.querySelectorAll('.geometric-shape');
                
                shapes.forEach((shape, index) => {
                    const speed = 0.5 + (index * 0.2);
                    shape.style.transform = translateY(${scrolled * speed}px);
                });
            });

            // Add floating animation to hero title
            const heroTitle = document.querySelector('.hero-title');
            let mouseX = 0, mouseY = 0;
            
            document.addEventListener('mousemove', function(e) {
                mouseX = (e.clientX - window.innerWidth / 2) / 50;
                mouseY = (e.clientY - window.innerHeight / 2) / 50;
                
                heroTitle.style.transform = translate(${mouseX}px, ${mouseY}px);
            });
        });