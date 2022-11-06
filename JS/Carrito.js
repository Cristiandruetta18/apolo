// // Elementos en variables
// let nombre          = document.getElementById("nombre");
// let apellido        = document.getElementById("apellido");
// let mail            = document.getElementById("mail");
// let cantidad1       = document.getElementById("cantidadMueble1");
// let cantidad2       = document.getElementById("cantidadMueble2");
// let cantidad3       = document.getElementById("cantidadMueble3");


// Función para quitar el estilo de error a los elementos del form
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

// Funcion para chequear que tengan cantidades los muebles
function chequearCantidadMuebles (cantidadMueble){
    let mostrarAlertaDeError=false;
    for (let i=0; i<cantidadMueble.length; i++) {
        if ( cantidadMueble[i].value == 0 ||  (isNaN(cantidadMueble[i].value)) ) {
            mostrarAlertaDeError=true;
            cantidadMueble[i].classList.add("is-invalid");
        }
    }

    if (mostrarAlertaDeError==true){
        alert("Por favor, ingresá correctamente cantidad de muebles.");
    }
}

// Cálculo total a pagar
function calcularTotalAPagar() {

    // Ejecuto función para que quite todos los estilos de error en los campos que los tuvieran
    quitarClaseError();

    // Verifico si lleno los siguientes campos, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (nombre.value === "") {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribí tu email.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Para determinar si el correo electrónico es válido o no
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("Por favor, escribí un correo electrónico válido.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // // Verifico si está ingresado al menos un mueble, sino que aplique un estilo de error
    chequearCantidadMuebles([cantidadMueble1,cantidadMueble2, cantidadMueble3] );

    // Multiplico cantidad muebles por valor
    let total=0;
    total=cantidadMueble1.value*5000+cantidadMueble2.value*3000+cantidadMueble3.value*3000;

    // Inserto el valor en el HTML
    totalPago.innerHTML = total;
}

// Botón Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click', calcularTotalAPagar);

// Función para el botón Borrar para que borre el valor
function resetTotalAPagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
    cantidadMueble1.value= "0";
    cantidadMueble2.value= "0";
    cantidadMueble3.value= "0";
}
btnBorrar.addEventListener('click', resetTotalAPagar);