import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import client from "./src/db/index.js";

const app = express();
dotenv.config({ path: ".env" });
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    app: "is running",
  });
});

app.get("/create", async (req, res) => {
  try {
    await client.query(`CREATE TABLE Candidate {
      Id SERIAL PRIMARY KEY,
      LastName varchar(255),
      FirstName varchar(255),
      Address varchar(500),
      City varchar(255)}`);
  } catch (ex) {
    console.log("exception", ex);
  }
  res.status(200).json({
    status: "Success",
  });
});

app.listen(port, () => {
  console.log("server is running on", port);
});

client.connect();
