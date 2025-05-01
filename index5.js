import express from "express"
const app = express()
import path from "path"

// Serve static files from 'public' folder
app.use(express.static(path.join(_dirname, "public")))

app.listen(3000, (req, res) => {
          console.log("server is running on port 3000")
})


/*Now you can access:

 /index.html → localhost:3000/index.html

/styles.css → used by the HTML <link> tag

/script.js → linked in HTML via <script src="/script.js">

*/
