import informacionGeneralModel from "../../models/general/informacionGeneral.model.js";
import { BaseRepository } from "../baseRepository.js";

class InformacionGeneralRepository extends BaseRepository {
  constructor() {
    super(informacionGeneralModel);
  }
}

export default new InformacionGeneralRepository();
