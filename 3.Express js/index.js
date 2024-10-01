const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const exprees = require("express");
const morgan = require('morgan');
const { type } = require("os");
const server = exprees();

// Middleware
 
server.use(exprees.json());
server.use(exprees.urlencoded());
server.use(morgan('default  ')); 
server.use(exprees.static('public'));

// server.use((req,res,next)=>{
//   console.log(req.method,req.ip, req.hostname , new Date() ,req.get('User-Agent')   );
//   next();
// });

const Auth = (req,res,next)=>{
 // console.log(req.query);
  // if(req.body.password=='123'){
  //   console.log("not found")
  // next();
  // } else{
  //   res.sendStatus(401);
  // }
  next();
} 



//API - Endpoint - Routes
server.get("/demo", (req, res) => {
  res.send('<h1>Hello Himanshu</h1>');
  res.sendFile('C:\MERN Backend Tutorial\node tutorial\3.Express js\index.js');
  res.json(products)
  res.sendStatus(404);
  res.status(201).send('<h1>Hello Himanshu</h1>');
});
 
server.get("/product/:id", Auth, (req, res) => {
  console.log(req.params);
  res.json({type:'GET'});
});
server.post("/", Auth,(req, res) => {
  res.json({type:'POST'});
});
server.put("/", (req, res) => {
  res.json({type:'PUT'});
});
server.delete("/", (req, res) => {
  res.json({type:'DELETE'});
});
server.patch("/", (req, res) => {
   res.json({type:'PATCH'});
});





server.listen(8080),
  () => {
    console.log("server started");
  };
