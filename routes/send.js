const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

router.post("/", function (req, res, next) {
    const db = req.app.locals.db;

    console.log(req.body)
    db.serialize(() => {
        db.run(
            "INSERT INTO form(fID,  fCode,  fA,  fA0,  fA1,  fA2,  fA3,  fB,  fB0,  fB1,  fB2,  fB3,  fC,  fC0,  fC1,  fC2,  fC3) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [ req.body.fID,  req.body.fCode,  req.body.fA,  req.body.fA0,  req.body.fA1,  req.body.fA2,  req.body.fA3,  req.body.fB,  req.body.fB0,  req.body.fB1,  req.body.fB2,  req.body.fB3,  req.body.fC,  req.body.fC0,  req.body.fC1,  req.body.fC2,  req.body.fC3],
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                console.log("new form added");
            })
    })
})

module.exports = router;

