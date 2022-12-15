const { Router } = require("express");
const { BookmarkModel } = require("../Model/bookmark.model");
const { ShoppingModel } = require("../Model/shopping.model");

const app = Router();

app.get("/bookmarks", async (req, res) => {
  const list = await BookmarkModel.find({});
  return res.status(200).send(list);
});

app.post("/bookmarks/:id", async (req, res) => {
  const { id } = req.params;
  const { Title, Quantity, Priority, Description, productId } = req.body;

  const findPro = await ShoppingModel.find({ _id: id });

  if (findPro) {
    try {
      const post = new BookmarkModel({
        Title,
        Quantity,
        Priority,
        Description,
        productId: id,
      });

      await post.save();
      res.status(201).send({ msg: "Product added successfully in Bookmarks" });
    } catch (err) {
      res.send(err);
    }
  } else {
    res.status(403).send({ msg: "Product List is not here" });
  }
});

// app.delete("/bookmarks/:id",async (req, res) => {
//       const { id } = req.params;
//       try {
//         const deletingList = await ShoppingModel.deleteOne({ _id: id });
//         res.status(201).send({ msg: "Deleted Product Successfully", deletingList });
//       } catch (err) {
//         res.status(500).send(err);
//       }
//     }
//   );

module.exports = app;
