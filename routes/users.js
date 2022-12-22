var express = require("express");
var router = express.Router();

let users = { items: [] };

router.get("/", (req, res) => {
  res.send(users);
});

router.delete("/user/:name", (req, res) => {
  res.render("users", {
    name: req.params.name,
  });
});

router.post("/", (req, res) => {
  users.items.push(req.body);
  res.send(req.body);
  console.log(users);
});

router.delete("/", (req, res) => {
  res.send("deletado");
});
module.exports = router;

router.delete("/:email", (req, res) => {
  console.log("req params", req.params.email);
  let email = req.params.email;
  users = users.filter(({ email }) => email !== req.params.email);
});
