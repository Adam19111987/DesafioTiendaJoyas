const prepararHateoas =  async(entity, data) => {
  const result = data.map((d) => {
    return {
      name : d.nombre,
      stock : d.stock,
      precio : d.precio,
      href : `/${entity}/${d.id}`,
    
    }


  }).slice(0, 6)

const total = data.length;

const HATEOTAS = {
    total, 

    result
}
return HATEOTAS
}

export {prepararHateoas}