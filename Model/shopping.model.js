const { Schema, model } = require("mongoose");

const shoppingSchema = new Schema({
  Title: {type:String,required:true},
  Quantity: {type:Number,required:true},
  Priority: {type:Number,required:true},
  Description: {type:String,required:true},
},{
    timestamps:true
});


const ShoppingModel = model("shopping", shoppingSchema);

module.exports = {ShoppingModel};