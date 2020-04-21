// RESTful api functions

/**
 * @description extend database (db) object
 * @author Ivan :)
 * @class Shalabahter
 */
class Shalabahter {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;
  }

  getAll() {
    return this.db.any('SELECT * FROM shalabahter ORDER BY id');
  }

  getOne(id) {
    return this.db.one('SELECT * FROM shalabahter WHERE id = $1', id);
  }

  deleteOne(id) {
    return this.db.one(
      'DELETE FROM shalabahter WHERE id = $1 RETURNING id',
      id
    );
  }

  deleteAll() {
    return this.db.any('TRUNCATE shalabahter RESTART IDENTITY');
  }

  insert(data) {
    return this.db.one(
      'INSERT INTO shalabahter(pitanje, odgovori) VALUES($1, $2) RETURNING id',
      data
    );
    // data, shalabahter => shalabahter.id);
  }

  update(data) {
    return this.db.one(
      'UPDATE shalabahter SET pitanje = $2, odgovori = $3 WHERE id = $1 RETURNING id',
      data
    );
  }
}

module.exports = Shalabahter;
