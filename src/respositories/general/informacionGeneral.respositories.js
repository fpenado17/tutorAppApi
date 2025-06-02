import informacionGeneralModel from "../../models/general/informacionGeneral.model.js";
import { BaseRepository } from "../baseRepository.js";

class InformacionGeneralRepository extends BaseRepository {
  constructor() {
    super(informacionGeneralModel, "busqueda");
  }
}

export default new InformacionGeneralRepository();
