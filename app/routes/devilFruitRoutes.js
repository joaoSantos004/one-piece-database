const express = require('express');
const controller = require('../controllers/devilFruitController');

const router = express.Router();

router.post('/', controller.createDevilFruit);
router.get('/', controller.getDevilFruits);
router.get('/:id', controller.getDevilFruitById);
router.put('/:id', controller.updateDevilFruit);
router.delete('/:id', controller.deleteDevilFruit);

module.exports = router;
