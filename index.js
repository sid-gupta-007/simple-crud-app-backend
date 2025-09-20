const express = require('express');

const mongoose = require('mongoose');
const Product  =require('./models/product.model.js');
const ProductRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes///middleware
app.use("/api/products",ProductRoute);



app.get('/',(req,res)=>{
    res.send("hello from node api");
});


mongoose.connect("mongodb+srv://sid20060329_db_user:iiYgFh4ZmM1evwBX@backenddb.b9plpln.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("database is connected!");
    app.listen(3000,()=>{
    console.log("server is running on port 3000.");
});

})
.catch(()=>{
    console.log("faileed to connect!");
});