function marcarError(elemento) {
  document.querySelector(`#${elemento}`).classList.add("error");
}

function quitarError(elemento) {
  document.querySelector(`#${elemento}`).classList.remove("error");
}

function deshabilitarBotonOk() {
  document.querySelector("#btn-ok").disabled = true;
}

function mostrarElemento(elemento) {
  document.querySelector(`#${elemento}`).style.display = "block";
}

function crearInputsPersonas(numeroDePersonas) {
  for (let i = 0; i < numeroDePersonas; i++) {
    const divPersona = document.createElement("div");
    divPersona.id = `div-persona${i + 1}`;

    const labelInputPersona = document.createElement("label");
    labelInputPersona.setAttribute("for", `persona${i + 1}`);
    labelInputPersona.textContent = `Edad de la persona numero ${i + 1}:  `;

    const inputPersona = document.createElement("input");
    inputPersona.id = `persona${i + 1}`;
    inputPersona.className = `persona`;
    inputPersona.type = "text";

    divPersona.appendChild(labelInputPersona);
    divPersona.appendChild(inputPersona);
    document.querySelector("#integrantes").appendChild(divPersona);
  }
}

function validarNumeroIngresado(numero) {
  if (numero === 0) {
    return "Este campo debe tener al menos un digito mayor a cero";
  } else if (isNaN(numero)) {
    return "El valor ingresado debe ser un numero entero positivo";
  } else if (numero < 0 || numero % 1 !== 0) {
    return "Este campo solo admite numeros enteros positivos";
  } else {
    return "";
  }
}

function obtenerNumeroDePersonas() {
  return Number(document.querySelector("#cantidad-de-personas").value);
}

document.querySelector("#btn-ok").onclick = function (event) {
  const numeroDePersonas = obtenerNumeroDePersonas();
  const errorNumeroDePersonas = validarNumeroIngresado(numeroDePersonas);

  if (errorNumeroDePersonas === "") {
    quitarError("cantidad-de-personas");
    ocultarElemento("error-cantidad-de-personas");
    crearInputsPersonas(numeroDePersonas);
    mostrarElemento("btn-calcular");
    deshabilitarBotonOk();
  } else {
    marcarError("cantidad-de-personas");
    document.querySelector("#error-cantidad-de-personas").textContent =
      errorNumeroDePersonas;
    mostrarElemento("error-cantidad-de-personas");
    setTimeout(ocultarElemento, 4000, "error-cantidad-de-personas");
  }
};

function calcularEdadMayor(edades) {
  let edadMayor = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] > edadMayor) {
      edadMayor = edades[i];
    }
  }
  return edadMayor.toString();
}

function calcularEdadMenor(edades) {
  let edadMenor = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] < edadMenor) {
      edadMenor = edades[i];
    }
  }
  return edadMenor.toString();
}

function calcularPromedioDeEdades(edades) {
  let acumulador = 0;
  for (let i = 0; i < edades.length; i++) {
    acumulador += edades[i];
  }
  return (acumulador / edades.length).toFixed(1).toString();
}

function colocarResultado(objetivo, valor) {
  document.querySelector(`#${objetivo}-edad`).textContent = valor;
}

function mostrarAlUsuario(error, idNumero) {
  const span = document.createElement("span");
  span.textContent = error;
  span.id = `span${idNumero}`
  document.querySelector(`#div-persona${idNumero}`).appendChild(span);
}

function validarEdadesIngresadas(edades) {
  let numeroDeErrores = 0;
  edades.forEach(function (edad, i) {
    const tieneError = validarNumeroIngresado(edad);
    if (tieneError) {
      numeroDeErrores++;
      marcarError(`persona${i + 1}`);
      if (document.querySelector(`#span${i+1}`) === null){
        mostrarAlUsuario(tieneError, i + 1);
      }
        
    } else {
      quitarError(`persona${i + 1}`);
      if (document.querySelector(`#span${i + 1}`) !== null) {
        document.querySelector(`#span${i + 1}`).remove();
      }
        
    }
  })
  return numeroDeErrores;
}

function obtenerEdades() {
  const personas = document.querySelectorAll(".persona");
  const edades = [];
  for (let i = 0; i < personas.length; i++) {
    edades.push(Number(personas[i].value));
  }
  return edades;
}

document.querySelector("#btn-calcular").onclick = function () {
  const edades = obtenerEdades();
  const sonValidas = validarEdadesIngresadas(edades) === 0;
  if (sonValidas) {
    colocarResultado("mayor", calcularEdadMayor(edades));
    colocarResultado("menor", calcularEdadMenor(edades));
    colocarResultado("promedio", calcularPromedioDeEdades(edades));
    mostrarElemento("resultados");  
  }
  
};

function habilitarBotonOk() {
  document.querySelector("#btn-ok").disabled = false;
}

function ocultarElemento(elemento) {
  document.querySelector(`#${elemento}`).style.display = "none";
}

function eliminarInputsPersonas() {
  const $integrantes = document.querySelector("#integrantes");
  while ($integrantes.firstChild) {
    $integrantes.removeChild($integrantes.firstChild);
  }
}

function empezarDeNuevo() {
  eliminarInputsPersonas();
  ocultarElemento("resultados");
  ocultarElemento("btn-calcular");
  habilitarBotonOk();
}
