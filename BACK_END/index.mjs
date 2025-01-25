import express from 'express';
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(express.json());

const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
];

app.get('/', (request, response) => {
    response.send("hello world");
});

app.get('/products', (request, response) => {
    response.json(products);
});

app.post('/products', (request, response) => {
    const newProduct = request.body;
    products.push(newProduct);
    response.status(201).json(newProduct);
});

app.use((request, response) => {
    response.status(404).send("No Route Found");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});