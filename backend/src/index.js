const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(3333, () => { console.log("Cards APP!") })