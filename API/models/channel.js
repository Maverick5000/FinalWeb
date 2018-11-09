const mongoose = require('mongoose');

// @ts-ignore
const channelSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    videos: {type: [String]}
});

module.exports = mongoose.model('Channel', channelSchema);