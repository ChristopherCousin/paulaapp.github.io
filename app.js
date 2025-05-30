// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Evitar desplazamiento automático a secciones al cargar la página en dispositivos móviles
  if (window.innerWidth <= 768 && window.location.hash) {
    // Pequeño retraso para asegurar que la página se cargue completamente
    setTimeout(() => {
      // Desplazarse al inicio de la página
      window.scrollTo(0, 0);
    }, 10);
  }
  
  // Header mejorado con efectos interactivos
  initEnhancedHeader();
  
  // Inicializar el carrusel de testimonios para móvil
  initTestimonialsCarousel();
  
  // Inicializar la sección FAQ interactiva
  initFaqSection();
  
  // Inicializar funcionalidades del footer optimizado
  initFooterFunctionality();
  
  // Variables para el header
  const header = document.querySelector('.header');
  const body = document.body;
  
  // Función para inicializar el header mejorado
  function initEnhancedHeader() {
    const header = document.querySelector('.header');
    const logoLetters = document.querySelectorAll('.logo-text-letter');
    const headerParticles = document.querySelectorAll('.header-particle');
    
    // Efecto de scroll para el header
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Animación inicial de las letras del logo
    logoLetters.forEach((letter, index) => {
      letter.style.opacity = 0;
      letter.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        letter.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        letter.style.opacity = 1;
        letter.style.transform = 'translateY(0)';
      }, 100 + (index * 100));
    });
    
    // Posicionar aleatoriamente las partículas del header
    headerParticles.forEach(particle => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      const randomSize = 3 + Math.random() * 5;
      const randomDuration = 8 + Math.random() * 7;
      const randomDelay = Math.random() * 5;
      
      particle.style.left = `${randomX}%`;
      particle.style.top = `${randomY}%`;
      particle.style.width = `${randomSize}px`;
      particle.style.height = `${randomSize}px`;
      particle.style.animationDuration = `${randomDuration}s`;
      particle.style.animationDelay = `${randomDelay}s`;
    });
  }
  
  // Función para inicializar la sección FAQ interactiva
  function initFaqSection() {
    const faqTabs = document.querySelectorAll('.faq-tab');
    const faqContents = document.querySelectorAll('.faq-tab-content');
    const faqItems = document.querySelectorAll('.faq-item');
    const faqQuestionContainers = document.querySelectorAll('.faq-question-container');
    
    // Función para cambiar de pestaña
    function switchTab(tabId) {
      // Desactivar todas las pestañas y contenidos
      faqTabs.forEach(tab => tab.classList.remove('active'));
      faqContents.forEach(content => content.classList.remove('active'));
      
      // Activar la pestaña y contenido seleccionados
      const activeTab = document.querySelector(`.faq-tab[data-tab="${tabId}"]`);
      const activeContent = document.querySelector(`.faq-tab-content[data-tab="${tabId}"]`);
      
      if (activeTab && activeContent) {
        activeTab.classList.add('active');
        activeContent.classList.add('active');
        
        // Cerrar todas las preguntas abiertas
        faqItems.forEach(item => item.classList.remove('active'));
      }
    }
    
    // Manejar clics en las pestañas
    faqTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        switchTab(tabId);
      });
    });
    
    // Manejar clics en las preguntas
    faqQuestionContainers.forEach(questionContainer => {
      questionContainer.addEventListener('click', () => {
        const faqItem = questionContainer.closest('.faq-item');
        
        // Si el elemento ya está activo, cerrarlo
        if (faqItem.classList.contains('active')) {
          faqItem.classList.remove('active');
        } else {
          // Cerrar cualquier otro elemento abierto en el mismo grupo
          const parentTabContent = faqItem.closest('.faq-tab-content');
          const siblingItems = parentTabContent.querySelectorAll('.faq-item');
          siblingItems.forEach(item => item.classList.remove('active'));
          
          // Abrir el elemento actual
          faqItem.classList.add('active');
        }
      });
    });
    
    // Animaciones para la decoración neuronal
    const neuronConnections = document.querySelectorAll('.neuron-connection');
    neuronConnections.forEach((connection, index) => {
      const randomDuration = 3 + Math.random() * 2;
      const randomDelay = Math.random() * 2;
      connection.style.animationDuration = `${randomDuration}s`;
      connection.style.animationDelay = `${randomDelay}s`;
    });
    
    // Partículas del FAQ
    const faqParticles = document.querySelectorAll('.faq-particle');
    faqParticles.forEach(particle => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      const randomSize = 4 + Math.random() * 6;
      const randomDuration = 15 + Math.random() * 15;
      const randomDelay = Math.random() * 5;
      
      particle.style.left = `${randomX}%`;
      particle.style.top = `${randomY}%`;
      particle.style.width = `${randomSize}px`;
      particle.style.height = `${randomSize}px`;
      particle.style.animationDuration = `${randomDuration}s`;
      particle.style.animationDelay = `${randomDelay}s`;
    });
    
    // Configuración específica para móvil
    function setupMobileView() {
      if (window.innerWidth <= 576) {
        const faqContents = document.querySelectorAll('.faq-tab-content');
        
        faqContents.forEach(content => {
          // Configurar eventos de deslizamiento para cada conjunto de preguntas
          content.addEventListener('scroll', () => {
            const scrollPosition = content.scrollLeft / (content.scrollWidth - content.clientWidth);
            const progressBar = content.parentNode.querySelector('.faq-progress-bar');
            if (progressBar) {
              progressBar.style.transform = `scaleX(${scrollPosition})`;
            }
          });
        });
      }
    }
    
    // Ejecutar configuración inicial
    setupMobileView();
    
    // Reconfigurrar en caso de cambio de tamaño de ventana
    window.addEventListener('resize', setupMobileView);
    
    // Activar la primera pestaña por defecto
    switchTab('general');
  }
  
  // Smooth scrolling para enlaces de navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
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
  // gsap.registerPlugin(ScrollTrigger);

  // Animación para las partículas de sección
  function animateSectionParticles() {
    const sectionParticles = document.querySelectorAll('.section-particle');
    
    sectionParticles.forEach(particle => {
      // Posición inicial aleatoria
      const startX = Math.random() * 20 - 10;
      const startY = Math.random() * 20 - 10;
      
      // Animación con GSAP
      gsap.to(particle, {
        x: startX,
        y: startY,
        duration: 3 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    });
  }
  
  // Animación para las tarjetas de características
  function animateFeatureCards() {
    // Inicializar el sistema de órbitas de características, pero sin desplazamiento automático
    initOrbitFeatures();
    
    // Animar la aparición del centro de la órbita
    gsap.from('.orbit-center', {
      scrollTrigger: {
        trigger: "#features",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)"
    });
    
    // Animar la aparición de los anillos de órbita
    gsap.from(['.orbit-ring-1', '.orbit-ring-2'], {
      scrollTrigger: {
        trigger: "#features",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out"
    });
    
    // Animar la aparición de las características en órbita
    gsap.from('.orbit-feature', {
      scrollTrigger: {
        trigger: "#features",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      scale: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)"
    });
    
    // Animar la aparición de las partículas
    gsap.from('.orbit-particle', {
      scrollTrigger: {
        trigger: "#features",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    });
    
    // Animar la aparición del detalle de características
    gsap.from('.feature-detail', {
      scrollTrigger: {
        trigger: "#features",
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      ease: "power3.out"
    });
  }
  
  // Inicializar la interactividad del sistema de órbitas
  function initOrbitFeatures() {
    // Seleccionar elementos
    const orbitFeatures = document.querySelectorAll('.orbit-feature');
    const featureDetailTitle = document.getElementById('feature-detail-title');
    const featureDetailDescription = document.getElementById('feature-detail-description');
    const featureDetail = document.getElementById('feature-detail');
    
    // Verificar que los elementos existen
    if (!featureDetailTitle || !featureDetailDescription || !featureDetail) {
      console.error('Elementos de detalle no encontrados');
      return;
    }
    
    // Datos de características
    const featuresData = {
      'ia-emocional': {
        title: 'IA Emocional',
        description: 'Algoritmos de última generación que comprenden y responden a tus emociones de forma personalizada. Paula utiliza procesamiento de lenguaje natural avanzado para detectar sutilezas emocionales en tus mensajes y adaptar sus respuestas para brindarte el apoyo más adecuado en cada momento.'
      },
      'memoria-contextual': {
        title: 'Memoria Contextual',
        description: 'Paula recuerda tus conversaciones para brindarte un apoyo continuo y personalizado, adaptándose a tu progreso. A diferencia de otros asistentes, Paula mantiene un historial contextual que le permite entender tu evolución emocional a lo largo del tiempo, ofreciendo un acompañamiento verdaderamente personalizado.'
      },
      'disponibilidad': {
        title: 'Disponibilidad 24/7',
        description: 'Accede a Paula en cualquier momento y lugar, recibiendo apoyo inmediato cuando más lo necesites. Sin horarios ni citas previas, Paula está siempre lista para escucharte y ayudarte a procesar tus emociones, ofreciendo técnicas de afrontamiento y ejercicios de mindfulness adaptados a tu situación.'
      },
      'privacidad': {
        title: 'Privacidad Garantizada',
        description: 'Tus conversaciones están encriptadas y son completamente confidenciales, garantizando un espacio seguro. Utilizamos encriptación de extremo a extremo y cumplimos con los estándares más estrictos de protección de datos, para que puedas expresarte con total libertad y confianza.'
      }
    };
    
    // Función simple para actualizar el detalle
    function updateFeatureDetail(featureId, isUserClick) {
      const feature = featuresData[featureId];
      if (!feature) return;
      
      // Actualizar contenido
      featureDetailTitle.textContent = feature.title;
      featureDetailDescription.textContent = feature.description;
      
      // Aplicar efecto visual
      featureDetail.style.display = 'block';
      featureDetail.style.opacity = '0';
      featureDetail.style.transform = 'translateY(10px)';
      
      // Forzar un reflow para que la transición funcione
      void featureDetail.offsetWidth;
      
      // Mostrar con animación
      featureDetail.style.opacity = '1';
      featureDetail.style.transform = 'translateY(0)';
      
      // Desplazar a la vista si es necesario, pero solo si fue activado por un clic del usuario
      // y no durante la carga inicial de la página
      const isMobile = window.innerWidth <= 768;
      if (isMobile && isUserClick) {
        setTimeout(() => {
          featureDetail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    }
    
    // Añadir evento de clic a cada característica
    orbitFeatures.forEach(feature => {
      feature.addEventListener('click', function() {
        // Obtener el ID de la característica
        const featureId = this.getAttribute('data-feature');
        console.log('Característica clickeada:', featureId);
        
        // Actualizar clases activas
        orbitFeatures.forEach(f => f.classList.remove('active'));
        this.classList.add('active');
        
        // Actualizar detalle
        updateFeatureDetail(featureId, true);
      });
    });
    
    // Inicializar con la primera característica si existe
    if (orbitFeatures.length > 0) {
      const firstFeature = orbitFeatures[0];
      firstFeature.classList.add('active');
      
      // Actualizar el detalle sin desplazamiento automático
      if (featureId && featuresData[featureId]) {
        featureDetailTitle.textContent = featuresData[featureId].title;
        featureDetailDescription.textContent = featuresData[featureId].description;
        featureDetail.style.opacity = '1';
        featureDetail.style.transform = 'translateY(0)';
      } else {
        // Si no hay un ID específico, usar la primera característica
        const firstFeatureId = firstFeature.getAttribute('data-feature');
        featureDetailTitle.textContent = featuresData[firstFeatureId].title;
        featureDetailDescription.textContent = featuresData[firstFeatureId].description;
        featureDetail.style.opacity = '1';
        featureDetail.style.transform = 'translateY(0)';
      }
    }
  }
  
  // Efecto parallax suave para el fondo
  function initParallaxEffect() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const neuralCanvas = document.getElementById('neuralCanvas');
      
      if (neuralCanvas) {
        neuralCanvas.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    });
  }
  
  // Inicializar animaciones cuando el DOM esté completamente cargado
  document.addEventListener('DOMContentLoaded', () => {
    if (window.gsap) {
      if (window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }
      
      animateSectionParticles();
      animateFeatureCards();
      animateTestimonials();
      animateFAQItems();
      animateDownloadSection();
      animateFooter();
      initParallaxEffect();
      initFAQInteraction();
    }
  });

  // Animación para las tarjetas de testimonios
  function animateTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialStats = document.querySelector('.testimonial-stats');
    
    gsap.from(testimonialCards, {
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
    
    gsap.from(testimonialStats, {
      scrollTrigger: {
        trigger: ".testimonial-stats",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    
    // Animación mejorada para los números en las estadísticas
    const statNumbers = document.querySelectorAll('.stat-item h3');
    
    statNumbers.forEach(stat => {
      let value = stat.innerText;
      let hasPercentage = value.includes('%');
      let hasStar = value.includes('★');
      let hasPlus = value.includes('+');
      
      let numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      let suffix = '';
      
      if (hasPercentage) suffix = '%';
      if (hasStar) suffix = '★';
      if (hasPlus) suffix = '+';
      
      // Valores iniciales más realistas para la animación
      let startValue = 0;
      if (hasPercentage) startValue = Math.max(0, numericValue - 50);
      if (hasStar) startValue = Math.max(0, numericValue - 2);
      if (hasPlus) startValue = Math.max(0, numericValue / 5);
      
      gsap.fromTo(stat, 
        { innerText: startValue + suffix },
        {
          scrollTrigger: {
            trigger: ".testimonial-stats",
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          innerText: value,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: hasPercentage || hasPlus ? 1 : 0.1 },
          onUpdate: function() {
            if (hasPercentage) {
              stat.innerText = Math.round(this.targets()[0]._gsap.innerText) + '%';
            } else if (hasStar) {
              stat.innerText = parseFloat(this.targets()[0]._gsap.innerText).toFixed(1) + '★';
            } else if (hasPlus) {
              stat.innerText = Math.round(this.targets()[0]._gsap.innerText) + '+';
            }
          }
        }
      );
      
      // Añadir efecto de brillo al completar la animación
      gsap.to(stat, {
        scrollTrigger: {
          trigger: ".testimonial-stats",
          start: "top 85%"
        },
        textShadow: "0 0 10px rgba(127, 90, 240, 0.7)",
        delay: 2.5,
        duration: 0.5,
        yoyo: true,
        repeat: 1
      });
    });
  }
  
  // Animación para los elementos de FAQ
  function animateFAQItems() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    gsap.from(faqItems, {
      scrollTrigger: {
        trigger: "#faq",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }
  
  // Interactividad para las preguntas frecuentes
  function initFAQInteraction() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        // Si el elemento ya está activo, lo desactivamos
        if (item.classList.contains('active')) {
          item.classList.remove('active');
          return;
        }
        
        // Desactivamos todos los elementos
        faqItems.forEach(faq => {
          faq.classList.remove('active');
        });
        
        // Activamos el elemento actual
        item.classList.add('active');
      });
    });
    
    // Activar el primer elemento por defecto
    if (faqItems.length > 0) {
      faqItems[0].classList.add('active');
    }
  }

  // Animación para la sección de descarga
  function animateDownloadSection() {
    const downloadPhone = document.querySelector('.download-phone');
    const downloadFeatures = document.querySelectorAll('.download-feature-item');
    const appStores = document.querySelector('#download .app-stores');
    
    if (downloadPhone) {
      // Animación de entrada del teléfono
      gsap.from(downloadPhone, {
        scrollTrigger: {
          trigger: "#download",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
      
      // Animación de rotación suave del teléfono
      gsap.to(downloadPhone.querySelector('.phone-frame'), {
        rotateY: 5,
        rotateX: 2,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
      
      // Animación de partículas neuronales
      const neuronNodes = document.querySelectorAll('.neuron-node');
      neuronNodes.forEach(node => {
        gsap.to(node, {
          scale: 1.2,
          opacity: 0.8,
          duration: 2 + Math.random() * 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      });
    }
    
    if (downloadFeatures.length > 0) {
      // Animación de entrada de las características
      gsap.from(downloadFeatures, {
        scrollTrigger: {
          trigger: ".download-features",
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      });
      
      // Interactividad de las características
      downloadFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
          // Remover clase active de todos los items
          downloadFeatures.forEach(f => f.classList.remove('active'));
          // Añadir clase active al item actual
          feature.classList.add('active');
        });
      });
      
      // Configurar la primera característica como activa por defecto
      if (downloadFeatures[0]) {
        downloadFeatures[0].classList.add('active');
      }
    }
    
    if (appStores) {
      // Animación de entrada de los botones de descarga
      gsap.from(appStores.children, {
        scrollTrigger: {
          trigger: "#download .app-stores",
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "back.out(1.5)"
      });
    }
    
    // Animación de partículas flotantes
    const downloadParticles = document.querySelectorAll('.download-particle');
    if (downloadParticles.length > 0) {
      downloadParticles.forEach(particle => {
        gsap.to(particle, {
          y: -30 - Math.random() * 30,
          x: 15 - Math.random() * 30,
          duration: 4 + Math.random() * 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      });
    }
    
    // Badges técnicos con efecto de hover
    const techBadges = document.querySelectorAll('.tech-badge');
    if (techBadges.length > 0) {
      techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
          gsap.to(badge, {
            scale: 1.05,
            duration: 0.3,
            ease: "power1.out"
          });
        });
        
        badge.addEventListener('mouseleave', () => {
          gsap.to(badge, {
            scale: 1,
            duration: 0.3,
            ease: "power1.out"
          });
        });
      });
    }
    
    // Efecto de brillo al pasar el cursor por los botones de descarga
    const storeButtons = document.querySelectorAll('.store-button');
    if (storeButtons.length > 0) {
      storeButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            y: -5,
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            y: 0,
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }
  }
  
  // Animación para el footer
  function animateFooter() {
    const footerSections = document.querySelectorAll('.footer-grid > div');
    const footerBottom = document.querySelector('.footer-bottom');
    
    if (footerSections.length > 0) {
      gsap.from(footerSections, {
        scrollTrigger: {
          trigger: ".footer",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }
    
    if (footerBottom) {
      gsap.from(footerBottom, {
        scrollTrigger: {
          trigger: ".footer-bottom",
          start: "top 95%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out"
      });
    }
    
    // Animación para los enlaces del footer
    const footerLinks = document.querySelectorAll('.footer-links a, .footer-legal a');
    
    footerLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          color: 'var(--text-primary)',
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(link.querySelector('::after'), {
          width: '100%',
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          color: 'var(--text-secondary)',
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(link.querySelector('::after'), {
          width: '0%',
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }

  // Hero section animation
  // gsap.from('.hero-content', {
  //   opacity: 0,
  //   y: 50,
  //   duration: 1,
  //   ease: 'power3.out'
  // });

  // gsap.from('.hero-image img', {
  //   opacity: 0,
  //   x: 50,
  //   duration: 1,
  //   ease: 'power3.out',
  //   delay: 0.5
  // });

  // Feature items animation
  // gsap.from(".feature-card", {
  //   opacity: 0,
  //   y: 50,
  //   duration: 0.8,
  //   stagger: 0.2,
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: "#features",
  //     start: "top 60%",
  //     end: "bottom 30%",
  //     toggleActions: "play none none reverse"
  //   }
  // });

  // How it works steps animation
  // gsap.from('.step', {
  //   opacity: 0,
  //   x: -50,
  //   duration: 0.8,
  //   stagger: 0.2,
  //   ease: 'power3.out',
  //   scrollTrigger: {
  //     trigger: '#how-it-works',
  //     start: 'top 80%'
  //   }
  // });

  // Testimonial section animation
  // gsap.from('.testimonial', {
  //   opacity: 0,
  //   scale: 0.9,
  //   duration: 0.8,
  //   ease: 'power3.out',
  //   scrollTrigger: {
  //     trigger: '#testimonials',
  //     start: 'top 80%'
  //   }
  // });

  // FAQ items animation
  // gsap.from('.faq-item', {
  //   opacity: 0,
  //   y: 30,
  //   duration: 0.6,
  //   stagger: 0.1,
  //   ease: 'power2.out',
  //   scrollTrigger: {
  //     trigger: '#faq',
  //     start: 'top 80%'
  //   }
  // });

  // Download section animation
  // gsap.from('#download', {
  //   opacity: 0,
  //   y: 50,
  //   duration: 0.8,
  //   ease: 'power3.out',
  //   scrollTrigger: {
  //     trigger: '#download',
  //     start: 'top 80%'
  //   }
  // });

  // Parallax effect for app mockup
  // gsap.to('.hero-image img', {
  //   yPercent: 20,
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: '#hero',
  //     start: 'top top',
  //     end: 'bottom top',
  //     scrub: true
  //   }
  // });

  // Animate download buttons on hover
  const downloadButtons = document.querySelectorAll('.store-button, .cta-button');
  downloadButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      // gsap.to(button, {
      //   scale: 1.05,
      //   duration: 0.3,
      //   ease: 'power2.out'
      // });
    });
    button.addEventListener('mouseleave', () => {
      // gsap.to(button, {
      //   scale: 1,
      //   duration: 0.3,
      //   ease: 'power2.out'
      // });
    });
  });

  // Add a subtle animation to the logo
  // gsap.to('.logo', {
  //   rotation: 360,
  //   duration: 20,
  //   repeat: -1,
  //   ease: 'linear'
  // });

  // Animate feature icons on hover
  const featureIcons = document.querySelectorAll('.feature-icon');
  featureIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      // gsap.to(icon, {
      //   rotation: 360,
      //   duration: 0.5,
      //   ease: 'power2.out'
      // });
    });
  });

  // Add a subtle animation to the step numbers
  // gsap.to('.step-number', {
  //   y: -10,
  //   duration: 1.5,
  //   yoyo: true,
  //   repeat: -1,
  //   ease: 'power1.inOut',
  //   stagger: 0.2
  // });

  // Responsive adjustments
  function handleResponsive() {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 992 && window.innerWidth > 768;
    
    // Ajustar elementos basados en el tamaño de la pantalla
    if (isMobile) {
      // Ajustes específicos para móvil
      
      // Optimizar animaciones para móvil (reducir o desactivar algunas)
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => {
        particle.style.animationDuration = '20s'; // Ralentizar animaciones para mejor rendimiento
      });
      
      // Ajustar tamaño de elementos interactivos para facilitar el toque
      const interactiveElements = document.querySelectorAll('.cta-button, .faq-question, .store-button');
      interactiveElements.forEach(el => {
        el.style.minHeight = '44px'; // Altura mínima recomendada para elementos táctiles
      });
      
      // Ajustar espaciado para móvil
      document.querySelectorAll('section').forEach(section => {
        section.style.padding = '3rem 0';
      });
      
    } else if (isTablet) {
      // Ajustes específicos para tablet
      document.querySelectorAll('section').forEach(section => {
        section.style.padding = '4rem 0';
      });
      
    } else {
      // Ajustes para desktop
      document.querySelectorAll('section').forEach(section => {
        section.style.padding = '5rem 0';
      });
      
      // Restaurar animaciones completas
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => {
        particle.style.animationDuration = ''; // Volver a la duración original
      });
    }
    
    // Ajustar altura del canvas neural para que coincida con la altura de la ventana
    const neuralCanvas = document.getElementById('neuralCanvas');
    if (neuralCanvas) {
      neuralCanvas.width = window.innerWidth;
      neuralCanvas.height = window.innerHeight;
    }
  }

  // Run on load and resize
  handleResponsive();
  window.addEventListener('resize', handleResponsive);
  
  // Optimizar el rendimiento en dispositivos móviles
  let resizeTimer;
  window.addEventListener('resize', () => {
    // Throttle resize event
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResponsive, 250);
  });

  // Nuevas animaciones
  // gsap.from(".feature-card", {
  //   scrollTrigger: {
  //     trigger: ".feature-grid",
  //     start: "top center",
  //     toggleActions: "play none none reverse"
  //   },
  //   opacity: 0,
  //   y: 50,
  //   stagger: 0.1,
  //   duration: 0.8
  // });

  // Efecto parallax mejorado
  // gsap.to(".hero-image", {
  //   scrollTrigger: {
  //     trigger: "#hero",
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: true
  //   },
  //   yPercent: 15,
  //   scale: 1.05
  // });

  // Interacción hover avanzada
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // gsap.to(card, {
      //   x: (x - rect.width/2) * 0.1,
      //   y: (y - rect.height/2) * 0.1,
      //   rotateX: (y - rect.height/2) * -0.1,
      //   rotateY: (x - rect.width/2) * 0.2,
      //   ease: "power2.out"
      // });
    });
    
    card.addEventListener('mouseleave', () => {
      // gsap.to(card, {
      //   x: 0,
      //   y: 0,
      //   rotateX: 0,
      //   rotateY: 0,
      //   duration: 0.8,
      //   ease: "elastic.out(1, 0.3)"
      // });
    });
  });

  // Añadir esta animación después de las demás
  // gsap.from('.faq-item', {
  //   opacity: 0,
  //   y: 30,
  //   duration: 0.6,
  //   stagger: 0.1,
  //   ease: 'power2.out',
  //   scrollTrigger: {
  //     trigger: '#faq',
  //     start: 'top 70%',
  //     end: 'bottom 50%',
  //     toggleActions: 'play none none reverse'
  //   }
  // });

  // Neural Network Background
  document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('neuralCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;
    
    // Neural network parameters
    const nodes = [];
    const nodeCount = Math.floor(width * height / 20000); // Adjust density based on screen size
    const connectionDistance = Math.min(width, height) * 0.15;
    const nodeSize = 2;
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }
    
    // Animation loop
    function animate() {
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Update and draw nodes
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            
            // Update position
            node.x += node.vx;
            node.y += node.vy;
            
            // Bounce off edges
            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;
            
            // Draw node
            ctx.beginPath();
            ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(123, 104, 238, 0.5)';
            ctx.fill();
            
            // Draw connections
            for (let j = i + 1; j < nodes.length; j++) {
                const otherNode = nodes[j];
                const dx = otherNode.x - node.x;
                const dy = otherNode.y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    const opacity = 1 - (distance / connectionDistance);
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(otherNode.x, otherNode.y);
                    ctx.strokeStyle = `rgba(123, 104, 238, ${opacity * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });
    
    // Start animation
    animate();
  });

  // Simulación de chat mejorada
  document.addEventListener('DOMContentLoaded', function() {
    initChatSimulation();
  });
  
  // También iniciar cuando la ventana esté completamente cargada
  window.onload = function() {
    // Verificar si el chat ya se ha iniciado
    const chatMessages = document.getElementById('caseStudyMessages');
    if (chatMessages && chatMessages.children.length === 0) {
      initChatSimulation();
    }
  };
  
  // Función para inicializar la simulación del chat
  function initChatSimulation() {
    const chatMessages = document.getElementById('caseStudyMessages');
    if (!chatMessages) return;
    
    // Limpiar mensajes existentes
    chatMessages.innerHTML = '';
    
    // Caso de estudio para la simulación en la web
    const caseStudy = [
        {
            sender: 'user',
            content: 'Últimamente me siento muy nervioso cuando tengo que hablar en público, incluso en reuniones pequeñas con compañeros de trabajo.'
        },
        {
            sender: 'paula',
            content: 'Entiendo cómo te sientes. La ansiedad social es bastante común, especialmente en situaciones donde nos sentimos evaluados. ¿Podrías contarme qué pensamientos vienen a tu mente justo antes de hablar en estas situaciones?'
        },
        {
            sender: 'user',
            content: 'Pienso que voy a decir algo incorrecto y que todos se darán cuenta. Me preocupa que me juzguen o piensen que no soy competente.'
        },
        {
            sender: 'paula',
            content: 'Gracias por compartir eso. Esos pensamientos son típicos de la ansiedad social. Es importante reconocer que son pensamientos automáticos, no necesariamente la realidad. ¿Has notado alguna reacción física cuando experimentas esta ansiedad?'
        },
        {
            sender: 'user',
            content: 'Sí, mi corazón late muy rápido, sudo mucho y a veces siento que me falta el aire.'
        },
        {
            sender: 'paula',
            content: 'Esas son respuestas físicas normales de ansiedad. Podemos trabajar en técnicas para manejarlas. Para empezar, te recomendaría practicar la respiración diafragmática: inhala lentamente por la nariz contando hasta 4, mantén el aire por 2 segundos, y exhala por la boca contando hasta 6. ¿Te gustaría probar este ejercicio ahora?'
        }
    ];
    
    // Función para mostrar un mensaje en el chat con efecto de escritura
    function addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', message.sender === 'user' ? 'user-message' : 'assistant-message');
        
        // Crear la hora actual
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        
        // Añadir el contenido del mensaje con la nueva estructura
        if (message.sender === 'paula') {
            // Si es el primer mensaje de Paula, añadir el nombre
            if (message === caseStudy[1]) { // El primer mensaje de Paula es el segundo en el array
                const nameElement = document.createElement('div');
                nameElement.classList.add('assistant-name');
                nameElement.textContent = 'Paula';
                messageElement.appendChild(nameElement);
            }
            
            // Crear estructura base del mensaje
            messageElement.innerHTML += `
                <div class="message-avatar">P</div>
                <div class="message-bubble">
                    <div class="message-text"></div>
                    <span class="message-time">${timeString}</span>
                </div>
            `;
            
            // Añadir indicador de escritura
            const typingIndicator = document.createElement('div');
            typingIndicator.classList.add('typing-indicator');
            typingIndicator.innerHTML = `
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            `;
            
            // Añadir el indicador de escritura temporalmente
            chatMessages.appendChild(typingIndicator);
            
            // Scroll al fondo para mostrar el indicador de escritura
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Simular tiempo de escritura basado en la longitud del mensaje
            const typingDelay = Math.min(1000, message.content.length * 10);
            
            setTimeout(() => {
                // Eliminar el indicador de escritura
                chatMessages.removeChild(typingIndicator);
                
                // Añadir el mensaje real
                chatMessages.appendChild(messageElement);
                
                // Obtener el elemento donde se mostrará el texto
                const textElement = messageElement.querySelector('.message-text');
                
                // Simular escritura letra por letra
                let i = 0;
                const typeText = () => {
                    if (i < message.content.length) {
                        textElement.textContent += message.content.charAt(i);
                        i++;
                        setTimeout(typeText, Math.random() * 30 + 10); // Velocidad variable para simular escritura humana
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                    } else {
                        // Marcar el mensaje como completo para ocultar el cursor
                        messageElement.classList.add('message-complete');
                    }
                };
                
                typeText();
                
                // Scroll al fondo para mostrar el mensaje completo
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, typingDelay);
            
        } else {
            // Para mensajes del usuario, mostrar inmediatamente
            messageElement.innerHTML = `
                <div class="message-avatar">U</div>
                <div class="message-bubble">
                    <div class="message-text">${message.content}</div>
                    <span class="message-time">${timeString}</span>
                </div>
            `;
            
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
    
    // Mostrar los mensajes con retrasos para simular una conversación real
    let messageIndex = 0;
    
    function showNextMessage() {
        if (messageIndex < caseStudy.length) {
            addMessage(caseStudy[messageIndex]);
            messageIndex++;
            
            // Determinar el retraso para el siguiente mensaje
            let nextDelay;
            if (messageIndex < caseStudy.length) {
                // Si el siguiente mensaje es de Paula, esperar más tiempo para simular que está escribiendo
                if (caseStudy[messageIndex].sender === 'paula') {
                    nextDelay = caseStudy[messageIndex-1].content.length * 30 + 1500; // Tiempo basado en la longitud del mensaje anterior
                } else {
                    nextDelay = caseStudy[messageIndex-1].content.length * 20 + 1000; // Tiempo más corto para respuestas del usuario
                }
            }
            
            if (messageIndex < caseStudy.length) {
                setTimeout(showNextMessage, nextDelay);
            }
        }
    }
    
    // Iniciar la simulación después de un breve retraso
    setTimeout(showNextMessage, 1000);
  }

  // Testimonials Carousel
  document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dot');
    let currentTestimonial = 0;
    let testimonialInterval;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }
    
    // Inicializar el carrusel
    if (testimonials.length > 0) {
        showTestimonial(0);
        testimonialInterval = setInterval(nextTestimonial, 5000);
        
        // Permitir navegación manual
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(testimonialInterval);
                showTestimonial(index);
                testimonialInterval = setInterval(nextTestimonial, 5000);
            });
        });
    }
  });

  // FAQ Accordion
  document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cerrar otros elementos abiertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar el estado actual
            item.classList.toggle('active');
        });
    });
  });

  // Scroll Animations
  document.addEventListener('DOMContentLoaded', function() {
    // Detectar elementos cuando entran en el viewport
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos con la clase 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
  });

  // Mobile Navigation
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
  });

  // Sticky Header
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('sticky');
            
            // Ocultar/mostrar header al hacer scroll
            if (scrollTop > lastScrollTop) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
        } else {
            header.classList.remove('sticky');
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
    });
  });

  // Smooth Scrolling
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
  });

  // Responsive Handling
  document.addEventListener('DOMContentLoaded', function() {
    function handleResponsive() {
        const width = window.innerWidth;
        
        // Ajustar elementos según el ancho de la pantalla
        if (width <= 768) {
            // Código para dispositivos móviles
            document.querySelectorAll('.feature-card').forEach(card => {
                card.classList.add('mobile-view');
            });
        } else {
            // Código para escritorio
            document.querySelectorAll('.feature-card').forEach(card => {
                card.classList.remove('mobile-view');
            });
        }
    }
    
    // Ejecutar al cargar y al cambiar el tamaño de la ventana
    handleResponsive();
    window.addEventListener('resize', handleResponsive);
  });

  // Newsletter Form
  document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Aquí iría la lógica para enviar el email al servidor
                // Por ahora, solo mostramos un mensaje de éxito
                
                // Crear notificación
                const notification = document.createElement('div');
                notification.classList.add('notification', 'success');
                notification.textContent = '¡Gracias por suscribirte!';
                
                document.body.appendChild(notification);
                
                // Limpiar el formulario
                emailInput.value = '';
                
                // Eliminar la notificación después de un tiempo
                setTimeout(() => {
                    notification.classList.add('hide');
                    setTimeout(() => {
                        notification.remove();
                    }, 500);
                }, 3000);
            }
        });
    }
  });

  // Preloader
  document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    
    if (preloader) {
        // Ocultar preloader cuando la página esté completamente cargada
        window.addEventListener('load', () => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }

    // Inicializar el fondo neural
    initNeuralBackground();
    
    // Animar partículas globales
    animateGlobalParticles();
    
    // Inicializar efecto parallax
    initParallaxEffect();
    
    // Inicializar otras animaciones
    animateFeatureCards();
    animateTestimonials();
    animateFAQItems();
    initFAQInteraction();
    animateDownloadSection();
    animateFooter();
    
    // Inicializar la simulación de chat
    initChatSimulation();
    
    // Manejar responsividad
    handleResponsive();
    
    // Actualizar en resize
    window.addEventListener('resize', handleResponsive);
  });

  // Función para inicializar el fondo neural
  function initNeuralBackground() {
    const canvas = document.getElementById('neuralCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Configuración de la red neural
    const nodeSize = 2;
    const nodeCount = Math.floor(canvas.width * canvas.height / 15000); // Ajustar densidad según tamaño de pantalla
    const connectionDistance = 150;
    const nodes = [];
    
    // Crear nodos
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }
    
    // Animation loop
    function animate() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw nodes
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            
            // Update position
            node.x += node.vx;
            node.y += node.vy;
            
            // Bounce off edges
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            
            // Draw node
            ctx.beginPath();
            ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(123, 104, 238, 0.5)';
            ctx.fill();
            
            // Draw connections
            for (let j = i + 1; j < nodes.length; j++) {
                const otherNode = nodes[j];
                const dx = otherNode.x - node.x;
                const dy = otherNode.y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(otherNode.x, otherNode.y);
                    const opacity = 1 - (distance / connectionDistance);
                    ctx.strokeStyle = `rgba(123, 104, 238, ${opacity * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Ajustar tamaño del canvas cuando cambia el tamaño de la ventana
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
  }

  // Función para animar las partículas en todas las secciones
  function animateGlobalParticles() {
    const particles = document.querySelectorAll('.particle, .section-particle');
    
    particles.forEach(particle => {
        // Posición inicial aleatoria
        const startX = Math.random() * 30 - 15;
        const startY = Math.random() * 30 - 15;
        
        // Animación con GSAP
        gsap.to(particle, {
            x: startX,
            y: startY,
            duration: 5 + Math.random() * 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 2
        });
    });
  }

  // Función para aplicar efectos de parallax al hacer scroll
  function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Efecto parallax para las partículas
        document.querySelectorAll('.section-particle').forEach((particle, index) => {
            const speed = 0.1 + (index % 3) * 0.05;
            const yOffset = scrollY * speed;
            particle.style.transform = `translateY(${yOffset}px)`;
        });
        
        // Efecto de desvanecimiento para las secciones
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const distanceFromTop = scrollY - sectionTop + window.innerHeight / 2;
            
            // Calcular la opacidad basada en la posición de scroll
            if (distanceFromTop > 0 && distanceFromTop < sectionHeight + window.innerHeight) {
                const opacity = Math.min(1, distanceFromTop / (window.innerHeight / 2));
                section.style.opacity = Math.min(1, opacity);
            }
        });
    });
  }

  // Inicializar todas las animaciones cuando el DOM esté cargado
  document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el fondo neural
    initNeuralBackground();
    
    // Animar partículas globales
    animateGlobalParticles();
    
    // Inicializar efecto parallax
    initParallaxEffect();
    
    // Inicializar otras animaciones existentes
    animateFeatureCards();
    animateTestimonials();
    animateFAQItems();
    initFAQInteraction();
    animateDownloadSection();
    animateFooter();
    
    // Inicializar la simulación de chat
    initChatSimulation();
    
    // Manejar responsividad
    handleResponsive();
    
    // Actualizar en resize
    window.addEventListener('resize', handleResponsive);
  });

  // Ajustar la posición del caso de estudio en dispositivos móviles
  function adjustCaseStudyPosition() {
    const phoneFrame = document.querySelector('.phone-frame');
    const caseStudy = document.querySelector('.case-study-floating');
    
    if (phoneFrame && caseStudy && window.innerWidth <= 768) {
      // Calcular la posición óptima basada en el tamaño del teléfono
      const phoneHeight = phoneFrame.offsetHeight;
      const caseStudyHeight = caseStudy.offsetHeight;
      
      // Ajustar el margen superior del caso de estudio para que se solape ligeramente con el teléfono
      const overlapAmount = Math.min(40, phoneHeight * 0.1);
      caseStudy.style.marginTop = `-${overlapAmount}px`;
    } else if (caseStudy) {
      // Restablecer para pantallas más grandes
      caseStudy.style.marginTop = '';
    }
  }
  
  // Ejecutar al cargar y al cambiar el tamaño de la ventana
  adjustCaseStudyPosition();
  window.addEventListener('resize', adjustCaseStudyPosition);

  // Función para manejar la reproducción del video en dispositivos móviles
  document.addEventListener('DOMContentLoaded', function() {
    const paulaVideo = document.getElementById('paulaVideo');
    
    if (paulaVideo) {
        // Asegurarse de que el video se cargue correctamente
        paulaVideo.load();
        
        // Intentar reproducir el video automáticamente
        const playPromise = paulaVideo.play();
        
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Reproducción automática iniciada con éxito
                console.log('Video reproducido automáticamente');
            }).catch(error => {
                // Reproducción automática fallida, probablemente por políticas del navegador
                console.log('Reproducción automática fallida:', error);
                
                // Añadir un botón de reproducción para dispositivos móviles si es necesario
                if (window.innerWidth <= 768) {
                    const playButton = document.createElement('button');
                    playButton.className = 'mobile-play-button';
                    playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>';
                    
                    const phoneFrame = document.querySelector('.phone-frame');
                    if (phoneFrame) {
                        phoneFrame.appendChild(playButton);
                        
                        playButton.addEventListener('click', function() {
                            paulaVideo.play();
                            playButton.style.display = 'none';
                        });
                    }
                }
            });
        }
        
        // Optimización para dispositivos móviles
        if (window.innerWidth <= 768) {
            // Reducir la calidad del video en dispositivos móviles si es necesario
            paulaVideo.setAttribute('playsinline', '');
            
            // Asegurarse de que el video se ajuste correctamente
            paulaVideo.style.objectFit = 'cover';
        }
    }
  });

  // Función para inicializar el carrusel de testimonios para móvil
  function initTestimonialsCarousel() {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.prev-testimonial');
    const nextButton = document.querySelector('.next-testimonial');
    const indicators = document.querySelectorAll('.testimonial-indicator');
    
    if (!testimonialGrid || testimonialCards.length === 0) return;
    
    let currentIndex = 0;
    let startX, moveX, initialPosition;
    let isScrolling = false;
    
    // Función para actualizar los indicadores
    function updateIndicators(index) {
      indicators.forEach(indicator => {
        indicator.classList.remove('active');
      });
      
      const activeIndicator = document.querySelector(`.testimonial-indicator[data-index="${index}"]`);
      if (activeIndicator) {
        activeIndicator.classList.add('active');
      }
    }
    
    // Función para desplazarse a un testimonio específico con animación mejorada
    function scrollToTestimonial(index) {
      if (index < 0) index = 0;
      if (index >= testimonialCards.length) index = testimonialCards.length - 1;
      
      // Si estamos en el mismo índice, no hacer nada
      if (currentIndex === index) return;
      
      const previousIndex = currentIndex;
      currentIndex = index;
      updateIndicators(currentIndex);
      
      // Aplicar animación de transición
      if (window.innerWidth <= 768) {
        // Animación para móviles
        testimonialCards.forEach((card, idx) => {
          // Ocultar todas las tarjetas excepto la actual
          if (idx !== index) {
            gsap.to(card, {
              scale: 0.95,
              opacity: 0.5,
              duration: 0.3,
              ease: "power2.out"
            });
          } else {
            gsap.to(card, {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
        
        const card = testimonialCards[index];
        if (card) {
          const scrollLeft = card.offsetLeft - testimonialGrid.offsetLeft - 16;
          testimonialGrid.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          });
        }
      } else {
        // Para desktop, animar la opacidad
        testimonialCards.forEach((card, idx) => {
          gsap.to(card, {
            opacity: idx === index ? 1 : 0.7,
            scale: idx === index ? 1 : 0.98,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    }
    
    // Event listeners para los botones de navegación
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        scrollToTestimonial(currentIndex - 1);
      });
    }
    
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        scrollToTestimonial(currentIndex + 1);
      });
    }
    
    // Event listeners para los indicadores con efecto de clic mejorado
    indicators.forEach(indicator => {
      indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-index'));
        
        // Efecto visual al hacer clic
        gsap.fromTo(indicator, 
          { scale: 0.8 },
          { scale: 1, duration: 0.3, ease: "back.out(2)" }
        );
        
        scrollToTestimonial(index);
      });
    });
    
    // Soporte para deslizamiento táctil mejorado
    testimonialGrid.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      initialPosition = testimonialGrid.scrollLeft;
      isScrolling = false;
    }, { passive: true });
    
    testimonialGrid.addEventListener('touchmove', (e) => {
      if (isScrolling) return;
      
      moveX = e.touches[0].clientX;
      const diff = startX - moveX;
      
      // Si el desplazamiento es significativo, marcar como scrolling
      if (Math.abs(diff) > 5) {
        isScrolling = true;
      }
    }, { passive: true });
    
    testimonialGrid.addEventListener('touchend', (e) => {
      if (!isScrolling) return;
      
      const diff = startX - moveX;
      
      // Determinar la dirección del deslizamiento con umbral reducido para móviles
      if (diff > 40) { // Deslizamiento a la izquierda (valor reducido para mayor sensibilidad)
        scrollToTestimonial(currentIndex + 1);
      } else if (diff < -40) { // Deslizamiento a la derecha
        scrollToTestimonial(currentIndex - 1);
      }
      
      isScrolling = false;
    }, { passive: true });
    
    // Detectar cuando el scroll termina para actualizar el índice actual
    testimonialGrid.addEventListener('scroll', () => {
      if (window.innerWidth <= 768) {
        clearTimeout(testimonialGrid.scrollTimeout);
        
        testimonialGrid.scrollTimeout = setTimeout(() => {
          // Encontrar el testimonio más cercano al centro
          const centerPosition = testimonialGrid.scrollLeft + testimonialGrid.offsetWidth / 2;
          
          let closestCard = null;
          let closestDistance = Infinity;
          
          testimonialCards.forEach((card, index) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(cardCenter - centerPosition);
            
            if (distance < closestDistance) {
              closestDistance = distance;
              closestCard = card;
              currentIndex = index;
            }
          });
          
          updateIndicators(currentIndex);
        }, 150);
      }
    }, { passive: true });
    
    // Inicializar con efecto de entrada para los testimonios
    testimonialCards.forEach((card, index) => {
      gsap.set(card, {
        opacity: index === 0 ? 1 : 0.7,
        scale: index === 0 ? 1 : 0.98
      });
    });
    
    // Inicializar con el primer testimonio
    scrollToTestimonial(0);
    
    // Ajustar cuando cambia el tamaño de la ventana
    window.addEventListener('resize', () => {
      scrollToTestimonial(currentIndex);
    });
  }

  // Función para inicializar las funcionalidades del footer optimizado
  function initFooterFunctionality() {
    // Sistema de acordeón para el footer en móvil
    const accordionHeaders = document.querySelectorAll('.footer-links h4, .footer-legal h4, .footer-contact h4');
    const isMobile = window.innerWidth <= 768;
    
    // Si estamos en móvil, inicializar el acordeón
    if (isMobile) {
      accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
          const parent = this.parentElement;
          
          // Si el elemento ya está activo, cerrarlo
          if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            return;
          }
          
          // Cerrar todas las secciones activas
          document.querySelectorAll('.footer-links.active, .footer-legal.active, .footer-contact.active').forEach(section => {
            section.classList.remove('active');
          });
          
          // Abrir la sección actual
          parent.classList.add('active');
        });
      });
    }
    
    // Funcionalidad para el formulario de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email) {
          // Mostrar mensaje de éxito
          const successMessage = this.parentNode.querySelector('.newsletter-success');
          if (successMessage) {
            successMessage.textContent = '¡Gracias por suscribirte!';
            successMessage.classList.add('show');
            
            // Limpiar el formulario
            emailInput.value = '';
            
            // Ocultar mensaje después de 3 segundos
            setTimeout(() => {
              successMessage.classList.remove('show');
            }, 3000);
          }
        }
      });
    }
    
    // Detectar cuando el footer entra en el viewport para activar animaciones
    const footer = document.querySelector('.footer');
    
    if (footer && window.IntersectionObserver) {
      const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            footer.classList.add('in-view');
            footerObserver.unobserve(footer);
          }
        });
      }, {
        threshold: 0.1
      });
      
      footerObserver.observe(footer);
    } else if (footer) {
      // Fallback para navegadores que no soportan IntersectionObserver
      window.addEventListener('scroll', function checkFooterVisibility() {
        const footerRect = footer.getBoundingClientRect();
        
        if (footerRect.top < window.innerHeight) {
          footer.classList.add('in-view');
          window.removeEventListener('scroll', checkFooterVisibility);
        }
      });
    }
    
    // Mejoras para enlaces y botones del footer
    const footerLinks = document.querySelectorAll('.footer a:not(.social-link):not(.app-badge)');
    
    footerLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateX(5px)';
        link.style.color = 'var(--accent-primary)';
      });
      
      link.addEventListener('mouseleave', () => {
        link.style.transform = '';
        link.style.color = '';
      });
    });
    
    // Mejoras para redes sociales
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px)';
      });
      
      link.addEventListener('mouseleave', () => {
        link.style.transform = '';
      });
    });
  }
});