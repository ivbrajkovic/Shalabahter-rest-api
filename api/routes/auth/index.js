/**
 * Auth routes
 */

// Express router
const router = require('express').Router();

// Async wrapper
const { asyncWrapper } = require('@api/routes/util');

// Auth controller
const { AuthController } = require('@root/api/routes/controllers');

// Login user route
router.get('/me', asyncWrapper(AuthController.verifyToken));

// Login user route
router.post('/login', asyncWrapper(AuthController.loginUser));

module.exports = router;
