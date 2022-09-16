export const validarTodosLosCampos = (listaDeCampos) => {
  let isValido = true;
  listaDeCampos.forEach(({ valor, fnSetError }) => {
    isValido = validacionRequeridos(valor, fnSetError);
    if (!isValido) {
      return isValido;
    }
  });
  return isValido;
};

export const validacionRequeridos = (valor, funcionSetError) => {
  funcionSetError(valor === "" ? "El campo es requerido" : "");
  return !(valor === "");
};
