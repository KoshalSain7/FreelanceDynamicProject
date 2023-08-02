const express = require("express");
const bodyParser = require("body-parser");
const { route } = require("express/lib/application");
const routes = new express.Router;
const Detail = require("../models/detail");
const detail = require("../models/detail");
const Slider = require("../models/slider");
const Service = require("../models/service");
const Contact = require("../models/contact");
const banner2 = require("../models/banner2");
const banner3 = require("../models/banner3");
const Register = require("../models/registers");
const hbs = require("hbs");
const axios = require('axios');


routes.use(bodyParser.urlencoded({
    extended: false
}));

routes.get('/', async (req, res) => {

    const details = await Detail.findOne({ "_id": "64bb5a2ee0e973caa3324b88" });
    const slides = await Slider.find();
    const services = await Service.find();
    const banner_2 = await banner2.find();
    const banner_3 = await banner3.find();

    console.log();
    res.render("index", {
        details: details,
        slides: slides,
        services: services,
        banner_2: banner_2,
        banner_3: banner_3
    });
})

routes.get('/gallery', async (req, res) => {

    // const details = await Detail.findOne({ "_id": "64bb5a2ee0e973caa3324b88" });

    // res.render("gallery", {
    //     details: details
    // });


//     const API_KEY = '47e8884e4fmsh726953739cfe4cdp157c84jsn33f06552c83a';

//    const response = await axios.get('https://inshortsapi.vercel.app/news?category=sports', {
//         headers: {
//             "Authorization": API_KEY
//         }
//     }).then((response) => {
//         // console.log(response.data);
//         res.send(response.data);
//     }).catch((error) => {
//         console.log(error);
//     });

// const API_KEY = '47e8884e4fmsh726953739cfe4cdp157c84jsn33f06552c83a';

//    const response = await axios.get('https://cyberboysumanjay.herokuapp.com/gaana/populartracks', {
//         headers: {
//             "Authorization": API_KEY
//         }
//     }).then((response) => {
//         // console.log(response.data);
//         res.send(response.data);
//     }).catch((error) => {
//         console.log(error);
//     });
const API_KEY = '47e8884e4fmsh726953739cfe4cdp157c84jsn33f06552c83a';
// const response = await axios.get('https://sv443.net/jokeapi/v2/joke/Miscellaneous?type=twopart&amount=10', {
   const response = await axios.get('https://sv443.net/jokeapi/v2/joke/coding?type=single', {
   
        headers: {
            "Authorization": API_KEY
        }
    }).then((response) => {
        // console.log(response.data);
        res.send(response.data);
        
    }).catch((error) => {
        console.log(error);
    });





})

routes.post("/process-conatct-form", async (req, res) => {
    try {
        const data = await Contact.create(req.body);
        console.log(data);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
})
routes.get("/register", async (req, res) => {
    res.render('register')
})


routes.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirm_password;

        if (password == cpassword) {
            const registerEmployee = new Register({
                username: req.body.username,
                email: req.body.email,
                gender: req.body.gender,
                age: req.body.age,
                password: req.body.password,
                confirmpassword: req.body.confirm_password

            })
            const registered = await registerEmployee.save();
            res.status(200).redirect("/");

        } else {
            res.send(" Password And Confirm Password Are Different")
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = routes;
