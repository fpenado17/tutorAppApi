import nivelProcesosModel from "../../models/procesos/nivelProcesos.model.js";
import { BaseRepository } from "../baseRepository.js";

class NivelProcesosRepository extends BaseRepository {
  constructor() {
    super(nivelProcesosModel);
  }
}

export default new NivelProcesosRepository();
