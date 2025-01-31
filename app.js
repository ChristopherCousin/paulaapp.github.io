// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      navLinks.classList.remove('active');
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Testimonial slider
  const testimonials = document.querySelectorAll('.testimonial');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  // Change testimonial every 5 seconds
  setInterval(nextTestimonial, 5000);

  showTestimonial(currentTestimonial);

  // GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  // Hero section animation
  gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.hero-image img', {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: 'power3.out',
    delay: 0.5
  });

  // Feature items animation
  gsap.from(".feature-card", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#features",
      start: "top 60%",
      end: "bottom 30%",
      toggleActions: "play none none reverse"
    }
  });

  // How it works steps animation
  gsap.from('.step', {
    opacity: 0,
    x: -50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#how-it-works',
	  start: 'top 80%'
    }
  });

  // Testimonial section animation
  gsap.from('.testimonial', {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#testimonials',
      start: 'top 80%'
    }
  });

  // FAQ items animation
  gsap.from('.faq-item', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#faq',
      start: 'top 80%'
    }
  });

  // Download section animation
  gsap.from('#download', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#download',
      start: 'top 80%'
    }
  });

  // Parallax effect for app mockup
  gsap.to('.hero-image img', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Animate download buttons on hover
  const downloadButtons = document.querySelectorAll('.store-button, .cta-button');
  downloadButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Add a subtle animation to the logo
  gsap.to('.logo', {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: 'linear'
  });

  // Animate feature icons on hover
  const featureIcons = document.querySelectorAll('.feature-icon');
  featureIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        rotation: 360,
        duration: 0.5,
        ease: 'power2.out'
      });
    });
  });

  // Add a subtle animation to the step numbers
  gsap.to('.step-number', {
    y: -10,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
    stagger: 0.2
  });

  // Responsive adjustments
  function handleResponsive() {
    if (window.innerWidth <= 768) {
      // Mobile-specific animations or adjustments
      gsap.set('.hero-image', { clearProps: 'all' }); // Clear parallax effect on mobile
    } else {
      // Reset or apply desktop animations
      gsap.to('.hero-image img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }

  // Run on load and resize
  handleResponsive();
  window.addEventListener('resize', handleResponsive);

  // Nuevas animaciones
  gsap.from(".feature-card", {
    scrollTrigger: {
      trigger: ".feature-grid",
      start: "top center",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8
  });

  // Efecto parallax mejorado
  gsap.to(".hero-image", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    yPercent: 15,
    scale: 1.05
  });

  // Interacción hover avanzada
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      gsap.to(card, {
        x: (x - rect.width/2) * 0.1,
        y: (y - rect.height/2) * 0.1,
        rotateX: (y - rect.height/2) * -0.1,
        rotateY: (x - rect.width/2) * 0.2,
        ease: "power2.out"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)"
      });
    });
  });

  // Añadir esta animación después de las demás
  gsap.from('.faq-item', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#faq',
      start: 'top 70%',
      end: 'bottom 50%',
      toggleActions: 'play none none reverse'
    }
  });
});