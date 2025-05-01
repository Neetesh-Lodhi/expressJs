✅ Express.js req and res Objects — Interview-Focused Guide
🧠 1. What Are req and res in Express?
In every Express route, you get two main objects:

req → the request object from the client (browser, Postman, frontend)

res → the response object you send back to the client

Interview Line:
“In Express, req represents the incoming data from the client, and res is used to send the desired response back. They are central to handling any HTTP request.”

📩 2. Request Object (req)
The req object contains all the data sent by the client.

✅ Key Properties:
Property	Purpose	Example Use
req.body	Data sent in POST/PUT body (JSON, form)	req.body.username
req.params	Route parameters from dynamic URL	/user/:id → req.params.id
req.query	Query parameters from URL	/search?term=x → req.query.term
req.headers	Request headers	req.headers['authorization']
req.method	HTTP method (GET, POST, etc.)	Logging, conditionals
req.url	Full URL of request	Logging or analytics

🧪 Example:

app.post('/user/:id', (req, res) => {
  const id = req.params.id;            // from URL /user/123
  const name = req.body.name;          // from JSON body
  const token = req.headers['auth'];   // from headers
  const filter = req.query.sort;       // from query ?sort=asc

  console.log(id, name, token, filter);
});
📤 3. Response Object (res)
The res object is used to send a response back to the client.

✅ Key Methods:
Method	Description	Example Use
res.send()	Sends text, JSON, or HTML	res.send('OK') or res.send(user)
res.json()	Sends JSON response	res.json({ success: true })
res.status()	Sets HTTP status code	res.status(404).send('Not found')
res.redirect()	Redirects to another URL	res.redirect('/login')
res.set()	Set custom headers	res.set('Content-Type', 'text')

🧪 Example:

app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.status(200).json({
    message: `Hello, ${name}!`
  });
});
Request: /greet?name=Rahul
Response: { message: "Hello, Rahul!" }

💼 4. Practical Real-World Usage
🔐 Authentication (JWT):

const token = req.headers['authorization'];
if (!token) return res.status(401).send('Unauthorized');
📦 Creating a user (POST):

app.post('/signup', (req, res) => {
  const { name, email } = req.body;
  // Save to DB...
  res.status(201).json({ message: 'User created' });
});
🛠️ Dynamic routing:

app.get('/product/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Product ID: ${productId}`);
});
🎯 Interview Keywords to Mention:
RESTful API

HTTP status codes

req.body for form or JSON inputs

req.params for dynamic routing

res.send() vs res.json()

Custom headers and tokens in req.headers

📝 Summary Table
Feature	Access With	Example Value
Body Data	req.body	{ name: 'Alex' }
Route Param	req.params.id	'123' for /user/123
Query Param	req.query.sort	'asc' for ?sort=asc
Send Data	res.send()	'OK' or object
Set Status	res.status(404)	Set before .send()
JSON Output	res.json()	Sends { key: value }

🔚 Final Interview Tip:
“Always remember, req brings data in, res sends data out. Together, they allow complete control over how requests are processed and responses are returned.”