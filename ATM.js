var inputCantidad = document.getElementById("inputCantidad");
var botonCalcular = document.getElementById("botonCalcular");
var resultado = document.getElementById("resultado");

botonCalcular.addEventListener("click", calcular);

var cantidadBilletes;
var billetesCaja = [];
var billetesAEntregar = [];

billetesCaja.push(new Billete(500, 8));
billetesCaja.push(new Billete(200, 3));
billetesCaja.push(new Billete(100, 2));
billetesCaja.push(new Billete(50, 2));
billetesCaja.push(new Billete(10, 5));


function calcular() {
    var montoSolicitado = parseInt(inputCantidad.value);
    for (var i in billetesCaja) {
        if (inputCantidad.value > 0) {
            cantidadBilletes = parseInt(montoSolicitado / billetesCaja[i].valor);
            if(cantidadBilletes>billetesCaja[i].cantidad){
                cantidadBilletes = billetesCaja[i].cantidad;
            }
            montoSolicitado= montoSolicitado-(cantidadBilletes*billetesCaja[i].valor);
            billetesAEntregar.push(new Billete(billetesCaja[i].valor,cantidadBilletes));
        }
    }
    if(montoSolicitado==0){
        mostrarBilletes();
    }else{
        resultado.innerHTML = "No puedo entregarte esa cantidad";
    }
}

function mostrarBilletes(){
    for(var i in billetesAEntregar){
        if (billetesAEntregar[i].cantidad==1){
            resultado.innerHTML = resultado.innerHTML+billetesAEntregar[i].cantidad+" billete de $"+billetesAEntregar[i].valor+"<br>";
        }
        if (billetesAEntregar[i].cantidad>1){
            resultado.innerHTML = resultado.innerHTML+billetesAEntregar[i].cantidad+" billetes de $"+billetesAEntregar[i].valor+"<br>";
        }
    }
}