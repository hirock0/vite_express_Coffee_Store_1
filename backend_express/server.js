require("dotenv").config();
const express = require("express");
const cloudinary = require("./cloudinaryConfig");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;
app.use(cors());
app.use(express.json({ limit: "50mb" }));
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const DB = await client.db("admin").command({ ping: 1 });
    if (DB.ok) {
      console.log("Port is pinged");
    }

    app.post("/api/upload", async (req, res) => {
      try {
        const {
          coffee_name,
          coffee_chef,
          coffee_supplier,
          coffee_taste,
          coffee_category,
          coffee_details,
          coffee_image,
        } = await req.body;

        const uploadResponse = await cloudinary.uploader.upload(coffee_image, {
          folder: "coffee",
        });

        if (uploadResponse) {
          const DBDataObj = {
            coffee_name: coffee_name,
            coffee_chef: coffee_chef,
            coffee_supplier: coffee_supplier,
            coffee_taste: coffee_taste,
            coffee_category: coffee_category,
            coffee_details: coffee_details,
            coffee_image: uploadResponse.secure_url,
            image_public_id: uploadResponse.public_id,
          };
          const saveCoffee = await client
            .db("Coffee")
            .collection("coffees")
            .insertOne(DBDataObj);
          res.send(saveCoffee);
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Upload failed" });
      }
    });

    app.get("/", async (req, res) => {
      const response = await client
        .db("Coffee")
        .collection("coffees")
        .find()
        .toArray();
      res.send(response);
    });
  } catch (error) {
    throw new Error(error);
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
