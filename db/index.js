// Database connection an object handler

// loading all repositories
// const repos = require("./repos");
const shalabahter = require('./repo/Shalabahter');

// Extends db object to include products repos
const initOptions = {
  // query(e) {
  //   console.log("(db) QUERY:", e.query);
  // },
  extend(obj, dc) {
    // obj.products = new repos.Products(obj, pgp);
    obj.shalabahter = new shalabahter(obj, pgp);
  }
};

// Loading and initializing the library:
const pgp = require('pg-promise')(initOptions);

// For debuging
const monitor = require('pg-monitor');
monitor.attach(initOptions);
monitor.setTheme('matrix');

// Preparing the connection details:
// const conn =
//   process.env.DB +
//   '://' +
//   process.env.DB_USER +
//   ':@' +
//   process.env.DB_HOST +
//   ':' +
//   process.env.DB_PORT +
//   '/' +
//   process.env.DB_INITIAL;

const conn = {
  // database: process.env.DB,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
};

// Creating a new database instance from the connection details:
const db = pgp(process.env.DATABASE_URL || conn);

// Exporting the database object for shared use:
module.exports = db;
