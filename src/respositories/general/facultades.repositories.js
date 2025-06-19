import facultadesModel from "../../models/general/facultades.model.js";
import { BaseRepository } from "../baseRepository.js";

class FacultadesRepository extends BaseRepository {
  constructor() {
    super(facultadesModel);
  }
}

export default new FacultadesRepository();
