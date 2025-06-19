import eventBus from "../../events/eventBus.js";
import procesosDetalleRespositories from "../../respositories/procesos/procesosDetalle.respositories.js";

export const getProcesosDetalle = async(req, res)=>{
  const consulta = await procesosDetalleRespositories.findMany(req.query);
  eventBus.emit('proceso:actualizar_busqueda', {
    data: consulta[0].codigo_proceso
  })
  res.json(consulta);
}