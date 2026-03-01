const express = require('express');
const { connectDB } = require('./db');
const cors = require('cors');
const mroute = require('./router/mroute');

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/movie",mroute);

app.listen(4000,()=>{
    console.log("Running");
})