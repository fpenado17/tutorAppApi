import procesosModel from "../../models/procesos/procesos.model.js";
import { BaseRepository } from "../baseRepository.js";

class ProcesosRepository extends BaseRepository {
  constructor() {
    super(procesosModel);
  }
}

export default new ProcesosRepository();
