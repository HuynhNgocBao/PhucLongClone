const SiteController = require('../controllers/SiteController');
const express = require('express');
const router = express.Router();

router.get('/login',SiteController.login);
router.get('/signup',SiteController.signup);
router.post('/save',SiteController.save);
router.get('/',SiteController.home);

module.exports = router;