const mongoose = require("mongoose");
const Detail = require("../models/detail");
const Slider = require("../models/slider");
const Service = require("../models/service");
const banner2 = require("../models/banner2");
const banner3 = require("../models/banner3");
const Registers = require("../models/registers");

const dbUrl = "mongodb+srv://koshal777:Pass777@cluster1d.jrgwv9b.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbUrl, {
    dbName: "website_tut",
}
).then(() => {
    console.log("Connected DB");
}).catch((err) => {
    console.log(err);
})
