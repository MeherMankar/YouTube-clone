const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

router.post('/:videoId', async (req, res) => {
    const { content } = req.body;
    const newComment = new Comment({
        videoId: req.params.videoId,
        userId: req.user.id,
        content,
    });
    
    await newComment.save();
    res.status(201).json(newComment);
});

module.exports = router;
