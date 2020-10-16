import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import mongoData from "./models/mongoData.js";
// App config
const app = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());

/**
 * CORS is a node.js package for providing a Connect/Express middleware
 * that can be used to enable CORS with various options.
 *
 * Enables All CORS Requests
 */
app.use(cors());

/**
 * DB config
 * Change name, password and dbname
 *
 * URI stands for Uniform Resource Identifier
 */

const mongoURI =
  "mongodb+srv://<name>:<password>@cluster0.oelxq.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API routes
// req: request
// res: response
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/new/donation", (req, res) => {
  const dbData = req.body;

  mongoData.create(dbData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Listening to the server
app.listen(port, () => console.log(`listening on localhost:${port}`));
