var express = require('express');
var router = express.Router();

var script_controller = require('../controllers/scriptController');

// Master initial page.
router.get('/', script_controller.index);

module.exports = router;
