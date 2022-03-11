const express = require('express');
const router = express.Router();
const CoffeeController = require('../controllers/CoffeeController');

router.get('/itinerary', CoffeeController.itinerary);

module.exports = router;