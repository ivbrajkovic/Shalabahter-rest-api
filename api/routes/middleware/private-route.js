/**
 * Authentication middleware
 */

// Debug
const debug = new require('debug')('shalabahter:middleware:privateRoute');

// Auth service
const { AuthService } = require('@api/services');

/**
 * Authenticate express middleware
 @param {*} reg Client request
 @param {*} res Client response
 @param {*} next Call next middlewatr
 */
module.exports = async (req, res, next) => {
  try {
    const decoded = await AuthService.verifyJWT(req);
    debug(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log('error', error);
    next(error);
  }
};
