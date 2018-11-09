const mongoose = require('mongoose');

// @ts-ignore
const videoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    srcUrl: {type: String, required: true},
    nombre: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = mongoose.model('Video', videoSchema);