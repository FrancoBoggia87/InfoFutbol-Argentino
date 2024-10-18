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

let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let correo = document.getElementById("correo");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");

let patronemail = /^\w+@\w+(\.[a-z]{2,3})(\.[a-z]{2}){0,1}$/i;
let patronNumero =  /^[0-9]{10}$/;


function validar(){
let prueba = patronemail.test(correo.value);    
let camposInvalido = false;
let err = document.createElement("span");

if(nombre.value==""){
    camposInvalido=true;
    let errNombre=document.getElementById("errNombre");
    errNombre.style.display="block";
}
if(telefono.value==""|| ! patronNumero.test(telefono.value)){
    camposInvalido=true;
    let errTelefono=document.getElementById("errTelefono");
    errTelefono.style.display="block";

}
if(correo.value==""|| ! patronemail.test(correo.value)){
    camposInvalido=true;
    let errCorreo=document.getElementById("errCorreo");
    errCorreo.style.display="block";

}
if(asunto.value==""){
    camposInvalido=true;
    let errAsunto=document.getElementById("errAsunto");
    errAsunto.style.display="block";
}
if(mensaje.value==""){
    camposInvalido=true;
    let errMensaje=document.getElementById("errMensaje");
    errMensaje.style.display="block";
}
if(!camposInvalido){
    let res = document.getElementById("resultado");
    res.style.display="block";
    let registro = document.createElement("p");
    registro.innerText = nombre.value + " ha comentado: (" + asunto.value + ") " + mensaje.value + "\n Contacto: "+ telefono.value + " - "+ correo.value;
    res.appendChild(registro);
    nombre.value="";
    telefono.value=""; 
    correo.value=""; 
    asunto.value="";
    mensaje.value="";
}

// document.getElementById('formulario').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que el formulario se envíe y recargue la página

//     // Obtener los valores de los campos del formulario
//     var nombre = document.getElementById('nombre').value;
//     var telefono = document.getElementById('telefono').value;
//     var correo = document.getElementById('correo').value;
//     if(nombre && telefono && correo){
//         // Crear un nuevo párrafo
//         var nuevoParrafo = document.createElement('p');
        
//         // Crear el contenido del párrafo con los datos del formulario
//         nuevoParrafo.textContent = `Nombre: ${nombre}, Teléfono: ${telefono}, Correo: ${correo}`;
        
//         // Agregar el párrafo al div de resultado
//         document.getElementById('resultado').appendChild(nuevoParrafo);
//         document.getElementById("formulario").reset();}
//     })

    return false;
}
