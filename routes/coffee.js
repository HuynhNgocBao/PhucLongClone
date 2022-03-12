const express = require('express');
const router = express.Router();
const CoffeeController = require('../controllers/CoffeeController');


router.get('/information', CoffeeController.information);
router.get('/itinerary', CoffeeController.itinerary);
router.get('/art',CoffeeController.art);

module.exports = router;