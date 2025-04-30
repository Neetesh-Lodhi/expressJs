import express from "express";

const app = express()

app.get("/", (req, res) => {
          res.send("hello world");
})

app.post("/login", (req, res) => {
          res.send("login successfully");
})

app.get("/home", (req, res) => {
          res.send("we are on home route");
})

app.listen(5000, (req, res) => {
          console.log("server is running on port 5000");
})