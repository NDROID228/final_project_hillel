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
const URL =
  "mongodb+srv://NDROID:DNS15022007@clustertest.dnjoj6z.mongodb.net/projectHillel";

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
};

app.post("/password", cors(), (req, res) => {
  let conn = mongoose.connection; // conn.close();

  let getDataPromise = new Promise((res, rej) => {
    Users.find({})
      .exec()
      .then((data) => {
        console.log(data);
        res(data);
      })
      .catch((err) => {
        rej(err);
      });
  });

  getDataPromise
    .then((resolve) => {
      TOKEN = checkUser(resolve, req.body);
      console.log("TOKEN: " + TOKEN);
      if (TOKEN != "") {
        // conn.close();
        res.json(TOKEN);
      } else {
        res.json(null);
      }
    })
    .catch((err) => {
      throw err;
    });
});

app.get("/infoTable", cors(), (req, res) => {
  let conn = mongoose.connection;
  let getDataPromise = new Promise((resolve, reject) => {
    Products.find(
      {},
      {
        _id: 1,
        frontID: 1,
        category: 1,
        name: 1,
        quantity: 1,
        price: 1,
        description: 1,
      }
    )
      .exec()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  getDataPromise
    .then((resolve) => {
      let result = JSON.stringify(resolve);
      res.json(result);
    })
    .catch((err) => {
      throw err;
    });
});

app.get("/infoCards", cors(), (req, res) => {
  let conn = mongoose.connection;
  let getDataPromise = new Promise((resolve, reject) => {
    Products.find(
      {},
      {
        _id: 1,
        category: 1,
        name: 1,
        quantity: 1,
        price: 1,
        amount: 1,
        isAvailable: 1,
      }
    )
      .exec()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  getDataPromise
    .then((resolve) => {
      let result = JSON.stringify(resolve);
      console.log(resolve);
      res.json(result);
    })
    .catch((err) => {
      throw err;
    });
});

app.post("/infoDetails", cors(), (req, res) => {
  let conn = mongoose.connection;
  console.log(req.body.ID);
  let getDataPromise = new Promise((resolve, reject) => {
    Products.find(
      { _id: req.body.ID },
      {
        _id: 0,
        category: 1,
        description: 1,
        quantity: 1,
        price: 1,
        amount: 1,
        isAvailable: 1,
        description: 1,
      }
    )
      .exec()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  getDataPromise
    .then((resolve) => {
      let result = JSON.stringify(resolve);
      // console.log("infoDetails");
      // console.log(resolve);
      res.json(result);
    })
    .catch((err) => {
      throw err;
    });
});

app.delete("/deleteRow", cors(), (req, res) => {
  console.log(req.body.frontID);
  const id = req.body.frontID;
  let deleteDataPromise = new Promise((resolve, reject) => {
    Products.findByIdAndDelete(id)
      .then((data) => {
        console.log(data);
        res.json("peremoga!");
      })
      .catch((err) => {
        console.log(err);
        // reject(err);
      });
  });
});

app.patch("/updateRow", cors(), (req, res) => {
  const dataObject = req.body.dataObject;
  console.log(dataObject);
  Products.findByIdAndUpdate(dataObject._id, {
    $set: {
      category: dataObject.category,
      name: dataObject.name,
      quantity: dataObject.quantity,
      price: dataObject.price,
      description: dataObject.description,
    },
  })
  .exec()
  .then((resp) => {
    res.json(resp)
  })
});

app.put("/addRow", cors(), (req, res) => {
  const dataObject = req.body.dataObject;
  console.log(dataObject);
  Products.insertMany(dataObject).then(resp => res.json(resp));
});

app.get("/", (req, res) => {
  return res.send("Hello, I`m just a little server >_<");
});
