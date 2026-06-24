const mongoose = require('mongoose');


async function connectDB() {
        await mongoose.connect("mongodb+srv://yt_backend:p30qpTS8xPOdFVyh@learnbackend.zu9zl26.mongodb.net/halley")    

        console.log("connected to DB")
}

module.exports = connectDB;