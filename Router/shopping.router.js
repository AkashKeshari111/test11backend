const {Router}=require("express");
const { ShoppingModel } = require("../Model/shopping.model");



const app=Router();


app.get("/shopping",async (req, res) => {

      let {
        page = 1,
        limit = 10,
        sortBy = "id",
        order = "asc",
      
      } = req.query;
      try {
        
          list = await ShoppingModel.find({})
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ [sortBy]: order === "asc" ? 1 : -1 });
        
        const count = await ShoppingModel.find({}).count();
        // console.log(count)
        res
          .status(200)
          .send({ data: list, totalPages: Math.ceil(count / limit) });
      } catch (err) {
        res.status(500).send(err);
      }
    }
  );

  

app.post("/shopping",async(req,res)=>{
 
          const {Title, Quantity,Priority,Description} = req.body;
      
          try {
            const post = new ShoppingModel({
                Title, 
                Quantity,
                Priority,
                Description,
            });
            await post.save();
            res.status(201).send({ msg: "Product added successfully" });
          } catch (err) {
            res.send(err);
          }
     
});



app.delete("/shopping/:id",async (req, res) => {
      const { id } = req.params;
      try {
        const deletingList = await ShoppingModel.deleteOne({ _id: id });
        res.status(201).send({ msg: "Deleted Product Successfully", deletingList });
      } catch (err) {
        res.status(500).send(err);
      }
    }
  );
  


module.exports=app;