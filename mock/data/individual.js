let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/talk/user/index", (req, res) => {
    setTimeout(() =>{
        let data = Mock.mock({
            status: 200,
            msg: '',
            real_name:'sd_wfkw',//real_name
            username:'房明',//username
            teacher_class:[//teacher_class
                {class_name:'八年级7班',course_name:'数学'},//class_name班级 course_name科目
                {class_name:'八年级7班',course_name:'数学'},//class_name班级 course_name科目
                {class_name:'八年级7班',course_name:'数学'},//class_name班级 course_name科目
            ]
        });
        return res.json(data)
    },1000)
});
module.exports = router;
