/**
 * Data controller
 */

const db = require('@db');

module.exports = class DataController {
  /**
   * Get all rows
   */
  static getAll = async () => {
    const data = await db.shalabahter.getAll();
    return { status: 200, data };
  };

  /**
    * Get one row with id
    @param {*} id Id of the row
    */
  static getOne = async req => {
    const id = req.params.id;
    const data = await db.shalabahter.getOne(id);
    return { status: 200, data };
  };

  /**
    * Insert row
    @param {*} data Array of data to insert
    */
  static insert = async req => {
    const dataDb = [];
    dataDb.push(req.body.pitanje);
    dataDb.push(req.body.odgovori);

    const data = await db.shalabahter.insert(dataDb);
    return { status: 200, data };
  };

  /**
    * Update row
    @param {*} data Array of data to update
    */
  static update = async req => {
    // console.log('******************************************');
    // console.log('DataController -> req.body', req.body);
    const dataDb = [];
    dataDb.push(req.body.id);
    dataDb.push(req.body.pitanje);
    dataDb.push(req.body.odgovori);

    const data = await db.shalabahter.update(dataDb);
    return { status: 200, data };
  };

  /**
    * Delete all rwos
    @returns Id of deleted row
    */
  static deleteAll = async () => {
    const data = await db.shalabahter.deleteAll();
    return { status: 200, data };
  };

  /**
    * Delete one row with id
    @param {*} id Id of the row to delete
    @returns Id of deleted row
    */
  static deleteOne = async req => {
    const id = req.params.id;
    const data = await db.shalabahter.deleteOne(id);
    return { status: 200, data };
  };
};
