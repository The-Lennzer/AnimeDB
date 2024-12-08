const express = require('express');
const homeController = require('../Controllers/animeController.js');

const router = express.Router();

router.get('/api/anime', homeController.getAnimeDetails);

module.exports = router;