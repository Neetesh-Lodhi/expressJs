# ✅ Express Middleware — Complete Guide

## 🧠 1. What is Middleware in Express? (Theory)
Middleware is a function that executes during the lifecycle of a request to the server. It has access to:
- `req` (Request object)
- `res` (Response object)
- `next` (Function to pass control to the next middleware)

🔄 Middleware sits between the incoming request and the final response.

**Interview Line:**  
“Middleware in Express allows us to handle tasks like logging, authentication, validation, error handling, and more—before the final route sends a response.”

---

## 📦 2. Syntax of Middleware Function
```javascript
function middlewareName(req, res, next) {
          // custom logic
          next(); // call next to proceed
}
```
> **Note:** If `next()` is not called, the request is stuck.

---

## 🧪 3. Example: Creating a Basic Middleware
```javascript
const express = require('express');
const app = express();

// Custom middleware
function logger(req, res, next) {
          console.log(`${req.method} ${req.url}`);
          next(); // Move to next middleware or route
}

app.use(logger); // Application-level usage

app.get('/', (req, res) => {
          res.send('Hello Middleware!');
});

app.listen(3000);
```

**Output in console when hitting `/`:**
```
GET /
```

---

## 🧱 4. Types of Middleware in Express

### 🔹 A) Application-Level Middleware
Applied globally using `app.use()` or to specific HTTP methods.

```javascript
app.use((req, res, next) => {
          console.log('App-level middleware executed');
          next();
});
```

**Use cases:**
- Logging
- CORS
- JSON parsing (`express.json()`)

---

### 🔹 B) Router-Level Middleware
Used with `express.Router()` for modular route structure.

```javascript
const router = express.Router();

router.use((req, res, next) => {
          console.log('Router-level middleware');
          next();
});

router.get('/dashboard', (req, res) => {
          res.send('Dashboard Page');
});

app.use('/admin', router);
```

> **Note:** Only runs for `/admin/dashboard`.

---

### 🔹 C) Built-in Middleware
Provided by Express:
- `express.json()` – Parses JSON body
- `express.urlencoded()` – Parses form data
- `express.static()` – Serves static files

```javascript
app.use(express.json());
app.use(express.static('public'));
```

---

### 🔹 D) Third-party Middleware
Installed via npm. Examples:
- `cors` – Enable cross-origin requests
- `morgan` – Logging
- `helmet` – Security headers

**Installation:**
```bash
npm install cors
```

**Usage:**
```javascript
const cors = require('cors');
app.use(cors());
```

---

### 🔹 E) Error-handling Middleware
Has 4 parameters: `(err, req, res, next)`

```javascript
app.use((err, req, res, next) => {
          console.error(err.stack);
          res.status(500).send('Something broke!');
});
```

> **Special Rule:** Error-handling middleware only runs if `next(err)` is called.

---

## 🧩 5. Practical Real-World Use Cases

| **Use Case**       | **Middleware Role**                              |
|---------------------|-------------------------------------------------|
| Logging            | Log every request (custom or `morgan`)          |
| Auth Check         | Validate JWT token before accessing routes      |
| Error Handling     | Centralized error catcher                       |
| File Upload        | `multer` middleware parses `multipart/form-data`|
| Body Parsing       | `express.json()` for API body parsing           |

---

## 🎯 6. Interview Tips & One-liners
- “Middleware adds layers of logic to Express request handling.”
- “They make the app modular, readable, and reusable.”
- “Using `next()` is essential unless we terminate the request with `res.send()`.”
- “Error middleware helps in graceful API failure handling.”

---

## ✅ Summary (Cheat Sheet Style)

| **Type**           | **Purpose**                | **Function Signature**                          |
|---------------------|----------------------------|------------------------------------------------|
| Application         | Global logic              | `app.use((req, res, next) => {})`              |
| Router-level        | Specific to route groups  | `router.use((req, res, next) => {})`           |
| Built-in            | JSON parsing, static files| `express.json()`, `express.static()`           |
| Third-party         | Extra features via npm    | `cors`, `morgan`, `helmet`, `multer`           |
| Error-handling      | Central error response    | `app.use((err, req, res, next) => {})`         |