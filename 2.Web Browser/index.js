  const http = require("http");
  const fs = require("fs");
  const { url } = require("inspector");
  const index = fs.readFileSync("index.html", "utf-8");
  const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  const person = { name: "Hiimanshu", age: 5 };
  const products = data.products;
  const server = http.createServer((req, res) => {
    console.log(req.url , req.method);
    if(req.url.startsWith('/product')){
      const id = req.url.split('/')[2];
      const product = products.find(p=>p.id===(+id));
      console.log(product);
        res.setHeader("Content-Type", "text/html");
    let modifiedindex = index.replace('**name**', product.name)
    .replace('**url**', product.image)
    .replace('**type**', product.category)
    .replace('**price**', product.price)
    .replace('**about**', product.description)
    .replace('**stock**', product.stock)
    res.end(modifiedindex);
    return;
    }

    switch (req.url) {
      case "/":
        res.setHeader("Content-Type", "text/html");
        res.end(index);
        break;
      case "/api":
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
        break;

      default:
        res.writeHead(404, "Not found");
        res.end();
    }
    console.log("server started ");
    // res.setHeader("Dummy", "DummyValue");
  });

  server.listen(8080);
k