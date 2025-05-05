const express  = require("express")
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
    try {
        res.status(200).send({ msg: "This is my backend" });
    } catch (error) {
        res.status(500).send({ message: "Error occurred" });
    }
});

//const recipesRouter = require("./controllers/recipesRouter")
//app.use("/api", recipesRouter)

app.listen(3000,async()=>{
    console.log(process.env.MONGO_URI);
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Server connected successfully")
    } catch (error) {
        console.log("Something went wrong",error);
    }
})