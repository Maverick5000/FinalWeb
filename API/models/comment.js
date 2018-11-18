const mongoose = require('mongoose');

// @ts-ignore
const commentSchema = mongoose.Schema({
    texto: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    usernombre: {type: String, required: true},
    video: {type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true},
    fecha : { type : Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);