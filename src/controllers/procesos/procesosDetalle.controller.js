import procesosDetalleRespositories from "../../respositories/procesos/procesosDetalle.respositories.js";

export const getProcesosDetalle = async(req, res)=>{
  const consulta = await procesosDetalleRespositories.findMany(req.query);
  res.json(consulta);
}