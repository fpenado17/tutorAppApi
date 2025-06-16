import procesosRepositories from "../../respositories/procesos/procesos.repositories.js";

export const getProcesos = async(req, res)=>{
  const consulta = await procesosRepositories.findMany(req.query);
  res.json(consulta);
}

export const actualizarBusqueda = async({data}) => {
   await procesosRepositories.update(
      { codigo: data },
      { $inc: { busqueda: 1 } }
    );
}