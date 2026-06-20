const express = require('express');
const router = express.Router();
const controller = require('../controllers/customersController')
const authMiddleware = require('../middleware/authMiddleware');

router.get('/',controller.getAllCustomers);
router.get('/:id',controller.getOneCustomer);
router.post('/',authMiddleware,controller.createCustomer);
router.put('/:id',authMiddleware,controller.updateCustomer);
router.delete('/:id',authMiddleware,controller.deleteCustomer);

module.exports = router;