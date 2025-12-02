const express = require('express');
const controller = require('../controllers/locationController');

const router = express.Router();

router.post('/', controller.createLocation);
router.get('/', controller.getLocations);
router.get('/:id', controller.getLocationById);
router.put('/:id', controller.updateLocation);
router.delete('/:id', controller.deleteLocation);

module.exports = router;
