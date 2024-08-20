const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://yatindomadiya:yatin2024@cluster0.n948bmz.mongodb.net/fooddelivery?retryWrites=true&w=majority&appName=Cluster0');
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
