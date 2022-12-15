const express=require("express");
const connect = require("./Config/db");
const dotenv= require('dotenv').config();
const cors=require("cors");
const shoppingApp=require("./Router/shopping.router")




//...........................
const app=express();
app.use(cors());
app.use(express.json());



//............................
app.use("/",shoppingApp)



//............................
app.get("/",(req,res)=>{
    res.status(200).send("Home Page")
})




//.............................
const PORT=process.env.PORT || 8080;
app.listen(PORT,async()=>{
    try{
        await connect;
        console.log("Connected to the server")
    }
    catch(err){
        console.log(err)
    }
    console.log(`Server start at port no =>http://localhost:${PORT}/`);
})