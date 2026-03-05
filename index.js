import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import productRoute from "./routes/product.route.js";
const app = express();
const connString = process.env.MONGO_URI;
const port = process.env.PORT || 5000;


//middleware configurations
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

//test on local browser
app.get("/", (req, res) => {
    res.send("Hello there, from NodeAPI😁");
});

mongoose.connect(connString).then(async() => {
    console.log("Connected to the database");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

}).catch(() => {
    console.log("Connection to database failed");
});