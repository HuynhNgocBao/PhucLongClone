const express = require('express');
const router = express.Router();
const TeaController = require('../controllers/TeaController');

router.get('/itinerary', TeaController.itinerary);

module.exports = router;