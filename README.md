# CRUD API (Products)

Simple Node.js + Express CRUD API for managing products using MongoDB (Mongoose).

**What it does**
- Create, read, update, and delete `Product` documents.

**Prerequisites**
- Node.js (16+ recommended)
- npm
- A MongoDB connection string (Atlas or self-hosted)

**Files of interest**
- `index.js` — app entry, loads environment and starts server
- `models/product.model.js` — Mongoose model
- `controllers/product.controller.js` — route handlers
- `routes/product.route.js` — Express routes

Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` from the example and fill values:

```bash
copy .env.example .env
# edit .env and set MONGO_URI and PORT
```

Example `.env` values (already in `.env.example`):

```
MONGO_URI=mongodb+srv://<dbUser>:<dbPass>@cluster0.3euyiup.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
```

3. Start the server:

```bash
npm run server
# or for development with auto-reload
npm run dev
```

API Endpoints

Base URL: `http://localhost:5000/api/products`

- GET `/` — list all products

```bash
curl http://localhost:5000/api/products
```

- GET `/:id` — get product by id

```bash
curl http://localhost:5000/api/products/<id>
```

- POST `/` — create product

Request JSON body (example):

```json
{
  "name": "Sample Product",
  "quantity": 5,
  "price": 12.99,
  "image": "https://example.com/image.jpg"
}
```

Curl example:

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Sample Product\",\"quantity\":5,\"price\":12.99,\"image\":\"https://example.com/image.jpg\"}"
```

- PUT `/:id` — update product (send JSON body with fields to change)

```bash
curl -X PUT http://localhost:5000/api/products/<id> -H "Content-Type: application/json" -d "{ \"price\": 9.99 }"
```

- DELETE `/:id` — delete product

```bash
curl -X DELETE http://localhost:5000/api/products/<id>
```

Notes & Troubleshooting

- The project currently uses CommonJS (`require` / `module.exports`) and `package.json` uses `"type": "commonjs"`.
- Ensure `.env` is not committed (there is a `.gitignore` entry).
- If you accidentally pushed secrets, rotate the DB user/password immediately and scrub the git history (BFG or `git filter-repo`).

Testing

- Use `curl`, Postman, or Insomnia to exercise endpoints.
- Example: create a product, list products, update the created product, then delete it.

