const CategoryController = require('../controllers/CategoryController');
const express = require('express');
const router = express.Router();

router.get('/item/:slug',CategoryController.item);
router.get('/:slug/create', CategoryController.create);
router.post('/:slug/save', CategoryController.save);
router.get('/:slug',CategoryController.show);

module.exports = router;