let express = require("express");

let app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


let router = express.Router();
let login = require("./data/login");
router.use(login);

let bind = require("./data/bind");
router.use(bind);

let individual = require('./data/individual');
router.use(individual);

let removeBind = require("./data/removeBind");
router.use(removeBind);

let exam = require("./data/exam");
router.use(exam);

app.use(router);
app.listen(9090, () => {
    console.log("server is running")
});