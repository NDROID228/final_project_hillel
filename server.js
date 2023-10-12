const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Users = require("./schemas/userSchema");
const Products = require("./schemas/productSchema");

const app = express();

// connecting BodyParser and CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

// connect to MongoDB + start server
const PORT = 3001;
const URL = "mongodb+srv://NDROID:DNS15022007@clustertest.dnjoj6z.mongodb.net/projectHillel";

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log(`Connected to MongoDB`);
  })
  .then(
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Server on port ${PORT} activated`);
    })
  )
  .catch((error) => console.log(`DB connection error: ${error}`));

const checkUser = (usersArr, tryUser) => {
  for (let i = 0; i < usersArr.length; i++) {
    const regUser = usersArr[i];
    if (
      tryUser.username === regUser.username &&
      tryUser.password === regUser.password
    ) {
      return "sio2s32ad13asdrtf14tryujf";
    }
  }
  return "";
}

app.post("/password", cors(), (req, res) => {
  let conn = mongoose.connection;

  let getDataPromise = new Promise((res, rej) => {
    Users
    .find({})
    .exec()
    .then((data) => {
      // conn.close();
      console.log(data);
      res(data);
    })
    .catch((err) => {
      // conn.close();
      rej(err);
    });
  });

  getDataPromise
  .then((resolve) => { 
    TOKEN = checkUser(resolve, req.body);
    console.log("TOKEN: " + TOKEN);
    if ( TOKEN != "" ) {
      conn.close();
      res.json(TOKEN);
    } else {
      res.json(null);
    }
  }).catch((err) => {
    throw err;
  })
});

app.get("/infoTable", cors(), (req, res) => {
  let conn = mongoose.connection;
  let getDataPromise = new Promise((resolve, reject) => {
  Products
    .find({}, {_id: 0, frontID: 1, category: 1, name: 1, quantity: 1, price: 1})
    .exec()
    .then((data) => {
      // data.forEach(elem => {
      //   delete elem._id
      // })
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
  });

  getDataPromise
  .then((resolve) => { 
    // conn.close();
    let result = JSON.stringify(resolve);
    res.json(result);
  }).catch((err) => {
    throw err;
  })
});

app.get("/", (req, res) => {
  return res.send("Hello, I`m just a little server >_<");
});