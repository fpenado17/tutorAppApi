import catTipoUbicacionRespositories from "../../respositories/general/catTipoUbicacion.respositories.js";

export const getCatTipoUbicacion = async(req, res)=>{
  const consulta = await catTipoUbicacionRespositories.findMany(req.query);
  res.json(consulta);
}