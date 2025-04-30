import express from "express";

const app = express();
app.use(express.json());

app.get("/about", (req, res) => {
          res.send("Get about page");
})

app.post("/login", (req, res) => {
          const { username } = req.body;
          res.send(`welcome ${username}`);
})

app.put("/user/:id", (req, res) => {
          const userId = req.params.id;
          res.send(`userId updated ${userId}`);
})

app.delete("user/:id",(req, res)=> {
          const delId = req.params.id;
          res.send(`user Id deleted ${delId}`);
})



//Route Parameters-dynamic routing
//Dynamic routing is when the route is not hardcoded, but instead is dynamic and can change based on the request.

//If client visits /user/45,
//Response: User ID is 45

app.get('user/:id', (req, res) => {
          const userId = req.params.id;
          res.send(`userId is ${userId}`);
})

//Query Parameter-filtering and searching

app.get('/user', (req, res) => {
          // const { id, name } = req.query;
          const searchTerm = req.query.term;

          res.send(`you are search for ${searchTerm}`);
})

//URL Example: /search?term=express
//Response: You searched for: express
