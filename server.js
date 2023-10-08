 const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

const users = [
  {
    username: "admin",
    password: "1234",
  },
];

const checkLogin = (tryUser) => {
  for (let i = 0; i < users.length; i++) {
    const regUser = users[i];
    if (
      tryUser.username === regUser.username &&
      tryUser.password === regUser.password
    ) {
      return "sio2s32ad13asdrtf14tryujf";
    }
  }
  return "";
};

app.post("/password", cors(), (req, res) => {
  const TOKEN = checkLogin(req.body);
  console.log(TOKEN);
  TOKEN != "" 
    ? res.json(TOKEN) 
    : res.json(null);
});

const PORT = 3001;
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log("Server on port " + PORT + " activated");
});