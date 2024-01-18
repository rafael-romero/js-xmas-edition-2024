function probarValidarSalarioIngresado() {
  console.assert(
    validarSalarioIngresado(3) === "",
    "Validar salario ingresado fallo con un numero valido"
  );

  console.assert(
    validarSalarioIngresado('') ===
      "Debe ingresar al menos un digito mayor a cero",
    "Validar salario ingresado no valido que el texto ingresado no sea vacio"
  );

  console.assert(
    validarSalarioIngresado(0) ===
      "Debe ingresar al menos un digito mayor a cero",
    "Validar salario ingresado no valido que el texto ingresado no sea cero"
  );

  console.assert(
    validarSalarioIngresado(-6) ===
      "Debe ingresar un numero entero positivo mayor a cero",
    "Validar salario ingresado no valido que el numero ingresado no sea negativo"
  );

  console.assert(
    validarSalarioIngresado(2.3) ===
      "Debe ingresar un numero entero positivo mayor a cero",
    "Validar salario ingresado no valido que el numero ingresado no sea decimal"
  );

  console.assert(
    validarSalarioIngresado("asd135q.,/") ===
      "Este campo solo acepta numeros enteros positivos mayores a cero",
    "Validar salario ingresado no pudo validar que sean solo numeros los ingresados"
  );
  
}

probarValidarSalarioIngresado();
