import express from "express";
const app = express();


//req object
app.post("/user/:id", (req, res) => {
  const userId = req.params.id; // from URL /user/123
  const name = req.body.name; // from JSON body
  const filter = req.query.sort; // from query ?sort=asc
  const token = req.headers["auth"]; // request header

  console.log(userId, name, filter, token);
})

//res object
app.get("/greet", (req, res) => {
          const name = req.body.name || "Guest"
          res.status(200).json({
                    message: `my Name ${name}`
          });
})
// Request: /greet?name=Rahul
// Response: { message: "Hello, Rahul!" }

//practical use cases-Authentication JWT
const token = req.headers["Authorization"];
if(!token) res.status(401).json.send("UnAuthorized")


//creating user post
app.post("/signup", (req, res) => {
          const { username, email } = req.body
          //save to db
          res.status(201).json({ message: "user created" });
})
app.listen(5000, (req, res) => {
          console.log("server is running on port 5000");
})