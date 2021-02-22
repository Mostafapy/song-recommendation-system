const express = require('express');
const router = express.Router();

const {
   createSong,
} = require('../controllers/song.controller');

router
   .route('/')
   .post(createSong);

module.exports = router;