const { Schema, model } = require("mongoose");

const bookmarkSchema = new Schema({
  Title: {type:String,required:true},
  Quantity: {type:Number,required:true},
  Priority: {type:Number,required:true},
  Description: {type:String,required:true},
  productId:{type:String}
},{
    timestamps:true
});


const BookmarkModel = model("bookmark", bookmarkSchema);

module.exports = {BookmarkModel};