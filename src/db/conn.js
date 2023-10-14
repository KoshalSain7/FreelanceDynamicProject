const mongoose = require("mongoose");


const dbUrl = process.env.MONGO_URL

mongoose.connect(dbUrl, {
    dbName: "website_tut",
}
).then(() => {
    console.log("Connected DB");
}).catch((err) => {
    console.log(err);
})
