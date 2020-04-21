/**
 * Post routes
 */

// Express router
const router = require('express').Router();

// Auth guard
const { privateRoute } = require('@routes/middleware');

// Async wrapper
const { asyncWrapper } = require('@routes/util');

// Data controler
const { DataController } = require('@routes/controllers');

// Gets posts
router.get('/', asyncWrapper(DataController.getAll));

// ------------------------------------------------------------
// Private routes
// ------------------------------------------------------------
router.all('*', privateRoute);

// Veryfi credentials for all routes
router.get('/:id', asyncWrapper(DataController.getOne));

// Insert posts
router.post('/', asyncWrapper(DataController.insert));
router.put('/', asyncWrapper(DataController.update));

// Delete posts
router.delete('/', asyncWrapper(DataController.deleteAll));
router.delete('/:id', asyncWrapper(DataController.deleteOne));

module.exports = router;
