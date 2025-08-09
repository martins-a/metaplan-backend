const express = require('express');
const metaController = require('../controllers/metaController');

const router = express.Router();

router.get('/', metaController.getAllMetas);
router.delete('/', metaController.deleteMeta);
router.post('/', metaController.addMeta);
router.put('/', metaController.editMeta);

module.exports = router;