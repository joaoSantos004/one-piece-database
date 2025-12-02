const { Organization, Character } = require('../models');

// CREATE
exports.createOrganization = async (req, res) => {
  try {
    const org = await Organization.create(req.body);
    res.status(201).json(org);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create organization' });
  }
};

// READ ALL
exports.getOrganizations = async (_req, res) => {
  try {
    const orgs = await Organization.findAll();
    res.json(orgs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch organizations' });
  }
};

// READ ONE (with members)
exports.getOrganizationById = async (req, res) => {
  try {
    const org = await Organization.findByPk(req.params.id, {
      include: [{ model: Character }],
    });

    if (!org) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    res.json(org);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch organization' });
  }
};

// UPDATE
exports.updateOrganization = async (req, res) => {
  try {
    const org = await Organization.findByPk(req.params.id);
    if (!org) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    await org.update(req.body);
    res.json(org);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update organization' });
  }
};

// DELETE
exports.deleteOrganization = async (req, res) => {
  try {
    const org = await Organization.findByPk(req.params.id);
    if (!org) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    await org.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete organization' });
  }
};
