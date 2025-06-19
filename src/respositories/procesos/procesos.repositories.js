import procesosModel from "../../models/procesos/procesos.model.js";
import { BaseRepository } from "../baseRepository.js";

class ProcesosRepository extends BaseRepository {
  constructor() {
    super(procesosModel, "busqueda");
  }
}

export default new ProcesosRepository();
