const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 4040;

const router = require("./routes/main");
const Detail = require("./models/detail");
const Slider = require("./models/slider");
const Service = require("./models/service");
require("./db/conn");

const app = express();

// Using express functions in app and routing 
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('', router);
// How to serve static files
const path = require('path')
app.use('/static', express.static('public'))
// app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use(express.static('public'))

// Setting the view engine and partials
app.set('view engine', 'hbs');
app.set('views', 'views/Partials');
hbs.registerPartials("views/Partials");





// mongoose.connect("mongodb://localhost/website_tut", {
//     // useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     family: 4,

// },
// Detail.create({
//     brandName:"KS IT Solutions"
// })).then(() => {
//     console.log("Connected Successfully")
// }).catch((err) => {
//     console.log(err);
// })



// Alloting Port And Starting The Server
app.listen(port, () => {
    console.log(`Server Is Started At Port No. ${port}`);
})
