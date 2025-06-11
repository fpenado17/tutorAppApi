import catTipoUbicacionModel from "../../models/general/catTipoUbicacion.model.js";
import { BaseRepository } from "../baseRepository.js";

class CatTipoUbicacionRepository extends BaseRepository {
  constructor() {
    super(catTipoUbicacionModel);
  }
}

export default new CatTipoUbicacionRepository();
