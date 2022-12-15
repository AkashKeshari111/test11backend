const { Schema, model } = require("mongoose");

const bookmarkSchema = new Schema({
  Title: {type:String,required:true},
  Quantity: {type:String,required:true},
  Priority: {type:String,required:true},
  Description: {type:String,required:true},
  productId:{type:String}
},{
    timestamps:true
});


const BookmarkModel = model("bookmark", bookmarkSchema);

module.exports = {BookmarkModel};