const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllJokes = require("./server/routes/jokes.routes");
// console.log(AllJokes);
const test = AllJokes(app);
// console.log(test);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
