import express from "express";
const app = express();
const router = express.router();

// function(req, res, next){
//           //logic here
//           res.send('hi');
//           next(); //passes to the next middleware
// }

//Application middleware
app.use( (req, res, next) => {
          res.send("Application middleware");
          next();
})
 
//Router-level middleware
router.use((req, res, next)=> {
          console.log("Router-level middleware");
          next();
})

 
//Error Handeling Middleware
app.use((err, req, res, next) => {
          console.log(err.stack);
          res.status(500).json("Something Broke"); 
})