'use strict';

/**
 * Class Model extends to players & team models using Mongo
 */

class Model {

  /**
   * Model constructor takes in schema
   * @param schema 
   */

  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Gets a record based on ID
   * Then returns record's data
   * @param _id 
   * @returns
   */

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }

  /**
   * Posts a new record
   * @param record 
   */
  
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  /**
   * Updates a record based on it's id
   * @param _id 
   * @param record 
   * 
   * Updates record data
   * @returns
   */

  put(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }

  /**
   * Deletes record based on ID
   * @param _id 
   * 
   * Deletes record
   * @returns
   */

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Model;
