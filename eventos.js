const divBoton = document.getElementById("button");
divBoton.addEventListener("click", function (){
    alert("Hola! Soy el div!")
});
const boton = document.getElementById("saludo");
boton.addEventListener("click", function(event){
    event.stopPropagation();
    alert("Hola!");
});