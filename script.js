let imagenes = ["img/CENTRO.png", "img/CUYO.png", "img/NEA.png", "img/NOA.png", "img/PAMPA.png", "img/PATAGONIA.png", "img/RMBA.png"];
let titulos = ["Región Centro", "Región Cuyana", "Región Noreste", "Región Noroeste", "Región Pampeana", "Región Patagónica", "Región Metropolitana de Buenos Aires"];
let descripcion = ["Con importantes polos como las ciudades de Córdoba, Santa Fé y Rosario, el fútbol de esta región históricamente ha estado presente desde los inicios del fútbol en Argentina; especialmente la provincia de Santa Fé, que tiene varios clubes directamente afiliados a la AFA. Se destacan los clásicos Rosarino, Cordobés y Santafesino como los partidos más importantes de la región.","El fútbol cuyano ha tenido un gran crecimiento en los últimos años con equipos que han sabido tener gran protagonismo en la Primera División, principalmente con equipos de Mendoza y San Juan. El Clásico de Cuyo que enfrenta a Godoy Cruz y San Martín de San Juan se ha disputado en varias ocasiones en la categoría más alta del fútbol argentino.", "La Región Noreste se ha hecho presente en muchas ocasiones en las categorías más importantes del fútbol argentino, principalmente durante los antiguos torneos Nacionales y con la participación de algunos equipos que pudieron ascender a la Primera División como Mandiyú, Huracán Corrientes y Crucero del Norte. Sin embargo, no han logrado mantenerse por mucho tiempo y actualmente la mayoría disputa torneos de 3ra División.", "La Región Norte se ha mantenido durante mucho tiempo entre los primeros planos del fútbol del interior. Se destacan clásicos entre provincias como el Clásico del Norte que enfrenta a Gimnasia y Esgrima de Jujuy con Gimnasia y Tiro de Salta, el Clásico Tucumano entre San Martín y Atlético Tucumán y el Clásico Santiagueño entre Central Córdoba y Mitre.", "La región Pampeana se destaca principalmente por equipos pertenecientes a la provincia de Buenos Aires, aunque a pesar de estar cerca de la región metropolitana, la mayoría se encuentra en Segunda División o categorías menores y sus clubes están indirectamente afiliados a la AFA.","La Patagonia es una de las regiones que menos representantes históricamente ha tenido en Primera División y el fútbol se ha desarrollado de manera más lenta, aunque existen equipos que han tenido mucho crecimiento en los últimos años y actualmente se hacen presenten en la Segunda División como lo hacen los dos equipos de Puerto Madryn de la provincia de Chubut","La Región Metropolitana de Buenos Aires es la que concentra un gran número de equipos que participan en las categorías principales y donde pertenece el grupo de los 5 Grandes del Fútbol Argentino, los cuales disputan los clásicos más populares del país, destacándose el Superclásico y el Clásico de Avellaneda."]
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let region = document.getElementById("region");
let infoDescripcion = document.getElementById("descripcion"); 
let posActual = 0;
let posTot = imagenes.length;
let pos1, pos2, pos3;

function moverIzq() {
    posActual--;
    pos1 = ((posActual % posTot) + posTot) % posTot;
    pos2 = (((posActual + 1) % posTot) + posTot) % posTot;
    pos3 = (((posActual + 2) % posTot) + posTot) % posTot;

    item1.src = imagenes[pos1];
    item2.src = imagenes[pos2];
    item3.src = imagenes[pos3];
    region.innerText = titulos[pos2];
    infoDescripcion.innerText = descripcion[pos2];
}

function moverDer() {
    posActual++;
    pos1 = ((posActual % posTot) + posTot) % posTot;
    pos2 = (((posActual + 1) % posTot) + posTot) % posTot;
    pos3 = (((posActual + 2) % posTot) + posTot) % posTot;

    item1.src = imagenes[pos1];
    item2.src = imagenes[pos2];
    item3.src = imagenes[pos3];
    region.innerText = titulos[pos2];
    infoDescripcion.innerText = descripcion[pos2];
}

let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let correo = document.getElementById("correo");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");

let patronemail = /^\w+@\w+(\.[a-z]{2,3})(\.[a-z]{2}){0,1}$/i;
let patronNumero = /^[0-9]{10}$/;

function validar() {
    let camposInvalido = false;

    if (nombre.value == "") {
        camposInvalido = true;
        let errNombre = document.getElementById("errNombre");
        errNombre.style.display = "block";
    }
    if (telefono.value == "" || !patronNumero.test(telefono.value)) {
        camposInvalido = true;
        let errTelefono = document.getElementById("errTelefono");
        errTelefono.style.display = "block";
    }
    if (correo.value == "" || !patronemail.test(correo.value)) {
        camposInvalido = true;
        let errCorreo = document.getElementById("errCorreo");
        errCorreo.style.display = "block";
    }
    if (asunto.value == "") {
        camposInvalido = true;
        let errAsunto = document.getElementById("errAsunto");
        errAsunto.style.display = "block";
    }
    if (mensaje.value == "") {
        camposInvalido = true;
        let errMensaje = document.getElementById("errMensaje");
        errMensaje.style.display = "block";
    }
    if (!camposInvalido) {
        let res = document.getElementById("resultado");
        res.style.display = "block";
        let registro = document.createElement("p");
        registro.innerHTML = "<span>" + nombre.value + "</span>" + " ha comentado: (" + asunto.value + ") " + mensaje.value + "<br> Contacto: " + telefono.value + " - " + correo.value;
        res.appendChild(registro);
        nombre.value = "";
        telefono.value = "";
        correo.value = "";
        asunto.value = "";
        mensaje.value = "";
    }
    return false;
}

function limpiarCampo(e) {
    let errMsj = e.target.nextSibling.nextSibling;
    errMsj.style.display = "none";
}