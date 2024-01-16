const $form = document.querySelector("#carta-a-santa");

function validarNombre(nombre) {
  const cantidadMaximaDeCaracteres = 50;

  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  } else if (nombre.length >= cantidadMaximaDeCaracteres) {
    return "Este campo debe tener menos de 50 caracteres";
  } else if (!/^[a-z]+$/i.test(nombre)) {
    return "El campo nombre solo acepta letras";
  } else {
    return "";
  }
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Debe seleccionar una ciudad";
  } else {
    return "";
  }
}

function validarDescripcionRegalo(descripcionRegalo) {
  const cantidadMaximaDeCaracteres = 100;
  if (descripcionRegalo.length === 0) {
    return "Debe describir que le gustaria recibir este año";
  } else if (descripcionRegalo.length >= cantidadMaximaDeCaracteres) {
    return "Este campo debe tener menos de 100 caracteres";
  } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return "El campo descripcion solo puede tener numeros y letras";
  } else {
    return "";
  }
}

function redirigirAListaDeDeseos(){
  window.location.href = "wishlist.html";
}

function validarFormulario(event) {
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo,
  };

  
  const esExito = manejarErrores(errores) === 0;
  if (esExito) {
    $form.className = "oculto";
    document.querySelector("#exito").className = "";
    setTimeout(redirigirAListaDeDeseos, 5000);
  }

  event.preventDefault();
}

function manejarErrores(errores) {
  const llaves = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  let cantidadDeErrores = 0;

  llaves.forEach(function (llave) {
    const error = errores[llave];

    if (error) {
      cantidadDeErrores++;
      $form[llave].className = "error";
      if (document.querySelector(`#error${llave}`) === null) {
        const $error = document.createElement("li");
        $error.innerText = error;
        $error.id = `error${llave}`;
        $errores.appendChild($error);
      }
    } else {
      $form[llave].className = "";
      if (document.querySelector(`#error${llave}`) !== null) {
        document.querySelector(`#error${llave}`).remove();
      }
    
    }
  });
  return cantidadDeErrores;
}

$form.onsubmit = validarFormulario;
