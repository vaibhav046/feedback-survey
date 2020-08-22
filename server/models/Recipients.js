const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Recipeients Collections.
 */
var RecipientsSchema = new Schema({
    email: String,
    responded: {
        type: Boolean,
        default: false
    }
});

module.exports = RecipientsSchema