const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
const nunjucks = require('nunjucks');
const app = express();
const bodyParser = require('body-parser');

app.use(cors())
app.use(express.urlencoded())
app.use(routes)

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(8043, () => { console.log("Cards APP!") })



nunjucks.configure(path.resolve(__dirname, '../../public/views'), {
    autoescape: true,
    express: app
});

