🧠 1. What is Routing in Express? (Theory)
In Express.js, routing refers to how the server responds to a client request for a particular endpoint (URI) and HTTP method (GET, POST, etc.).

Interview Line:
“Routing in Express defines how an application handles client requests at specific URLs using HTTP methods like GET, POST, PUT, and DELETE.”

🧾 2. Basic Route Handling (GET, POST, PUT, DELETE)
Express uses methods like app.get(), app.post() to handle HTTP requests.

✅ Example:

const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// GET request
app.get('/about', (req, res) => {
  res.send('GET About Page');
});

// POST request
app.post('/login', (req, res) => {
  const { username } = req.body;
  res.send(`Welcome ${username}`);
});

// PUT request
app.put('/user/:id', (req, res) => {
  res.send(`Updated user with ID ${req.params.id}`);
});

// DELETE request
app.delete('/user/:id', (req, res) => {
  res.send(`Deleted user with ID ${req.params.id}`);
});
🧠 Interview Line:
“Each HTTP method in Express like app.get() or app.post() is used to handle a specific type of request for a given path.”

🔍 3. Route Parameters (/user/:id)
📌 Used to capture values from the URL (dynamic routes)

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});
If client visits /user/45,
Response: User ID is 45

✅ Used for dynamic routing like profile pages, blog posts, product IDs.

🧠 Interview Line:
“Route parameters allow dynamic values in URLs, and they are accessed using req.params.”

❓ 4. Query Parameters (/user?id=123)
📌 Used to send optional key-value pairs in the URL, after a ?

app.get('/search', (req, res) => {
  const searchTerm = req.query.term;
  res.send(`You searched for: ${searchTerm}`);
});
URL Example: /search?term=express
Response: You searched for: express

🧠 Interview Line:
“Query parameters are optional data sent with GET requests, accessed via req.query.”

📌 5. Combining Route + Query Parameters

app.get('/user/:id/details', (req, res) => {
  const id = req.params.id;
  const includePosts = req.query.posts;
  res.send(`User ${id}, Include posts: ${includePosts}`);
});
URL: /user/5/details?posts=true
Response: User 5, Include posts: true

🧩 6. Real-World Use Cases

Feature	Used In	Example
app.get()	Fetch data (Read)	/products, /user/:id
app.post()	Send form/API data	/register, /login
Route Params	Dynamic routing	/blog/:slug, /user/:id/edit
Query Params	Filtering, searching	/search?query=node, /users?limit=10
📝 Summary Table

Concept	Syntax	Access With	Example URL
Route	app.get('/path')	—	/about
Route Parameter	app.get('/user/:id')	req.params.id	/user/123
Query Parameter	app.get('/search')	req.query.term	/search?term=express
🎯 Interview Keywords to Use
RESTful routing

Dynamic route handling

req.params vs req.query

URL path matching

Route chaining and route modularization (express.Router())