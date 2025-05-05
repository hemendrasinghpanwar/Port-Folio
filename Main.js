    // Initialize AOS animations
    AOS.init({
        duration: 800,
        once: false,
        mirror: true
    });

    // Particle.js configuration
    function initParticles() {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#00d9ff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#00d9ff", opacity: 0.4, width: 1 },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    // Mobile menu toggle
    function initMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // Header scroll effect
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Back to top button
    function initBackToTop() {
        const backToTopBtn = document.querySelector('.back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Form handling
    function initForm() {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // Here you would normally send the form data to a server
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            });
        }
    }

    // GSAP animations
    function initGSAPAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // Animate elements on scroll
        gsap.utils.toArray('[data-aos]').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Form input animations
        document.querySelectorAll('.form-control').forEach(input => {
            input.addEventListener('focus', () => {
                gsap.to(input, {
                    duration: 0.3,
                    boxShadow: '0 0 0 2px rgba(0, 217, 255, 0.3)',
                    ease: "power2.out"
                });
            });

            input.addEventListener('blur', () => {
                gsap.to(input, {
                    duration: 0.3,
                    boxShadow: 'none',
                    ease: "power2.out"
                });
            });
        });

        // Project card hover animations
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card.querySelector('.project-media'), {
                    duration: 0.5,
                    scale: 1.05,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card.querySelector('.project-media'), {
                    duration: 0.5,
                    scale: 1,
                    ease: "power2.out"
                });
            });
        });

        // Skill card hover animations
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    duration: 0.3,
                    y: -10,
                    boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)',
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.3,
                    y: 0,
                    boxShadow: 'none',
                    ease: "power2.out"
                });
            });
        });
    }

    // Initialize all functions when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initParticles();
        initMobileMenu();
        initHeaderScroll();
        initBackToTop();
        initSmoothScrolling();
        initForm();
        initGSAPAnimations();
    });