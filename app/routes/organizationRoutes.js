const express = require('express');
const controller = require('../controllers/organizationController');

const router = express.Router();

router.post('/', controller.createOrganization);
router.get('/', controller.getOrganizations);
router.get('/:id', controller.getOrganizationById);
router.put('/:id', controller.updateOrganization);
router.delete('/:id', controller.deleteOrganization);

module.exports = router;
