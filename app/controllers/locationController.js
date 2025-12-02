const { Location, Character } = require('../models');

// CREATE
exports.createLocation = async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.status(201).json(location);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create location' });
  }
};

// READ ALL
exports.getLocations = async (_req, res) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch locations' });
  }
};

// READ ONE (with characters)
exports.getLocationById = async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id, {
      include: [{ model: Character }],
    });

    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }

    res.json(location);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch location' });
  }
};

// UPDATE
exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }

    await location.update(req.body);
    res.json(location);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update location' });
  }
};

// DELETE
exports.deleteLocation = async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }

    await location.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete location' });
  }
};
