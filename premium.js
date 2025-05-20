// Configuración del fondo neural
document.addEventListener('DOMContentLoaded', function() {
    // Inicialización del canvas neuronal
    const neuralCanvas = document.getElementById('neuralCanvas');
    if (neuralCanvas) {
        const ctx = neuralCanvas.getContext('2d');
        neuralCanvas.width = window.innerWidth;
        neuralCanvas.height = window.innerHeight;

        // Configuración
        const neurons = [];
        const neuronCount = 150;
        const neuronSize = 1;
        const connectionDistance = 150;
        const connectionOpacity = 0.15;

        // Inicializar neuronas
        for (let i = 0; i < neuronCount; i++) {
            neurons.push({
                x: Math.random() * neuralCanvas.width,
                y: Math.random() * neuralCanvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }

        // Función para dibujar el fondo neural
        function drawNeuralBackground() {
            ctx.clearRect(0, 0, neuralCanvas.width, neuralCanvas.height);

            // Actualizar posiciones
            neurons.forEach(neuron => {
                neuron.x += neuron.vx;
                neuron.y += neuron.vy;

                // Rebote en los bordes
                if (neuron.x < 0 || neuron.x > neuralCanvas.width) neuron.vx *= -1;
                if (neuron.y < 0 || neuron.y > neuralCanvas.height) neuron.vy *= -1;

                // Dibujar neurona
                ctx.beginPath();
                ctx.arc(neuron.x, neuron.y, neuronSize, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(127, 90, 240, 0.6)';
                ctx.fill();
            });

            // Dibujar conexiones
            for (let i = 0; i < neurons.length; i++) {
                for (let j = i + 1; j < neurons.length; j++) {
                    const dx = neurons[i].x - neurons[j].x;
                    const dy = neurons[i].y - neurons[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(neurons[i].x, neurons[i].y);
                        ctx.lineTo(neurons[j].x, neurons[j].y);
                        const opacity = connectionOpacity * (1 - distance / connectionDistance);
                        ctx.strokeStyle = `rgba(127, 90, 240, ${opacity})`;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(drawNeuralBackground);
        }

        // Iniciar animación
        drawNeuralBackground();

        // Ajustar tamaño del canvas cuando cambia el tamaño de la ventana
        window.addEventListener('resize', () => {
            neuralCanvas.width = window.innerWidth;
            neuralCanvas.height = window.innerHeight;
        });
    }

    // Configurar Stripe con la clave pública
    const stripe = Stripe('pk_test_51RQqOsRbDxXsNOiWTFddlkCyi89xDlxeORRpHbn60TfbuR9Ui1UuZ8kRdtgSJNMACaJeyRVtFptI6xz26eK7ZIpj006LaOFg1X');
    
    // Función para obtener parámetros de la URL
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    
    // Obtener el user_id de la URL
    const userId = getUrlParameter('user_id');
    
    if (!userId) {
        // Si no hay user_id, mostrar un mensaje de error
        const container = document.querySelector('.premium-container');
        container.innerHTML = '<h1>Error</h1><p>No se ha proporcionado un ID de usuario válido. Por favor, intenta acceder desde la aplicación.</p>';
        return;
    }
    
    // Configurar el botón de checkout
    const checkoutButton = document.getElementById('checkout-button');
    
    checkoutButton.addEventListener('click', function() {
        // Mostrar un indicador de carga
        const originalText = checkoutButton.innerHTML;
        checkoutButton.disabled = true;
        checkoutButton.innerHTML = '<span class="loading-spinner"></span>Procesando...';
        
        // Llamar al backend para crear una sesión de checkout
        fetch('https://api.paulaapp.com/api/subscription/create-checkout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: userId,
                price_id: 'price_1RQrm5D34bXKT83d4JPN1JIt',
                success_url: 'https://paulaapp.com/success',
                cancel_url: 'https://paulaapp.com/premium'
            })
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Error al crear la sesión de pago');
            }
            return response.json();
        })
        .then(function(session) {
            // Redirigir al checkout de Stripe
            return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function(result) {
            // Si hay un error en el redirectToCheckout, mostrar el error
            if (result.error) {
                alert(result.error.message);
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
            checkoutButton.disabled = false;
            checkoutButton.innerHTML = originalText;
            alert('Ha ocurrido un error al procesar tu solicitud. Por favor, intenta nuevamente.');
        });
    });
}); 