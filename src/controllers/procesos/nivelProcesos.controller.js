import nivelProcesosRespositories from "../../respositories/procesos/nivelProcesos.respositories.js";

export const getNivelProcesos = async(req, res)=>{
  const consulta = await nivelProcesosRespositories.findMany(req.query);
  res.json(consulta);
}