const express = require ('express');
const { createCategory, getAllCategories, updateCategory, deleteCategory } = require('../controllers/categoriesController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createCategory);
router.get('/', getAllCategories);
router.put('/:id', authMiddleware, updateCategory);
router.delete('/:id', authMiddleware, deleteCategory);

module.exports = router;