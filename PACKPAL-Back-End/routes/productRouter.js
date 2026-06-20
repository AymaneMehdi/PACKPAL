const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, productsController.addProduct);
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.put('/:id', authMiddleware, productsController.updateProduct);
router.delete('/:id', authMiddleware, productsController.deleteProduct);

module.exports = router;
