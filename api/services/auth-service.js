/**
 * Authorization service
 */

// Debug
const debug = new require('debug')('shalabahter:services:AuthService');

// JWT
const jwt = require('jsonwebtoken');

// Errors
const { errorMessages, ErrorException } = require('@api/errors');

// Authentication class
module.exports = class AuthService {
  // Token exp time
  static jwtExp = process.env.JWT_EXP;

  // Access token secret
  static jwtSecret = process.env.JWT_SECRET;

  /**
   * Async create JWT
   @param {*} obj Objevt uppon witch create JWT
   @returns promise (err, token)
   */
  static createJWT = obj =>
    new Promise((resolve, reject) => {
      jwt.sign(
        obj,
        this.jwtSecret,
        { expiresIn: this.jwtExp },
        (err, token) => {
          if (err) reject(err);
          else resolve(token);
        }
      );
    });

  /**
   * Async verify JWT
   @param {*} req Client request
   @returns Decoded JWT
   */
  static verifyJWT = async req => {
    // Get auth header
    let authHeader = req.headers['authorization'];
    if (!authHeader)
      throw new ErrorException(errorMessages.JWT_TOKEN_NOT_FOUND);

    // Vreify auth header
    if (!authHeader.startsWith('Bearer '))
      throw new ErrorException(errorMessages.JWT_TOKEN_INVALID);

    // Get token from header
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) throw new ErrorException(errorMessages.JWT_TOKEN_NOT_FOUND);

    try {
      // Decode token
      const decoded = jwt.verify(token, this.jwtSecret);

      // Log decoded token
      debug(decoded);

      // Return decoded token
      return decoded;
    } catch (error) {
      throw new ErrorException(
        error.name === jwt.TokenExpiredError.name
          ? errorMessages.JWT_TOKEN_EXPIRED
          : errorMessages.JWT_UNKNOWN
      );
    }
  };
};
