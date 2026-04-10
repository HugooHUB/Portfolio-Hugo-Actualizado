


document.getElementById("formulario").addEventListener("submit", function(evento) {


    evento.preventDefault();


    var nombre  = document.getElementById("nombre").value;
    var email   = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;


    document.getElementById("error-nombre").textContent  = "";
    document.getElementById("error-email").textContent   = "";
    document.getElementById("error-mensaje").textContent = "";


    document.getElementById("nombre").classList.remove("error-campo");
    document.getElementById("email").classList.remove("error-campo");
    document.getElementById("mensaje").classList.remove("error-campo");

    var hayError = false;


    if (nombre == "") {
        document.getElementById("error-nombre").textContent = "⚠ Por favor escribe tu nombre.";
        document.getElementById("nombre").classList.add("error-campo");
        hayError = true;
    }

    if (email == "") {
        document.getElementById("error-email").textContent = "⚠ Por favor escribe tu correo electronico.";
        document.getElementById("email").classList.add("error-campo");
        hayError = true;


    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        document.getElementById("error-email").textContent = "⚠ El correo no tiene un formato valido. Ejemplo: hugo@gmail.com";
        document.getElementById("email").classList.add("error-campo");
        hayError = true;
    }

    if (mensaje == "") {
        document.getElementById("error-mensaje").textContent = "⚠ Por favor escribe un mensaje.";
        document.getElementById("mensaje").classList.add("error-campo");
        hayError = true;
    }

    if (hayError == false) {
        document.getElementById("mensaje-ok").classList.remove("oculto");


        document.getElementById("nombre").value  = "";
        document.getElementById("email").value   = "";
        document.getElementById("mensaje").value = "";
    }

});
