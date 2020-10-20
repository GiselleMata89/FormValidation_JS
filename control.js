// Definición de variables
var form = document.querySelector('form');
var user = document.getElementById('user');
var password = document.getElementById('password');
var submit = document.getElementById('submit');
var note = document.querySelector('p');

// Validación del formulario 
form.onsubmit = function(e){

    // Evaluación de campos vacíos
    if(user.value === '' || password.value === ''){
        e.preventDefault();
        note.textContent = 'Por favor, completa todos los datos!';

    // Evaluación de un @ en el campo usuario
    } else if(!/\S+@\S+/.test(user.value)){
        e.preventDefault();
        note.textContent = 'Por favor, ingresa un nombre de usuario válido!';
    }
}
