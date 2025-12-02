const express = require('express');
const controller = require('../controllers/episodeController');

const router = express.Router();

router.post('/', controller.createEpisode);
router.get('/', controller.getEpisodes);
router.get('/:id', controller.getEpisodeById);
router.put('/:id', controller.updateEpisode);
router.delete('/:id', controller.deleteEpisode);

module.exports = router;
