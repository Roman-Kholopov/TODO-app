var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.json({
        name: "R2D2",
        type: "robot",
    });
});

module.exports = router;
