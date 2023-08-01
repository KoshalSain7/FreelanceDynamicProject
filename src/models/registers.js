const mongoose = require("mongoose");

const employee_schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }

})

const Register = new mongoose.model("Register", employee_schema);

module.exports = Register; 