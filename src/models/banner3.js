const mongoose = require("mongoose");

const Banner3 = mongoose.Schema({
    title: String,
    subtitle: String,
    image: String
})

module.exports = mongoose.model('banner3', Banner3);