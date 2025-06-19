import logger from "../../common/utils/logger.js";
import { actualizarBusqueda } from "../../controllers/procesos/procesos.controller.js";
import eventBus from "../eventBus.js";

eventBus.on("proceso:actualizar_busqueda", async ({data}) => {
    try{
        await  actualizarBusqueda({data})
        logger.info("Cantidad busqueda actualizado existosamente")
    }catch(error){
        logger.error(error)
    }
})