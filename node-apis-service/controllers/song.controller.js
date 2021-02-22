const SongModel = require('./../models/song.model');
const randomNumberGenerator =  require('./../helpers/randomNumberGenerator');
const randomStringGenerator = require('./../helpers/randomStringGenerator');
const axios = require('axios');
// @desc Create Song
// @route POST /api/v1/songs
// @access Public
const createSong = async (req, res) => {
    try {
        const formData = new FormData();
        formData.append('file', req.files);

        const response = await axios.post(process.env.PYTHON_SERVICE_URI, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
         });

        // Create song
        const song = await SongModel.create({
            name: randomStringGenerator(6),
            singerName: randomStringGenerator(6),
            mood: randomStringGenerator(6),
            album: randomStringGenerator(6),
            ocasion: randomStringGenerator(6),
            year: randomNumberGenerator(2, 6),
            genre: response.data.data,
        });

        res.status(200).json({ 
           success: true, 
           msg: "successfully one song created",
           data: song 
        });  
    } catch (err) {
        console.error(err.stack);
        res.status(400).json({ 
            success: false, 
            msg: err.message,
            data: null 
        });  
    }
}

module.exports = {
    createSong
}