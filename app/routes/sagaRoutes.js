const express = require('express');
const controller = require('../controllers/sagaController');

const router = express.Router();

router.post('/', controller.createSaga);
router.get('/', controller.getSagas);
router.get('/:id', controller.getSagaById);
router.put('/:id', controller.updateSaga);
router.delete('/:id', controller.deleteSaga);

module.exports = router;
