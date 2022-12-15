const { Schema, model } = require("mongoose");

const shoppingSchema = new Schema({
  Title: {type:String,required:true},
  Quantity: {type:String,required:true},
  Priority: {type:String,required:true},
  Description: {type:String,required:true},
},{
    timestamps:true
});


const ShoppingModel = model("shopping", shoppingSchema);

module.exports = {ShoppingModel};