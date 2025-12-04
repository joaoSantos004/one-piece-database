const express = require('express');
const controller = require('../controllers/procedureController');

const router = express.Router();

router.get('/high-bounties', controller.getHighBountyCharacters);

module.exports = router;