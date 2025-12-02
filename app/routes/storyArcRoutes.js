const express = require('express');
const controller = require('../controllers/storyArcController');

const router = express.Router();

router.post('/', controller.createStoryArc);
router.get('/', controller.getStoryArcs);
router.get('/:id', controller.getStoryArcById);
router.put('/:id', controller.updateStoryArc);
router.delete('/:id', controller.deleteStoryArc);

module.exports = router;
