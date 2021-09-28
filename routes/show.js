const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
    console.log("hey")
    const db = req.app.locals.db;
    db.serialize(() => {
        db.all(
            "SELECT rowid,fID,  fCode,  fA,  fA0,  fA1,  fA2,  fA3,  fB,  fB0,  fB1,  fB2,  fB3,  fC,  fC0,  fC1,  fC2,  fC3 FROM form",
            (error, rows) => {
                temp = [];
                rows.forEach((item) => { temp.push(item)})
                res.json(temp)
            })
    })
})

module.exports = router;