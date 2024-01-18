let numeroDeCasillero = 0;

document.querySelector("#agregar-casillero").onclick = function () {
  numeroDeCasillero++;
  const divCasillero = document.createElement("div");
  divCasillero.id = `div-salario-${numeroDeCasillero}`;

  const labelInputCasillero = document.createElement("label");
  labelInputCasillero.setAttribute(
    "for",
    `salario-numero-${numeroDeCasillero}`
  );
  labelInputCasillero.textContent = `Salario Numero ${numeroDeCasillero}:  `;

  const inputSalario = document.createElement("input");
  inputSalario.className = `salario`;
  inputSalario.type = "text";
  inputSalario.id = `salario-numero-${numeroDeCasillero}`;

  divCasillero.appendChild(labelInputCasillero);
  divCasillero.appendChild(inputSalario);
  document.querySelector("#casilleros").appendChild(divCasillero);
};

document.querySelector("#eliminar-casillero").onclick = function () {
  const $casilleros = document.querySelector("#casilleros");
  if (numeroDeCasillero > 0) {
    $casilleros.removeChild($casilleros.lastChild);
    numeroDeCasillero--;
  }
};

function calcularPromedioSalarioMensual(salarios) {
  const MESES_DEL_ANIO = 12;
  return (calcularPromedioSalarioAnual(salarios) / MESES_DEL_ANIO)
    .toFixed(2)
    .toString();
}

function calcularPromedioSalarioAnual(salarios) {
  let promedioSalarioAnual = 0;
  for (let i = 0; i < salarios.length; i++) {
    promedioSalarioAnual += salarios[i];
  }
  return (promedioSalarioAnual / salarios.length).toFixed(2).toString();
}

function calcularMenorSalarioAnual(salarios) {
  let menorSalario = salarios[0];
  for (let i = 1; i < salarios.length; i++) {
    if (salarios[i] < menorSalario) {
      menorSalario = salarios[i];
    }
  }
  return menorSalario.toString();
}

function calcularMayorSalarioAnual(salarios) {
  let mayorSalario = salarios[0];
  for (let i = 1; i < salarios.length; i++) {
    if (salarios[i] > mayorSalario) {
      mayorSalario = salarios[i];
    }
  }
  return mayorSalario.toString();
}

function mostrarResultados() {
  document.querySelector("#resultados").style.display = "block";
}

function colocarResultado(calculo, tiempo, valor) {
  document.querySelector(`#${calculo}-salario-${tiempo}`).textContent = valor;
}

function mostrarErrorAlUsuario(error, idNumero) {
  const span = document.createElement("span");
  span.textContent = error;
  span.id = `span-${idNumero}`;
  document.querySelector(`#div-salario-${idNumero}`).appendChild(span);
}

function validarSalarioIngresado(salario) {
  const patronAChequear = /^\d*$/;
  if (salario === "") {
    return "Debe ingresar al menos un digito mayor a cero";
  }
  if (salario === 0) {
    return "Debe ingresar al menos un digito mayor a cero";
  }

  if (!isNaN(salario)) {
    if (salario % 1 !== 0) {
      return "Debe ingresar un numero entero positivo mayor a cero";
    } else if (salario < 0) {
      return "Debe ingresar un numero entero positivo mayor a cero";
    }
  }
  if (!patronAChequear.test(salario)) {
    return "Este campo solo acepta numeros enteros positivos mayores a cero";
  }
  return "";
}

function calcularNumeroDeSalariosConErrores(salarios) {
  let numeroDeErrores = 0;
  salarios.forEach(function (salario, i) {
    const errorSalario = validarSalarioIngresado(salario);
    if (errorSalario) {
      document.querySelector(`#salario-numero-${i + 1}`).classList.add("error");
      if (document.querySelector(`#span-${i + 1}`) === null) {
        mostrarErrorAlUsuario(errorSalario, i + 1);
      }
      numeroDeErrores++;
    } else {
      document
        .querySelector(`#salario-numero-${i + 1}`)
        .classList.remove("error");
      if (document.querySelector(`#span-${i + 1}`) !== null) {
        document.querySelector(`#span-${i + 1}`).remove();
      }
    }
  });
  return numeroDeErrores;
}

function obtenerSalarios() {
  const salarios = document.querySelectorAll(".salario");
  const valorDeSalarios = [];
  for (let i = 0; i < salarios.length; i++) {
    valorDeSalarios.push(Number(salarios[i].value));
  }
  return valorDeSalarios;
}

document.querySelector("#btn-calcular").onclick = function () {
  const salarios = obtenerSalarios();
  const esValido = calcularNumeroDeSalariosConErrores(salarios) === 0;
  if (esValido) {
    colocarResultado("mayor", "anual", calcularMayorSalarioAnual(salarios));
    colocarResultado("menor", "anual", calcularMenorSalarioAnual(salarios));
    colocarResultado(
      "promedio",
      "anual",
      calcularPromedioSalarioAnual(salarios)
    );
    colocarResultado(
      "promedio",
      "mensual",
      calcularPromedioSalarioMensual(salarios)
    );
    mostrarResultados();
  }
};
