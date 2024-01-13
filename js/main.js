const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form["descripcion-regalo"].value;

function validarNombre(nombre) {
  const cantidadMaximaDeCaracteres = 50;

  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  } else if (nombre.length >= cantidadMaximaDeCaracteres) {
    return "Este campo debe tener menos de 50 caracteres";
  } else {
    return "";
  }
}
console.log(validarNombre(nombre));

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Debe seleccionar una ciudad";
  } else {
    return "";
  }
}
console.log(validarCiudad(ciudad));

function validarDescripcionRegalo(descripcionRegalo) {
  const cantidadMaximaDeCaracteres = 200;
  if (descripcionRegalo.length === 0) {
    return "Debe describir que le gustaria recibir este año";
  } else if (descripcionRegalo.length >= cantidadMaximaDeCaracteres) {
    return "Este campo debe tener menos de 200 caracteres";
  } else {
    return "";
  }
}

console.log(validarDescripcionRegalo(descripcionRegalo));
