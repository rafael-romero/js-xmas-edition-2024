function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Debe seleccionar una ciudad",
    "Validar ciudad no valido que haya selecionado una opcion valida"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") ===
      "Debe describir que le gustaria recibir este año",
    "Validar descripcion regalo, no valido que el campo no este vacio"
  );
  console.assert(
    validarDescripcionRegalo(
      "1111111111111111111111111111212121221212121212121212121212121212121212121212121212121212121212121212121212121221212121212121213541653465465416513213213132111111111111111111111111111121212122121212121212121212121212121212121212121212121212121212121212121212121212122121212121212121354165346546541651321321313211111111111111111111111111112121212212121212121212121212121212121212121212121212121212121212121212121212121212212121212121212135416534654654165132132131321111111111111111111111111111212121221212121212121212121212121212121212121212121212121212121212121212121212121221212121212121213541653465465416513213213132"
    ) === "Este campo debe tener menos de 200 caracteres",
    "Validar descripcion regalo, no pudo validar que el campo tenga menos de 200 caracteres"
  );
}


probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
