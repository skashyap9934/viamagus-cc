const { Router } = require("express");
const connectClient = require("../config/mongoClient");

const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
  try {
    const collection = (await connectClient())
      .db("products")
      .collection("cart");
    const products = await collection.find({}).toArray();

    const query = [
      {
        $group: {
          _id: null,
          total: {
            $sum: {
              $multiply: ["$price", "$quantity"],
            },
          },
        },
      },
    ];
    const total = await collection.aggregate(query).toArray();

    res.status(200).json({ products, total: total[0].total });
  } catch (error) {
    throw new Error(`Could not fetch products from the cart ${error.message}`);
  }
});

productsRouter.patch("/update", async (req, res) => {
  try {
    const { id, value } = req.query;
    const collection = (await connectClient())
      .db("products")
      .collection("cart");

    const response = await collection.findOneAndUpdate(
      { id: +id },
      { $inc: { quantity: +value } },
      { returnOriginal: false }
    );

    res.json({ response });
  } catch (error) {
    throw new Error(`Could not update the quantity ${error.message}`);
  }
});

module.exports = productsRouter;
