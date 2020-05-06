/**
 * Auth controller
 */

// Debug
var debug = new require('debug')('shalabahter:controllers:AuthController');

// Errors
const { errorMessages, ErrorException } = require('@api/errors');

// User services
const { AuthService } = require('@api/services');

module.exports = class AuthController {
  /**
   * Login user
   @param {*} user Client req
   @returns {*} User token and status code
   */
  static loginUser = async req => {
    const { user, password } = req.body;
    // console.log('AuthController -> req.body', req.body);

    // Check user
    if (user !== process.env.ADMIN_USER)
      throw new ErrorException(errorMessages.USER_NOT_EXIST);

    // Check password
    if (password !== process.env.ADMIN_PASS)
      throw new ErrorException(errorMessages.USER_PASSWORD_NOT_MATCH);

    // Create json web token
    const token = await AuthService.createJWT({ user });

    // Log status success
    debug(`JWT for ${user} created successfully`);

    // Return user object with token
    return { status: 201, data: { user, token } };
  };

  /**
   * Verify token
   @param {*} user Client req
   @returns {*} User token and status code
   */
  static verifyToken = async req => {
    // Verify json web token
    const decoded = await AuthService.verifyJWT(req);

    // Log status success
    debug(`JWT verified successfully`);

    // Return user object with token
    return { status: 200, data: { ...decoded } };
  };
};
