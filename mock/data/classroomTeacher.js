/**
 * 任课老师（单科）
 * **/
let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
let reportCardArr = [{
    key: 0,
    name: '朱承平',//姓名
    score: 650,//成绩
    classRank: 1,//班次
    schoolRank: 34,//校次
    grade: "A",//等级
    studentId: 0,//学生ID
}];//成绩单Arr

let nameArr = ['康紫扬', '赵家康', '于冬', '贺江', '徐梓海', '何昊', '刘玉慧', '陈建', '赵小博', '范洪梅', '李春平', '明扬', '高金芮'];
nameArr.map((item, index) => {
    let grade = 'A';
    if (index < 3) {
        grade = 'A'
    } else if (index < 5) {
        grade = 'B'
    } else if (index < 7) {
        grade = 'C'
    } else if (index < 9) {
        grade = 'D'
    } else {
        grade = 'E'
    }
    reportCardArr = [...reportCardArr,
        {
            key: index + 1,
            name: item,
            score: 650 + index,
            classRank: index + 2,
            schoolRank: 34 + index,
            grade,
            studentId: index + 1,
        }]
});

router.use("/talk/report/index", (req, res) => {
    setTimeout(() => {
        let data = Mock.mock({
            status: 200,
            msg: '',
            data: [
                {
                    "name": "班级概述",
                    "components": [
                        { //考试概括
                            "view": "epitome/epitome",
                            "course_id": 1,
                            "data": {
                                rank: false,//概括内容的显示开关，false，
                                rankTitle: false,//title的显示方式，false
                                averageTitle: '班级平均分',//概括的标题
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
                            }
                        }, {
                            "view": "classroomTeacher/gradeFractional/gradeFractional",
                            "course_id": 1,
                            data: {
                                //等级分数线
                                gradeFractionalArr: [{
                                    key: 0,
                                    grade: "A",
                                    scope: '[101.0,120]',
                                    standard: 97.4,
                                    school: 150,
                                    rank: 5,
                                    peopleNum: 8,
                                    peopleArr: ['房明', '马云', '马化腾', '王健林', '张小龙', '王思聪', '王磊', '雷军']
                                },
                                    {
                                        key: 1,
                                        grade: "B",
                                        scope: '[82.0,101.0]',
                                        standard: 56.7,
                                        school: 56.7,
                                        rank: 4,
                                        peopleNum: 5,
                                        peopleArr: ['王健林', '张小龙', '王思聪', '王磊', '雷军']
                                    }, {
                                        key: 2,
                                        grade: "C",
                                        scope: '[41.0,82.0]',
                                        standard: 88.8,
                                        school: 58.6,
                                        rank: 3,
                                        peopleNum: 0,
                                        peopleArr: []
                                    }, {
                                        key: 3,
                                        grade: "D",
                                        scope: '[17.0,41.0]',
                                        standard: 22.5,
                                        school: 96,
                                        rank: 2,
                                        peopleNum: 13,
                                        peopleArr: ['房明', '马云', '马化腾', '王健林', '张小龙', '王思聪', '王磊', '雷军', '刘强东', '王中石', '董明珠', '章泽天', '杨超越']
                                    }, {
                                        key: 4,
                                        grade: "E",
                                        scope: '[0,17.0)',
                                        standard: 25,
                                        school: 33,
                                        rank: 1,
                                        peopleNum: 1,
                                        peopleArr: ['令狐冲']
                                    }]
                            },
                        }
                    ],
                },
                {
                    "name": "成绩单",
                    components: [{
                        view: "reportCard/reportCard",
                        course_id: 1,
                        data: {
                            teacherSwitch: false,//true为班主任,false为任课老师
                            reportCardArr,
                        }
                    }]

                }]
        });
        return res.json(data)
    }, 1000)
})
;
module.exports = router;
