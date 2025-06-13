import facultadesRepositories from "../../respositories/general/facultades.repositories.js";

export const getFacultades = async(req, res)=>{
  const consulta = await facultadesRepositories.findMany(req.query);
  res.json(consulta);
}