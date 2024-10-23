const express = require('express');
const multer = require('multer');
const Video = require('../models/Video');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('video'), async (req, res) => {
    const { title, description } = req.body;
    const newVideo = new Video({
        title,
        description,
        url: req.file.path,
        userId: req.user.id // Assuming user ID is available in the request after authentication.
    });
    
    await newVideo.save();
    res.status(201).json(newVideo);
});

module.exports = router;
