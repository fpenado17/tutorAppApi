import { _getFilterFromQueryParams } from "../common/utils/fuctions.js";

export class BaseRepository {
  constructor(model, defaultTopField = null) {
    this.model = model;
    this.defaultTopField = defaultTopField;
  }

  async findOne(query, projection = null, options = {}) {
    try {
      const filters = _getFilterFromQueryParams(query)
      return await this.model.findOne(filters, projection, options);
    } catch (err) {
      throw new Error(
        `[findOne] Error en ${this.model.modelName}: ${err.message}`
      );
    }
  }

  async findMany(query, options = {}) {
    try {
      const filters = _getFilterFromQueryParams(query)

      let projectionFields = null;
      if (query.fields) {
        projectionFields = query.fields.split(',').join(' ');
      }

      let mongoQuery = this.model.find(filters, projectionFields, options);

      // TOP = sort busqueda desc + limit
      if (query.top) {
        const topNum = parseInt(query.top);
        if (!isNaN(topNum)) {
          const sortField = query.topBy || this.defaultTopField;
          if (!sortField) {
            throw new Error(
              `No se especificó 'topBy' y no hay defaultTopField definido en ${this.model.modelName}`
            );
          }
          mongoQuery = mongoQuery.sort({ [sortField]: -1 }).limit(topNum);
        }
      } else {
        // sort ?sort=campo1,-campo2
        if (query.sort) {
          const sortFields = {};
          query.sort.split(',').forEach(field => {
            if (field.startsWith('-')) {
              sortFields[field.substring(1)] = -1;
            } else {
              sortFields[field] = 1;
            }
          });
          mongoQuery = mongoQuery.sort(sortFields);
        }

        // limit
        if (query.limit) {
          const limitNum = parseInt(query.limit);
          if (!isNaN(limitNum)) {
            mongoQuery = mongoQuery.limit(limitNum);
          }
        }

        // skip
        if (query.skip) {
          const skipNum = parseInt(query.skip);
          if (!isNaN(skipNum)) {
            mongoQuery = mongoQuery.skip(skipNum);
          }
        }
      }

      return await mongoQuery;
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
