const express = require('express');
const controller = require('../controllers/viewController');

const router = express.Router();

router.get('/character-crew', controller.getCharacterCrewView);

module.exports = router;