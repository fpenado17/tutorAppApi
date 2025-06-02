import informacionGeneralRespositories from "../../respositories/general/informacionGeneral.respositories.js";

export const getInformacionGeneral = async(req, res)=>{
  const informacion = await informacionGeneralRespositories.findMany(req.query);
  res.json(informacion);
}