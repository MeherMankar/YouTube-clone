const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true },
});

module.exports = mongoose.model('Comment', CommentSchema);
