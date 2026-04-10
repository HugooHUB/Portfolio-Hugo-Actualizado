function cambiarTema() {

    if (document.body.classList.contains("oscuro")) {


        document.body.classList.remove("oscuro");
        document.getElementById("boton-tema").textContent = "🌙 Modo oscuro";

    } else {


        document.body.classList.add("oscuro");
        document.getElementById("boton-tema").textContent = "☀️ Modo claro";
    }
}



window.onscroll = function() {

    var boton = document.getElementById("volver-arriba");

    if (window.scrollY > 300) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
};


function volverArriba() {
    window.scrollTo(0, 0);
}