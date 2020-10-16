import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import donationRoute from "./routes/donationRoutes.js";
import requestDonationRoute from "./routes/requestRoutes.js";

// App config
const app = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

// API routes
// req: request
// res: response
app.use("/donation", donationRoute);
app.use("/request", requestDonationRoute);

app.get("/", (req, res) => res.status(200).send("Hello World || Home"));

// Listening to the server
app.listen(port, () => console.log(`listening on localhost:${port}`));

/**
 * DB config
 * Change name, password and dbname
 *
 * URI stands for Uniform Resource Identifier
 */

mongoose.connect(
  process.env.mongoDB_Connection,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to DB!")
);
