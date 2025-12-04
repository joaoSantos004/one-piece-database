const express = require('express');
const router = express.Router();

const characterRoutes = require('./characterRoutes');
const locationRoutes = require('./locationRoutes');
const organizationRoutes = require('./organizationRoutes');
const devilFruitRoutes = require('./devilFruitRoutes');
const hakiRoutes = require('./hakiRoutes');
const animeRoutes = require('./animeRoutes');
const episodeRoutes = require('./episodeRoutes');
const mangaRoutes = require('./mangaRoutes');
const chapterRoutes = require('./chapterRoutes');
const sagaRoutes = require('./sagaRoutes');
const storyArcRoutes = require('./storyArcRoutes');
const viewRoutes = require('./viewRoutes');
const procedureRoutes = require('./procedureRoutes');


router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the One Piece API' });
});

router.use('/characters', characterRoutes);
router.use('/locations', locationRoutes);
router.use('/organizations', organizationRoutes);
router.use('/devilfruits', devilFruitRoutes);
router.use('/haki', hakiRoutes);
router.use('/anime', animeRoutes);
router.use('/episodes', episodeRoutes);
router.use('/manga', mangaRoutes);
router.use('/chapters', chapterRoutes);
router.use('/sagas', sagaRoutes);
router.use('/storyarcs', storyArcRoutes);
router.use('/views', viewRoutes);
router.use('/procedures', procedureRoutes);

module.exports = router;
