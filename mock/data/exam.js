let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/talk/exam/index", (req, res) => {
    setTimeout(() => {
        let data = Mock.mock({
            status: 200,
            msg: '',
            exams: [{
                gradeLabel: "高一",//年纪gradeLabel
                grade: 10,//年纪
                title: "2018-2019学年度第一学期期中质量检测",//考试名称title
                schoolNum: 10,//学校数量schoolNum
                paper_num: 4,//科目数量paper_num
                exam_time: '2018-01-02',//时间exam_time
                status: 1,//是否公布成绩status
                exam_id: 0,//exam_id
                groups: [//groups
                    {group_name: "默认报告", group_id: 1},//group_id,group_name
                    {group_id: 1, group_name: "高考3+3报告"},//group_id,group_name
                    {group_id: 2, group_name: "语文报告"},//group_id,group_name
                ]
            }, {
                gradeLabel: "高二",//年纪gradeLabel
                grade: 11,//年纪
                title: "2018-2019学年度第一学期期中质量检测",//考试名称title
                schoolNum: 10,//学校数量schoolNum
                paper_num: 4,//科目数量paper_num
                exam_time: '2018-01-02',//时间exam_time
                status: 0,//是否公布成绩status
                exam_id: 0,//exam_id
                groups: [//groups
                ]
            }, {
                gradeLabel: "高三",//年纪gradeLabel
                grade: 12,//年纪
                title: "2018-2019学年度第一学期期中质量检测",//考试名称title
                schoolNum: 10,//学校数量schoolNum
                paper_num: 4,//科目数量paper_num
                exam_time: '2018-01-02',//时间exam_time
                status: 1,//是否公布成绩status
                exam_id: 0,//exam_id
                groups: [//groups
                    {group_name: "默认报告", group_id: 1},//group_id,group_name
                    {group_id: 1, group_name: "高考3+3报告"},//group_id,group_name
                    {group_id: 2, group_name: "语文报告"},//group_id,group_name
                ]
            }, {
                gradeLabel: "初一",//年纪gradeLabel
                grade: 7,//年纪
                title: "2018-2019学年度第一学期期中质量检测",//考试名称title
                schoolNum: 10,//学校数量schoolNum
                paper_num: 4,//科目数量paper_num
                exam_time: '2018-01-02',//时间exam_time
                status: 1,//是否公布成绩status
                exam_id: 0,//exam_id
                groups: [//groups
                    {group_name: "默认报告", group_id: 1},//group_id,group_name
                    {group_id: 1, group_name: "高考3+3报告"},//group_id,group_name
                    {group_id: 2, group_name: "语文报告"},//group_id,group_name
                ]
            }, {
                gradeLabel: "初二",//年纪gradeLabel
                grade: 8,//年纪
                title: "2018-2019学年度第一学期期中质量检测",//考试名称title
                schoolNum: 10,//学校数量schoolNum
                paper_num: 4,//科目数量paper_num
                exam_time: '2018-01-02',//时间exam_time
                status: 1,//是否公布成绩status
                exam_id: 0,//exam_id
                groups: [//groups
                    {group_name: "默认报告", group_id: 1},//group_id,group_name
                    {group_id: 1, group_name: "高考3+3报告"},//group_id,group_name
                    {group_id: 2, group_name: "语文报告"},//group_id,group_name
                ]
            }, {
                gradeLabel: "初三",//年纪gradeLabel
                grade: 9,//年纪
                title: "2018-2019学年度第一学期期中质量检测",//考试名称title
                schoolNum: 10,//学校数量schoolNum
                paper_num: 4,//科目数量paper_num
                exam_time: '2018-01-02',//时间exam_time
                status: 1,//是否公布成绩status
                exam_id: 0,//exam_id
                groups: [//groups
                    {group_name: "默认报告", group_id: 1},//group_id,group_name
                    {group_id: 1, group_name: "高考3+3报告"},//group_id,group_name
                    {group_id: 2, group_name: "语文报告"},//group_id,group_name
                ]
            }, {
                gradeLabel: "一年级",//年纪gradeLabel
                grade: 1,//年纪
                title: "2018-2019学年度第一学期期中质量检测",//考试名称title
                schoolNum: 10,//学校数量schoolNum
                paper_num: 4,//科目数量paper_num
                exam_time: '2018-01-02',//时间exam_time
                status: 1,//是否公布成绩status
                exam_id: 0,//exam_id
                groups: [//groups
                    {group_name: "默认报告", group_id: 1},//group_id,group_name
                    {group_id: 1, group_name: "高考3+3报告"},//group_id,group_name
                    {group_id: 2, group_name: "语文报告"},//group_id,group_name
                ]
            }, {
                gradeLabel: "二年级",//年纪gradeLabel
                grade: 2,//年纪
                title: "2018-2019学年度第一学期期中质量检测",//考试名称title
                schoolNum: 10,//学校数量schoolNum
                paper_num: 4,//科目数量paper_num
                exam_time: '2018-01-02',//时间exam_time
                status: 1,//是否公布成绩status
                exam_id: 0,//exam_id
                groups: [//groups
                    {group_name: "默认报告", group_id: 1},//group_id,group_name
                    {group_id: 1, group_name: "高考3+3报告"},//group_id,group_name
                    {group_id: 2, group_name: "语文报告"},//group_id,group_name
                ]
            }, {
                gradeLabel: "三年级",//年纪gradeLabel
                grade: 3,//年纪
                title: "2018-2019学年度第一学期期中质量检测",//考试名称title
                schoolNum: 10,//学校数量schoolNum
                paper_num: 4,//科目数量paper_num
                exam_time: '2018-01-02',//时间exam_time
                status: 1,//是否公布成绩status
                exam_id: 0,//exam_id
                groups: [//groups
                    {group_name: "默认报告", group_id: 1},//group_id,group_name
                    {group_id: 1, group_name: "高考3+3报告"},//group_id,group_name
                    {group_id: 2, group_name: "语文报告"},//group_id,group_name
                ]
            }, {
                gradeLabel: "四年级",//年纪gradeLabel
                grade: 4,//年纪
                title: "2018-2019学年度第一学期期中质量检测",//考试名称title
                schoolNum: 10,//学校数量schoolNum
                paper_num: 4,//科目数量paper_num
                exam_time: '2018-01-02',//时间exam_time
                status: 1,//是否公布成绩status
                exam_id: 0,//exam_id
                groups: [//groups
                    {group_name: "默认报告", group_id: 1},//group_id,group_name
                    {group_id: 1, group_name: "高考3+3报告"},//group_id,group_name
                    {group_id: 2, group_name: "语文报告"},//group_id,group_name
                ]
            }, {
                gradeLabel: "五年级",//年纪gradeLabel
                grade: 5,//年纪
                title: "2018-2019学年度第一学期期中质量检测",//考试名称title
                schoolNum: 10,//学校数量schoolNum
                paper_num: 4,//科目数量paper_num
                exam_time: '2018-01-02',//时间exam_time
                status: 1,//是否公布成绩status
                exam_id: 0,//exam_id
                groups: [//groups
                    {group_name: "默认报告", group_id: 1},//group_id,group_name
                    {group_id: 1, group_name: "高考3+3报告"},//group_id,group_name
                    {group_id: 2, group_name: "语文报告"},//group_id,group_name
                ]
            }, {
                gradeLabel: "六年级",//年纪gradeLabel
                grade: 6,//年纪
                title: "2018-2019学年度第一学期期中质量检测",//考试名称title
                schoolNum: 10,//学校数量schoolNum
                paper_num: 4,//科目数量paper_num
                exam_time: '2018-01-02',//时间exam_time
                status: 1,//是否公布成绩status
                exam_id: 0,//exam_id
                groups: [//groups
                    {group_name: "默认报告", group_id: 1},//group_id,group_name
                    {group_id: 1, group_name: "高考3+3报告"},//group_id,group_name
                    {group_id: 2, group_name: "语文报告"},//group_id,group_name
                ]
            },]
        });
        return res.json(data)
    }, 1000)
});
module.exports = router;
