  const fs = require("fs");
  //const index = fs.readFileSync("index.html", "utf-8");
  const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  const users = data.users;

  exports.createuser = (req, res) => {
    users.push(req.body);
    res.status(201).json(req.body);
  };


  exports.getAlluser = (req, res) => {
    res.json(users);
  };
  exports.getuser = (req, res) => {
    const id = +req.params.id;
    const user = users.find((p) => p.id === id);
    res.json(user);
  };

  exports.replaceuser = (req, res) => {
    const userid = +req.params.id;
    const userIndex = users.findIndex((p) => p.id === userid);
    users.splice(userIndex, 1, { ...req.body, id: userid });
    res.status(201).json();
  };

  exports.updateuser = (req, res) => {
    const userid = +req.params.id;
    const userIndex = users.findIndex((p) => p.id === userid);
    const curruser = users[userIndex];
    users.splice(userIndex, 1, { ...curruser, ...req.body });
    res.status(201).json();
  };

  exports.deleteuser = (req, res) => {
    const userid = +req.params.id;
    const userIndex = users.findIndex((p) => p.id === userid);
    users.splice(userIndex, 1);
    const curruser = users[ userIndex];
    res.status(201).json(curruser);
  };
