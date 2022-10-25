import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouter from "./route/web";
import "dotenv/config";
import connectDB from "./config/db";

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouter(app);

const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log("Backend is running on the port: " + port);
});

//Test Connect DB
connectDB();
