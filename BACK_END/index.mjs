import express from 'express'
import cors from "cors"
// import { products } from './productsData.mjs'
const products = [];

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.send("hello world");
});

app.get('', (request, response) => {
    response.send(products);
});

app.get('', (request, response) => {

});

app.post('', (request, response) => {
   
});

app.use((request, response) => {
    response.send("No Route Found");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});