document.addEventListener('DOMContentLoaded', function() {
    // Configurar Stripe con la clave pública
    const stripe = Stripe('pk_live_51RQqOkD34bXKT83dNmDTwDYqSEaUe053RodiWNvJ4WJiWhW8q7XZH46pgpc4KuAlpAYf1Zxyp4dOB40Cqs1CWpEF00oS8s5yTc');
    
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
        checkoutButton.disabled = true;
        checkoutButton.textContent = 'Procesando...';
        
        // Llamar al backend para crear una sesión de checkout
        fetch('https://api.paulaapp.com/api/subscription/create-checkout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: userId,
                success_url: 'https://paulaapp.github.io/success',
                cancel_url: 'https://paulaapp.github.io/profile'
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
            checkoutButton.textContent = 'Suscribirse Ahora';
            alert('Ha ocurrido un error al procesar tu solicitud. Por favor, intenta nuevamente.');
        });
    });
}); 