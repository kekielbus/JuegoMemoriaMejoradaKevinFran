function guardarDatos() {
    const alias = document.getElementById('alias').value;
    const email = document.getElementById('email').value;

    if (alias && email) {
        // Ocultar el formulario y mostrar los rectángulos de dificultad
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('rectangles-container').style.display = 'flex';
    } else {
        alert("Por favor, complete todos los campos.");
    }
}
function volverInicio() {
    // Llevar al usuario a la página anterior
    history.back();
}