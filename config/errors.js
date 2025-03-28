const ERRORS = [
  { code: "23502", type: "db", status: 400, message: "El campo destino o presupuesto no puede estar vacío" },
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
  { code: "40800", type: "timeout", status: 408, message: "Tiempo de espera agotado en la solicitud" },
  { code: "42900", type: "rate_limit", status: 429, message: "Demasiadas solicitudes, intente más tarde" },
  { code: "40500", type: "method", status: 405, message: "Método HTTP no permitido para esta ruta" },
  { code: "41500", type: "unsupported_media", status: 415, message: "Tipo de contenido no soportado" },
  { code: "40402", type: "route", status: 404, message: "Esta ruta no existe" }
];

  
  
  export default ERRORS;