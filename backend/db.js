const mongoose = require('mongoose');

const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/MERN_EXAM").then(() => {
        console.log("Connected");
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {connectDB};