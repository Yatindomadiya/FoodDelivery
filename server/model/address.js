const mongoose = require('mongoose')


const addresShema = new mongoose.Schema({
    Fname: {
        type: String,
        require: true
    },
    Lname: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Street: {
        type: String,
        require: true
    },
    City: {
        type: String,
        require: true
    },
    Stat: {
        type: String,
        require: true
    },
    Zip: {
        type: Number,
        require: true
    },
    Country: {
        type: String,
        require: true
    },
    Phone: {
        type: Number,
        require: true
    }

})
const addresModel = mongoose.model("adress", addresShema)

module.exports = addresModel;