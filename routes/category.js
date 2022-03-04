const CategoryController = require('../controllers/CategoryController');
const express = require('express');
const router = express.Router();

router.post('/:slug/save', CategoryController.save);
router.get('/:slug/create', CategoryController.create);
router.get('/:slug',CategoryController.show);

module.exports = router;