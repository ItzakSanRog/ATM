var cantidadInput = document.getElementById("inputCantidad");
var boton = document.getElementById("botonCalcular")


boton.addEventListener("click",calcular);


var billetesDisponibles = [];
var billetesAEntregar = [];


billetesDisponibles.push(new Billete(500,5));
billetesDisponibles.push(new Billete(200,3));
billetesDisponibles.push(new Billete(100,4));
billetesDisponibles.push(new Billete(50,5));
billetesDisponibles.push(new Billete(20,2));
billetesDisponibles.push(new Billete(10,4));


function calcular(){
    for(var i in billetesDisponibles){
        if(cantidadInput.value =! 0){
            billetes
        }
        cantidadInput.value
    }
}