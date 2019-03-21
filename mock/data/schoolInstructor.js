/**
 * 学校教研员单科
 * **/
let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/talk/report/index", (req, res) => {
    setTimeout(() => {
        let data = Mock.mock({
            status: 200,
            msg: '',
            data: [
                {
                    "name": "整体概述",
                    "components": [
                        {
                            //考试概括
                            "view": "epitome/epitome",
                            "course_id": 1,
                            "data": {
                                rank: false,//概括内容的显示开关，false，
                                rankTitle: true,//title的显示方式，此时为true
                                averageTitle: '学校平均分',//概括的标题
                                schoolNum: 8,//学校数量
                                peopleNum: 2456,//总人数
                                lackNum: 5,//缺考人数
                                average: 99.2,//平均分
                                fullMark: 750,//满分
                                highRun: 740,//最高分
                                examinationAverage: 567.8,//联考平均分
                                averageDifference: -18.5,//均分差
                                ranking: 10,//排名
                                examinationHighRun: 705.5,//联考最高分
                            }
                        },
                        {
                            //等级分数线及比例
                            view: "examinationSigle/gradeLine/gradeLine",
                            //等级分数线及比例
                            course_id: 0,
                            data: {
                                //等级分数线及比例
                                schoolProportionSwitch:true,//校单科为ｔｒｕｅ
                                gradeLineArr: [
                                    {
                                        score: '[100,120]',//分数线
                                        people: 132,//人数
                                        scale: 15,//比例
                                        examination: 15.0,//联考比例
                                        grade: "A",//等级
                                        ranking: 1,//排名
                                        key: 0
                                    },
                                    {
                                        score: '[82,100)',//分数线
                                        people: 82,//人数
                                        scale: 32,//比例
                                        examination: 12.0,//联考比例
                                        grade: "B",//等级
                                        ranking: 2,//排名
                                        key: 1
                                    },
                                    {
                                        score: '[41,820)',//分数线
                                        people: 32,//人数
                                        scale: 17.2,//比例
                                        examination: 17.2,//联考比例
                                        grade: "C",//等级
                                        ranking: 3,//排名
                                        key: 2
                                    },
                                    {
                                        score: '[17.0,41.0)',//分数线
                                        people: 56,//人数
                                        scale: 17.8,//比例
                                        examination: 17.8,//联考比例
                                        grade: "D",//等级
                                        ranking: 4,//排名
                                        key: 3
                                    },
                                    {
                                        score: '[0,17.0)',//分数线
                                        people: 82,//人数
                                        scale: 18,//比例
                                        examination: 28,//联考比例
                                        grade: "E",//等级
                                        ranking: 5,//排名
                                        key: 4
                                    },
                                    {
                                        score: '/',//分数线
                                        people: 82,//人数
                                        scale: 18,//比例
                                        examination: 28,//联考比例
                                        grade: "D+E",//等级
                                        ranking: 5,//排名
                                        key: 5
                                    }
                                ],
                            }
                        }
                        , {
                            //班级对比
                            view: "bureauEducation/comparison/comparison",
                            "course_id": 1,
                            data: {
                                //学校对比
                                comparisonTitle: '班级对比',//组件名称
                                columnOneTitle: '班级',//第一列的标题
                                columnOneTitleKey: 'className',//第一列的索引key
                                columnLastTitle: '班主任',//最后一列的标题
                                columnLastTitleKey: 'classTeacher',//最后一列的索引key
                                comparisonArr: [{
                                    key: 0,
                                    className: "学校",//班级名称
                                    average: 974,//平均分
                                    difference: '/',//均分差
                                    ranking: "/",//排名
                                    standard: 148.25,//标准差,
                                    teacher: "/",//教师
                                },
                                    {
                                        key: 1,
                                        className: "1班",//学校名称
                                        average: 97,//平均分
                                        difference: -2.5,//均分差
                                        ranking: 1,//排名
                                        standard: 108.25,//标准差
                                        teacher: "王晓亮",//教师
                                    },
                                    {
                                        key: 2,
                                        className: "2班",//学校名称
                                        average: 97,//平均分
                                        difference: 2.5,//均分差
                                        ranking: 1,//排名
                                        standard: 108.25,//标准差
                                        teacher: "房明",//教师
                                    }],
                            }

                        },

                        {
                            view: 'examinationSigle/famousGrade/famousGrade',
                            "course_id": 1,
                            data: {
                                //各班等级划分
                                viewTitle:'各班等级划分',//组件名称
                                famousGradeArr: [
                                    {
                                        school: '整体',
                                        key: 0,
                                        data: [{
                                            title: 'A(%)|排名',
                                            score: '97.4',
                                            ranking: '/',
                                        }, {
                                            title: 'B(%)|排名',
                                            score: '85',
                                            ranking: '/',
                                        }, {
                                            title: 'C(%)|排名',
                                            score: '65.4',
                                            ranking: '/',
                                        }, {
                                            title: 'D(%)|排名',
                                            score: '73.8',
                                            ranking: '/',
                                        },
                                        ],


                                    },
                                    {
                                        school: '德润',
                                        key: 1,
                                        data: [{
                                            title: 'A(%)|排名',
                                            score: '107.4',
                                            ranking: '1',
                                        }, {
                                            title: 'B(%)|排名',
                                            score: '56',
                                            ranking: '2',
                                        }, {
                                            title: 'C(%)|排名',
                                            score: '64.4',
                                            ranking: '3',
                                        }, {
                                            title: 'D(%)|排名',
                                            score: '70.9',
                                            ranking: '4',
                                        },
                                        ],


                                    }
                                ]
                            }
                        },

                    ]
                }
            ]
        });
        return res.json(data)
    }, 1000)
})
;
module.exports = router;
