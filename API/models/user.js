// @ts-nocheck
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    username: {type: String, required: true},
    password: {type: String, required: true}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);