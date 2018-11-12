const mongoose = require('mongoose');

// @ts-ignore
const channelSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    videos: {type: [String]}
});

module.exports = mongoose.model('Channel', channelSchema);