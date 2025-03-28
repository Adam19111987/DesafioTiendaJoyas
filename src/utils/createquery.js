const createQuery = (tabla, filtros) => {
  
  if (typeof tabla !== "string" || tabla.trim() === "") {
    throw new Error("El nombre de la tabla debe ser una cadena válida.");
  }

  
  const camposPermitidos = ["precio", "categoria", "metal"];

  
  let consulta = `SELECT * FROM ${tabla} WHERE 1=1`;
  let valores = [];

  
  Object.entries(filtros).forEach(([campo, valor]) => {
  
    if (!camposPermitidos.includes(campo) && campo !== "precio_max" && campo !== "precio_min") {
      throw new Error(`El campo "${campo}" no está permitido.`);
    }

    if (campo === "precio_max") {
      consulta += ` AND precio <= $${valores.length + 1}`;
      valores.push(valor);
    } else if (campo === "precio_min") {
      consulta += ` AND precio >= $${valores.length + 1}`;
      valores.push(valor);
    } else {
     
      consulta += ` AND ${campo} = $${valores.length + 1}`;
      valores.push(valor);
    }
  });

  return { consulta, valores };
};

export default createQuery;