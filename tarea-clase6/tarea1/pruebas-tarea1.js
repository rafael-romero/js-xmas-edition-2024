function probarValidarNumeroIngresado() {
  console.assert(
    validarNumeroIngresado(0) ===
      "Este campo debe tener al menos un digito mayor a cero",
    "Validar numero ingresado no pudo validar que el texto ingresado no sea vacio"
  );

  console.assert(
    validarNumeroIngresado(-5) ===
      "Este campo solo admite numeros enteros positivos",
    "Validar numero ingresado no pudo validar que el numero ingresado no sea negativo"
  );

  console.assert(
    validarNumeroIngresado(2.7) ===
      "Este campo solo admite numeros enteros positivos",
    "Validar numero ingresado no pudo validar que el numero ingresado no sea decimal"
  );

  console.assert(
    validarNumeroIngresado("ainoubenfw") ===
      "El valor ingresado debe ser un numero entero positivo",
    "Validar numero ingresado no pudo validar que el texto ingresado sea valido"
  );

  console.assert(
    validarNumeroIngresado(2) === "",
    "Validar numero ingresado fallo con un numero valido"
  );
}

probarValidarNumeroIngresado();
