var express = require('express');
var router = express.Router();

var script_controller = require('../controllers/scriptController');

// controller that defines the rendering of character pages.
router.get('/:name', script_controller.script_to_generate);

module.exports = router;
