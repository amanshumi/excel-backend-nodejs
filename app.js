const express = require("express");
const db = require("./src/config/db");
const taskRouter = require("./src/route/tasklist");
const cors = require("cors");

const app = express();

app.use(cors(), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
});
app.use(express.json());
app.use("/api/v1/tasklist/", taskRouter);

db.authenticate().then(() => {
    db.sync().then(() => {
        app.listen(7000, () => {
            console.log("connected to db and running on port 7000");
        });
    }).catch((err) => {
        console.log(err);
    })
}).catch((err) => {
    console.log(err);
})