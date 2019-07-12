const mongoose = require('mongoose');
const { Schema } = mongoose;

var userSchema = new Schema({
    googleId: String,
    credits: {
        type: Number,
        default: 0
    }
});

mongoose.model('users', userSchema);