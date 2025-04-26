✅ 1. What is Express.js?
Express.js is a minimal and flexible Node.js web framework that helps you build web applications and RESTful APIs easily.
It simplifies handling routes, requests, responses, and middleware in a Node.js server.

🧠 Interview Line:
“Express is a lightweight framework built on Node.js that simplifies server-side web development using JavaScript.”

✅ 2. How to Install and Create a Basic Express Server
📦 Installation:

npm init -y         # Initializes a Node.js project
npm install express # Installs Express
🧾 Basic Server Setup (index.js):

const express = require('express');
const app = express();

// Route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Listen on port
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
🧠 Interview Line:
“To start an Express server, we import express, define routes using methods like app.get(), and make the server listen on a specific port using app.listen().”

✅ 3. Key Express Methods
🔹 app.get(path, callback)
Handles GET requests

Example: fetching data or rendering a page


app.get('/home', (req, res) => {
  res.send('This is Home Page');
});
🔹 app.post(path, callback)
Handles POST requests

Used for submitting data (like login forms or APIs)



app.post('/login', (req, res) => {
  res.send('Login successful');
});
🔹 app.listen(port, callback)
Starts the server and listens on a specific port


app.listen(5000, () => {
  console.log('Server started on port 5000');
});
🧠 Interview Tip:
Explain that these methods represent HTTP verbs and are used to define API endpoints. Mention how this simplifies routing compared to vanilla Node.js.