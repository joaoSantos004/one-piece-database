const express = require('express');
const controller = require('../controllers/hakiController');

const router = express.Router();

router.post('/', controller.createHaki);
router.get('/', controller.getHakiTypes);
router.get('/:id', controller.getHakiById);
router.put('/:id', controller.updateHaki);
router.delete('/:id', controller.deleteHaki);

module.exports = router;
