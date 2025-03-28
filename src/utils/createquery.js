const createQuery = (tabla, filtros) => {
  
  if (typeof tabla !== "string" || tabla.trim() === "") {
    throw new Error("El nombre de la tabla debe ser una cadena válida.");
  }

  
  const camposPermitidos = [ "precio", "stock", "categoria", "metal"];

  
  let consulta = `SELECT * FROM ${tabla} WHERE 1=1`;
  let valores = [];

  
  Object.entries(filtros).forEach(([campo, valor]) => {
    if (!camposPermitidos.includes(campo)) {
      throw new Error(`El campo "${campo}" no está permitido.`);
    }
    valores.push(valor);
    consulta += ` AND ${campo} = $${valores.length}`;
  });

  return { consulta, valores };  
};

export default createQuery;

