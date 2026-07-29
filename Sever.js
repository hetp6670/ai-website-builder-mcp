const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

// create webpage
app.post("/create", (req, res) => {
  const { name, content } = req.body;
  fs.writeFileSync(`./pages/${name}.html`, content);
  res.send("Page created");
});

// read webpage
app.get("/page/:name", (req, res) => {
  const data = fs.readFileSync(`./pages/${req.params.name}.html`, "utf-8");
  res.send(data);
});

app.listen(3000, () => console.log("Server running"));
