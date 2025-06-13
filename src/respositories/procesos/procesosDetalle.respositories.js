import procesosDetalleModel from "../../models/procesos/procesosDetalle.model.js";
import { BaseRepository } from "../baseRepository.js";

class ProcesosDetalleRepository extends BaseRepository {
  constructor() {
    super(procesosDetalleModel);
  }
}

export default new ProcesosDetalleRepository();
