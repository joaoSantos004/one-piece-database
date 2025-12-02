const express = require('express');
const controller = require('../controllers/animeController');

const router = express.Router();

router.post('/', controller.createAnime);
router.get('/', controller.getAnimeList);
router.get('/:id', controller.getAnimeById);
router.put('/:id', controller.updateAnime);
router.delete('/:id', controller.deleteAnime);

module.exports = router;
