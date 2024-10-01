const fs = require("fs");
//const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

exports.createProduct = (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
};


exports.getAllProduct = (req, res) => {
  res.json(products);
};
exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);

  res.json(product);
};

exports.replaceProduct = (req, res) => {
  const productid = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === productid);
  products.splice(productIndex, 1, { ...req.body, id: productid });
  res.status(201).json();
};

exports.updateProduct = (req, res) => {
  const productid = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === productid);
  const currProduct = products[productIndex];
  products.splice(productIndex, 1, { ...currProduct, ...req.body });
  res.status(201).json();
};

exports.deleteProduct = (req, res) => {
  const productid = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === productid);
  products.splice(productIndex, 1);
  const currProduct = products[ roductIndex];
  res.status(201).json(currProduct);
};
