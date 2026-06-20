const express = require('express');
const router = express.Router();
const controller = require('../controllers/ordersController.js');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', authMiddleware, controller.createOrder);
router.put('/:id', authMiddleware, controller.updateOrder);
router.delete('/:id', authMiddleware, controller.deleteOrder);

module.exports = router;