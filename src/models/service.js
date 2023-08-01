const mongoose = require("mongoose");

const Service = mongoose.Schema({
    icon: String,
    serviceTitle: String,
    serviceSubtitle: String,
    checkUrl: String,
    SupportUrl: String
})

module.exports = mongoose.model('service', Service);