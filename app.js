asignarTexto('h1', 'Juego');
asignarTexto('p', 'Escribe un número');
let numeroSorteado =[];
let max = 10;
let numeroSecreto = generarNumeroSecreto();
let contador = 1;

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function IntentoUsuario(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log(numeroSecreto);
    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        asignarTexto("p","¡Felicidades! Adivinaste el número secreto." + " En intento: " + contador);
        document.getElementById("reiniciar").disabled = false;
    } else {
        if(numeroUsuario > numeroSecreto){
            asignarTexto("p", "El número secreto es menor");
        } else {
            asignarTexto("p", "El número secreto es mayor");
        }    
        contador++;
        limpiarCaja();
    }
}
//No repetir numero en los juegos
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * max) + 1;
//CAPACIDAD MAXIMA
    if(numeroSorteado.length == max){
        asignarTexto("p", "Capacidad maxima de numero sorteados");
    }else{
        console.log(numeroGenerado);
        console.log(numeroSorteado);
        if(numeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            numeroSorteado.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function limpiarCaja(){
   let caja = document.querySelector('#numeroUsuario');
   caja.value = '';
}

function reiniciar(){
    asignarTexto('h1', 'Juego');
    asignarTexto('p', 'Escribe un número del 1 al ' + max);
    numeroSecreto = generarNumeroSecreto();
    limpiarCaja();
    contador = 1;
    document.getElementById("reiniciar").disabled = true;
}
