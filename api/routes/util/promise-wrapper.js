// Database recquest and client respond handler

const debug = require('debug')('shalabahter:handler');

module.exports = {
  jsonApi: (res, handler) => {
    handler()
      .then(data => {
        // debug(data);
        res.json(data);
      })
      .catch(err => {
        debug(err);
        res.json(err);
      });
  }
};
