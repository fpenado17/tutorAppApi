import informacionGeneralRespositories from "../../respositories/general/informacionGeneral.respositories.js";

export const getInformacionGeneral = async(req, res)=>{
  const consulta = await informacionGeneralRespositories.findMany(req.query);
  res.json(consulta);
}