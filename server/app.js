const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const todoRouter = require("./routes/todo");

const app = express();

const PORT = 8000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// http://localhost:8000/images/js_ninja.png
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/todo", todoRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
