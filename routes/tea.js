const express = require('express');
const router = express.Router();
const TeaController = require('../controllers/TeaController');

router.get('/itinerary', TeaController.itinerary);
router.get('/information', TeaController.information);
router.get('/art',TeaController.art);
router.get('/coldbrewtea',TeaController.coldbrewtea);

module.exports = router;