// script.js

const totalForms = 3;

function updateProgress() {
    let currentForm = parseInt(sessionStorage.getItem('currentForm'), 10) || 1;
    document.getElementById('form-progress').innerText = `(${currentForm} de ${totalForms})`;
}

function nextForm() {
    let currentForm = parseInt(sessionStorage.getItem('currentForm'), 10) || 1;
    if (currentForm < totalForms) {
        currentForm++;
        sessionStorage.setItem('currentForm', currentForm);
        // Actualizar el progreso
        updateProgress();

        // Redireccionar al siguiente formulario
        if (currentForm === 2) {
            window.location.href = 'Seleccion de Espacio.html';
        } else if (currentForm === totalForms) {
            window.location.href = 'Reserva Realizada.html';
        }
    }
}

// Función para el formulario de Selección de Espacio
function nextFormFromSelection() {
    let currentForm = parseInt(sessionStorage.getItem('currentForm'), 10) || 1;
    if (currentForm < totalForms) {
        currentForm++;
        sessionStorage.setItem('currentForm', currentForm);
        // Actualizar el progreso
        updateProgress();

        // Redireccionar al siguiente formulario
        if (currentForm === totalForms) {
            window.location.href = 'Reserva Realizada.html';
        }
    }
}


// Inicializa el progreso en la página
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('form-progress')) {
        updateProgress();
    }
});
