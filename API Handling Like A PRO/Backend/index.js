import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  console.log("Hello Products");
});

app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "table 01", prie: 100 },
    { id: 2, name: "table 02", prie: 200 },
    { id: 3, name: "table 03", prie: 300 },
    { id: 4, name: "table 04", prie: 400 },
  ];


  if(req.query.search){
    const filterProducts =  products.filter(products => products.name.includes(req.query.search))
    req.send(filterProducts);
    return;
}


  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`visit local host : http://localhost:${port}`);
});
