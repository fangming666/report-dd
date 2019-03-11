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

let chooseReport = require("./data/chooseReport");
router.use(chooseReport);


let bureauEducation = require("./data/bureauEducation");//区县教育局
let examinationSigle = require("./data/examinationSigle");//区县教研员
let headmaster = require("./data/headmaster");//校长全科
let schoolInstructor = require("./data/schoolInstructor");//学校教研员单科
let classAdviser = require("./data/classAdviser");//班主任
let classroomTeacher = require("./data/classroomTeacher");//任课老师
router.use(bureauEducation);


app.use(router);
app.listen(9090, () => {
    console.log("server is running")
});
