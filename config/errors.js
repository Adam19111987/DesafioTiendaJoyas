const ERRORS = [
  
  { code: "23505", type: "db", status: 400, message: "Violación de restricción de unicidad" },
  { code: "42601", type: "db", status: 400, message: "Error de sintaxis en la consulta SQL" },
  { code: "50000", type: "server", status: 500, message: "Internal server error" },
  { code: "50300", type: "server", status: 503, message: "Servicio no disponible, intente más tarde" },
  { code: "40100", type: "auth", status: 401, message: "No autorizado, credenciales inválidas" },
  { code: "40300", type: "auth", status: 403, message: "Prohibido, no tienes permisos para acceder a este recurso" },
  { code: "40400", type: "travel", status: 404, message: "Travel no encontrado" },
  { code: "40401", type: "user", status: 404, message: "Usuario no encontrado" },
  { code: "40000", type: "request", status: 400, message: "Solicitud incorrecta, verifique los parámetros" },
  { code: "42200", type: "validation", status: 422, message: "Error de validación en los datos proporcionados" },
  { code: "40800", type: "timeout", status: 408, message: "Tiempo de espera agotado en la solicitud" }
];

  
  
  export default ERRORS;