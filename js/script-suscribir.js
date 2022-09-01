//alert("Hola Mundito!"); <- Modo antiguo

window.addEventListener("DOMContentLoaded", (event) => {
  /* Con el evento DomContentLoaded me aseguro que todas las etiquetas HTML
    fueron cargadas y procesadas por el browser
    más info en : https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event*/

  console.log("evento DomContentLoaded");

  // Sintaxis de variables:
  // let nombreVariable = valor;
  // Ej: let nombre = "Héctor";

  let boton = document.getElementById("btn-suscribir");
  boton.addEventListener("click", (clickeo) => {
    try {
      //Recuperar los valores del formulario
      let nombre = document.getElementById("nombre").value;
      let email = document.getElementById("correo").value;
      let mensaje = document.getElementById("mensaje").value;
      //let genero = getGenero();
      let intereses = getIntereses();

      let suscriptor = {
        nombre,
        email,
        mensaje,
        //genero,
        intereses,
        fecha_registro: new Date().toUTCString(),
      };

      //console.log("El nombre del suscriptor es: " + nombre);
      console.dir(suscriptor);
      guardarSuscriptor(suscriptor);
      mostrarExito("se guardo bien");
    } catch (e) {
      mostrarError(e.message);
    }
  });
});

function mostrarExito() {
    document.getElementById("form-mensaje-exitoso").style.display = "block";
}


async function guardarSuscriptor(suscriptor) {
    const url = "https://curso-front-smu-default-rtdb.firebaseio.com/suscriptores.json";
    //Alternativa 1:
    /*fetch(url, {
        method: "POST",
        body: JSON.stringify(suscriptor),
    })
    .then(respuesta =>respuesta.json()) //Devuelve una promesa
    .then(data => mostrarExito("Se guardó correctamente su suscripción"))*/
    
    //Alternativa 2:
    const respuesta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(suscriptor)
    });
    const data = await respuesta.json();
    mostrarExito("Se guardó correctamente su suscripcion"+ data.name);
}

function getIntereses() {
  let inputIntereses = document.querySelectorAll(
    "input[name='intereses']:checked"
  );
  let arrIntereses = [];
  inputIntereses.forEach((interes) => arrIntereses.push(interes.value));
  if (inputIntereses.length < 1) {
    throw new Error("Debe seleccionar al menos 1 tema de interés");
  }
  return arrIntereses;
}

/*function getGenero() {
  let inputSeleccionado = document.querySelector(
    "input[name='genero']:checked"
  );
  if (inputSeleccionado == null) {
    throw new Error("Debe seleccionar un género");
  }
  const genero = inputSeleccionado.value;
  return genero;
}*/

function mostrarError(mensajeDeError) {
  document.getElementById("form-mensaje-error").style.display = "block";
  const ul = document.querySelector("#form-mensaje-error ul");
  const li = document.createElement("li");
  const litext = document.createTextNode(mensajeDeError);
  li.appendChild(litext);
  ul.appendChild(li);
}

/* Con esto podemos generar un mensaje para cada error:
const errores = [] // array vacío 
const nombre = getNombreDesdeForm();
const edad = getEdadDesdeForm();
if( !nombreEsValido(nombre)) {
    errores[] = "El nombre no es válido";
}
if( edad < 18) {
    errores[] = "Debe ser mayor de edad";
}

if( errores.length > 0) {
    mostrarErrores(errores);
} else {
    guardarDatos(); 
}
*/

console.log("Hola mundo!");
