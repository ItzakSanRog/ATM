var inputCantidad = document.getElementById("inputCantidad");
var botonCalcular = document.getElementById("botonCalcular");
var parrafo = document.createElement("P");



botonCalcular.addEventListener("click", calcular);

var cantidadBilletes;
var billetesDisponibles = [];
var billetesAEntregar = [];


billetesDisponibles.push(new Billete(500, 8));
billetesDisponibles.push(new Billete(200, 3));
billetesDisponibles.push(new Billete(100, 2));
billetesDisponibles.push(new Billete(50, 2));



function calcular() {
    var montoSolicitado = parseInt(inputCantidad.value);
    for (var i in billetesDisponibles) {
        if (inputCantidad.value > 0) {
            cantidadBilletes = parseInt(montoSolicitado / billetesDisponibles[i].valor);
            if(cantidadBilletes>billetesDisponibles[i].cantidad){
                cantidadBilletes = billetesDisponibles[i].cantidad;
            }
            montoSolicitado= montoSolicitado-(cantidadBilletes*billetesDisponibles[i].valor);
            billetesAEntregar.push(new Billete(billetesDisponibles[i].valor,cantidadBilletes));
        }
        
    }
    if(montoSolicitado==0){
        mostrar();
    }else{
        
        var text = document.createTextNode("No puedo entregarte esa cantidad");
        parrafo.appendChild(text);
        document.getElementById("output").appendChild(parrafo);
        
    }
}

function mostrar(){
    for(var i in billetesAEntregar){
        
        console.log(billetesAEntregar[i]);
        var text = document.createTextNode(billetesAEntregar[i].cantidad+" billete(s) de "+billetesAEntregar[i].valor+"__");
        parrafo.appendChild(text);
        document.getElementById("output").appendChild(parrafo);

    }
}