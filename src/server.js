import express from "express";
import client from "./db/index.js";

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).json({
    app: "is running",
  });
});

app.get("/create", async (req, res) => {
  client.query(`CREATE TABLE Candidate { 
    Id: int, 
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(500),
    City varchar(255)}`);
});

app.listen(port, () => {
  console.log("server is running on", port);
});

client.connect();
