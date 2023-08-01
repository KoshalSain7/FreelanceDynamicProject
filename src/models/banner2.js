const mongoose = require("mongoose");

const Banner2 = mongoose.Schema({
    title: String,
    subtitle: String,
    image: String
})

module.exports = mongoose.model('banner2', Banner2);