const SiteController = require('../controllers/SiteController');
const express = require('express');
const router = express.Router();

router.get('/login',SiteController.login);
router.get('/',SiteController.home);

module.exports = router;