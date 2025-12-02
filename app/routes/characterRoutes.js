const express = require('express');
const controller = require('../controllers/characterController');

const router = express.Router();

router.post('/', controller.createCharacter);
router.get('/', controller.getCharacters);
router.get('/:id', controller.getCharacterDetails);
router.put('/:id', controller.updateCharacter);
router.delete('/:id', controller.deleteCharacter);

module.exports = router;
