const mongoose = require("mongoose");
const Detail = require("../models/detail");
const Slider = require("../models/slider");
const Service = require("../models/service");
const banner2 = require("../models/banner2");
const banner3 = require("../models/banner3");
const Registers = require("../models/registers");

mongoose.connect("mongodb://localhost/website_tut",


    // This is for adding labels and links dynamically 

    // Detail.create({
    //     brandName: "KS IT Solutions",
    //     brandIconUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sZncYwbgBP1bGZaRfS6f1gHaHa%26pid%3DApi&f=1&ipt=1c70d7ff7801762a9e7882b9236b95239a03d7ba85a97fef8fa24e180ccc0a33&ipo=images",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "About",
    //             url: "/about"
    //         }
    //     ]
    // })

    // This Is for using the title and sub-titles dynamically with images(dynamically)

    // Slider.create([
    //     {
    //         title: "Cycle for 1st",
    //         subTitle: "Use Cycle For Good Health",
    //         imageUrl: "/static/images/pic1.png"
    //     },
    //     {
    //         title: "Koshal Sain",
    //         subTitle: "Fold Your Hands In Front Of Them",
    //         imageUrl: "/static/images/pic.png",
    //         class: "active"
    //     },
    //     {
    //         title: "Cycle for 2nd",
    //         subTitle: "Use Cycle For Good Health",
    //         imageUrl: "/static/images/pic1.png"
    //     }
    // ])
    // Service.create([
    //     {
    //         icon: "fa-solid fa-code fa-beat",
    //         serviceTitle: "BDSM",
    //         serviceSubtitle: "Cruel",
    //         checkUrl: "/check/bdsm",
    //         SupportUrl: "/support/bdsm"
    //     },
    //     {
    //         icon: "fa-solid fa-code",
    //         serviceTitle: "Gbang",
    //         serviceSubtitle: "Crowded",
    //         checkUrl: "/check/gbang",
    //         SupportUrl: "/support/gbang"
    //     },
    //     {
    //         icon: "fa-solid fa-code",
    //         serviceTitle: "Indian",
    //         serviceSubtitle: "fav.",
    //         checkUrl: "/check/indian",
    //         SupportUrl: "/support/indian"
    //     }
    // ])

    // banner2.create({
    //     title: "Come And Dance",
    //     subtitle: "Book Fast And Get In fast",
    //     image: "/Users/WEB-DEV/NODEJS/Project_5/public/images/rabbit.jpg"
    // })

    // banner3.create({
    //     title: "Come And Dance",
    //     subtitle: "Book Fast And Get In fast",
    //     image: "/static/images/pic1.png"
    // })







).then(() => {
    console.log("Connected DB");
}).catch((err) => {
    console.log(err);
})