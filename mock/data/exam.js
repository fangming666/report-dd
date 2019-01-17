let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/exam", (req, res) => {
    setTimeout(() => {
        let data = Mock.mock({
            code: 0,
            message: '',
            data: [{
                grade: "高一",//年纪
                examName: "2018-2019学年度第一学期期中质量检测",//考试名称
                schoolNum: 10,//学校数量
                subjectNum: 4,//科目数量
                time: '2018-01-02',//时间
                promulgate: false,//是否公布成绩
                color: "#3296FA",//年纪的颜色
                examId: 0,
                report: [
                    {name: "默认报告", reportId: 1},
                    {name: "高考3+3报告", reportId: 1},
                    {name: "语文报告", reportId: 1},
                    {name: "数学报告", reportId: 1},
                ]
            },
                {
                    grade: "高二",
                    examName: "2018-2019学年度第一学期期中质量检测期中质量检测期中质量检测",
                    schoolNum: 10,
                    subjectNum: 4,
                    time: '2018-01-02',
                    promulgate: true,
                    color: "#98D30F",
                    examId: 0,
                    report: [
                        {name: "默认报告", reportId: 1},
                        {name: "高考3+3报告", reportId: 1},
                        {name: "语文报告", reportId: 1},
                        {name: "数学报告", reportId: 1},
                    ]
                },
                {
                    grade: "高三",
                    examName: "2018-2019学年度第一学期期中质量检测期中质量检测期中质量检测",
                    schoolNum: 10,
                    subjectNum: 4,
                    time: '2018-01-02',
                    promulgate: true,
                    color: " #F2AE43",
                    examId: 0,
                    report: [
                        {name: "默认报告", reportId: 1},
                        {name: "物理报告", reportId: 1},
                        {name: "化学报告", reportId: 1},
                        {name: "政治报告", reportId: 1},
                    ]
                }]
        });
        return res.json(data)
    }, 1000)
});
module.exports = router;