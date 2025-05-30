export class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async findOne(filter, projection = null, options = {}) {
    try {
      return await this.model.findOne(filter, projection, options);
    } catch (err) {
      throw new Error(
        `[findOne] Error en ${this.model.modelName}: ${err.message}`
      );
    }
  }

  async findMany(filter = {}, projection = null, options = {}) {
    try {
      return await this.model.find(filter, projection, options);
    } catch (err) {
      throw new Error(
        `[findMany] Error en ${this.model.modelName}: ${err.message}`
      );
    }
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (err) {
      throw new Error(
        `[create] Error en ${this.model.modelName}: ${err.message}`
      );
    }
  }

  async createMany(dataArray) {
    try {
      return await this.model.insertMany(dataArray);
    } catch (err) {
      throw new Error(
        `[createMany] Error en ${this.model.modelName}: ${err.message}`
      );
    }
  }

  async update(filter, update, options = { new: true }) {
    try {
      return await this.model.findOneAndUpdate(filter, update, options);
    } catch (err) {
      throw new Error(
        `[update] Error en ${this.model.modelName}: ${err.message}`
      );
    }
  }

  async updateMany(filter, update) {
    try {
      return await this.model.updateMany(filter, update);
    } catch (err) {
      throw new Error(
        `[updateMany] Error en ${this.model.modelName}: ${err.message}`
      );
    }
  }

  async delete(filter) {
    try {
      return await this.model.findOneAndDelete(filter);
    } catch (err) {
      throw new Error(
        `[delete] Error en ${this.model.modelName}: ${err.message}`
      );
    }
  }

  async deleteMany(filter) {
    try {
      return await this.model.deleteMany(filter);
    } catch (err) {
      throw new Error(
        `[deleteMany] Error en ${this.model.modelName}: ${err.message}`
      );
    }
  }
}
