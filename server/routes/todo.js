var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/get-all", function (req, res, next) {
    res.status(200).json({
        data: [
            {
                title: "Get a coffee",
                // to enum
                status: "inProgress",
                date: new Date().toLocaleString(),
            },
        ],
    });
});

module.exports = router;
