const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
});

module.exports = mongoose.model('Playlist', PlaylistSchema);
