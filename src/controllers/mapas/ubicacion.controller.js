import ubicacionRespositories from "../../respositories/mapas/ubicacion.respositories.js";

export const getUbicaciones = async(req, res)=>{
  const consulta = await ubicacionRespositories.findMany(req.query);
  res.json(consulta);
}