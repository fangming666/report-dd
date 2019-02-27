/**
 * 班主任全科
 * **/
let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
let subjectArr = ["数学", "英语", "化学", "生物", "物理", "思项羽品德"];
let detailedArr = [{
    key: 0,
    subject: '语文',//科目
    score: 121,//成绩
    grade: 'A',//等级
    schoolRank: 35,//校次
    classRank: 1,//班次
}];//详细Arr
subjectArr.map((item, index) => {
    detailedArr = [...detailedArr,
        {key: index + 1, subject: item, score: 121 + index, grade: "B", schoolRank: 35 + index, classRank: index + 1}]
});

let reportCardArr = [{
    key: 0,
    name: '朱承平',//姓名
    score: 650,//成绩
    classRank: 1,//班次
    schoolRank: 34,//校次
    grade: "1A2B3C",//等级
    studentId: 0,//学生ID
    detailed: detailedArr//详细
}];//成绩单Arr
let nameArr = ['康紫扬', '赵家康', '于冬', '贺江', '徐梓海', '何昊', '刘玉慧', '陈建', '赵小博', '范洪梅', '李春平', '明扬', '高金芮'];
nameArr.map((item, index) => {
    reportCardArr = [...reportCardArr,
        {
            key: index + 1,
            name: item,
            score: 650 + index,
            classRank: index + 2,
            schoolRank: 34 + index,
            grade: '2A1B2C',
            studentId: index + 1,
            detailed: detailedArr
        }]
});

router.use("/report/bureauEducation", (req, res) => {
    setTimeout(() => {
        let data = Mock.mock({
            code: 0,
            message: '',
            data: {
                //概述
                summary: {
                    classPeopleNum: 100,//班级人数
                    classNum: 10,//班级的总数
                    lackNum: 5,//缺考人数
                    average: 99.2,//平均分
                    fullMark: 750,//满分
                    highRun: 740,//最高分
                    schoolAverage: 567.8,//校平均分
                    averageDifference: -18.5,//均分差
                    ranking: 10,//排名
                    examinationHighRun: 705.5,//联考最高分
                    lackArr: ['陈玉楼', '鹧鸪哨', '马振邦', '花铃', '陈玉楼', '鹧鸪哨', '马振邦', '花铃'],//缺考名单

                    //优劣学科
                    goodBaseSubjectArr: [
                        {
                            subject: '语文',//科目
                            score: 60//联考分数
                        },
                        {
                            subject: '数学',//科目
                            score: 30//联考分数
                        },
                        {
                            subject: '英语',//科目
                            score: 80//联考分数
                        },
                        {
                            subject: '化学',//科目
                            score: 20//联考分数
                        },
                        {
                            subject: '物理',//科目
                            score: 45//联考分数
                        },
                        {
                            subject: '思想与品德',//科目
                            score: 55//联考分数
                        }
                    ],
                    //各科平均分
                    subjectAverageArr: [
                        {
                            key: 0,
                            subjectName: '语文',//科目名称
                            schoolAverage: 97.4,//学校均分
                            classAverage: 150,//班级均分
                            rate: 0.5,//超均率
                            ranking: 5,//联考名次
                            standard: 121//标准差
                        },
                        {
                            key: 1,
                            subjectName: '数学',//科目名称
                            schoolAverage: 85.6,//学校均分
                            classAverage: 140,//班级均分
                            rate: 0,//超均率
                            ranking: 2,//联考名次
                            standard: 111//标准差
                        },
                        {
                            key: 2,
                            subjectName: '英语',//科目名称
                            schoolAverage: 78,//学校均分
                            classAverage: 130,//班级均分
                            rate: -0.2,//超均率
                            ranking: 3,//联考名次
                            standard: 151//标准差
                        }
                    ]
                },
                //成绩单
                reportCard: reportCardArr
            }
        });
        return res.json(data)
    }, 1000)
})
;
module.exports = router;