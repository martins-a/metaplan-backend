const express = require('express');
const metaController = require('../controllers/metaController');

const router = express.Router();

router.get('/', metaController.getAllGoals);

module.exports = router;