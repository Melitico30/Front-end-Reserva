// Login.js

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente

        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        // Validación de campos vacíos
        if (email === '' || password === '') {
            alert('Por favor ingrese su correo electrónico y contraseña.');
            return;
        }

        // Envío del formulario si la validación es exitosa
        this.submit();
    });
});
