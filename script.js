let imagenes = ["img/CENTRO.png", "img/CUYO.png", "img/NEA.png", "img/NOA.png", "img/PAMPA.png", "img/PATAGONIA.png", "img/RMBA.png"];
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let posActual = 0;
let posTot = imagenes.length;
let pos1;
let pos2;
let pos3;
function moverIzq() {
    posActual--;
    pos1= ((posActual % posTot) + posTot) % posTot;
    pos2= (((posActual + 1) % posTot) + posTot) % posTot;
    pos3= (((posActual + 2) % posTot) + posTot) % posTot;
    // console.log("Posición Actual: " + posActual);
    // console.log("Posición1: " + pos1);
    // console.log("Posición2: " + pos2);
    // console.log("Posición3: " + pos3);

    item1.src = imagenes[pos1];
    item2.src = imagenes[pos2];
    item3.src = imagenes[pos3];
}

function moverDer() {
    
    posActual++;
    pos1= ((posActual % posTot) + posTot) % posTot;
    pos2= (((posActual + 1) % posTot) + posTot) % posTot;
    pos3= (((posActual + 2) % posTot) + posTot) % posTot;
    // console.log("Posición Actual: " + posActual);
    // console.log("Posición1: " + pos1);
    // console.log("Posición2: " + pos2);
    // console.log("Posición3: " + pos3);
    // console.log(-1 % 7);
    

    item1.src = imagenes[pos1];
    item2.src = imagenes[pos2];
    item3.src = imagenes[pos3];
}