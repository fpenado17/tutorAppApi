import ubicacionModel from "../../models/mapas/ubicacion.model.js";
import { BaseRepository } from "../baseRepository.js";

class UbicacionRepository extends BaseRepository {
  constructor() {
    super(ubicacionModel);
  }
}

export default new UbicacionRepository();
