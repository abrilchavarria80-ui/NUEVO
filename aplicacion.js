document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");

    togglePassword.addEventListener("click", function () {
        // Cambiar el tipo de input entre 'password' y 'text'
        const isPasswordHidden = passwordField.type === "password"; // Verifica si está oculto
        passwordField.type = isPasswordHidden ? "text" : "password";

        // Alternar la clase 'active' en el ícono para reflejar el estado visual
        this.classList.toggle("active", isPasswordHidden);
    });
});

// Aquí puedes agregar cualquier comportamiento dinámico si es necesario
// Ejemplo: Cambiar las iniciales con el nombre del usuario al iniciar sesión
document.addEventListener('DOMContentLoaded', () => {
    // Cambiar las iniciales del usuario (esto depende de tu lógica backend)
    const userInitials = 'DN'; // Suponiendo que 'DN' son las iniciales del usuario
    document.getElementById('user-initials').textContent = userInitials;
});

