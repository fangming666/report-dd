/**
 * 区县教育局全科
 * **/
let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/report/bureauEducation", (req, res) => {
    setTimeout(() => {
        //区县教育局
        let data = Mock.mock({
            code: 0,
            message: '',
            data: [
                {
                    name: "整体概述",
                    components: [
                        {
                            view: 'epitome/epitome',
                            course_id: 1,
                            data: {
                                rank:true,//概括内容的显示开关，此时为true，
                                rankTitle:true,//title的显示方式，此时为true
                                averageTitle: '平均分',
                                schoolNum: 8,
                                peopleNum: 2456,
                                lackNum: 5,
                                average: 670.3,
                                fullMark: 750,
                                highRun: 710.5,
                                mode: 702.3,
                                median: 71.2,
                            }
                        }, {

                            //重点关注学校
                            view: "bureauEducation/focusSchools/focusSchools",
                            course_id: 1,
                            data:{
                                focusSchoolArr: [{
                                    schoolName: "卧龙",
                                    ranking: 1,
                                    subArr: [
                                        {
                                            key: 0,
                                            subject: "化学",
                                            ranking: "8",
                                            contrast: 6,
                                        },
                                        {
                                            key: 1,
                                            subject: "化学",
                                            ranking: "6",
                                            contrast: 4,
                                        },
                                        {
                                            key: 2,
                                            subject: "化学",
                                            ranking: "7",
                                            contrast: 6,
                                        }
                                    ]
                                }, {
                                    schoolName: "德润国际",
                                    ranking: 5,
                                    subArr: [
                                        {
                                            key: 0,
                                            subject: "化学",
                                            ranking: "8",
                                            contrast: -6,
                                        },
                                        {
                                            key: 1,
                                            subject: "化学",
                                            ranking: "6",
                                            contrast: -4,
                                        },
                                        {
                                            key: 2,
                                            subject: "化学",
                                            ranking: "7",
                                            contrast: "6",
                                        }
                                    ]
                                }],
                            }

                        },
                        {
                            view: "bureauEducation/comparison/comparison",
                            course_id: 1,
                            data:{
                                //学校对比
                                comparisonTitle:'学校对比',//组件名称
                                columnOneTitle: '学校',//第一列的名称
                                columnOneTitleKey: 'schoolName',//第一列的索引
                                columnLastTitle: '总人数|缺考',//最后一列的名称
                                columnLastTitleKey: 'lack',//最后一列的索引
                                comparisonArr: [{
                                    key: 0,
                                    schoolName: "整体",//学校名称
                                    average: 974,//平均分
                                    difference: '/',//均分差
                                    ranking: "/",//排名
                                    standard: 148.25,//标准差,
                                    lack: 10,//缺考
                                    overall: 500//总人数
                                },
                                    {
                                        key: 1,
                                        schoolName: "德润",//学校名称
                                        average: 97,//平均分
                                        difference: -2.5,//均分差
                                        ranking: 1,//排名
                                        standard: 108.25,//标准差
                                        lack: 20,//缺考
                                        overall: 100//总人数
                                    },
                                    {
                                        key: 2,
                                        schoolName: "卧龙",//学校名称
                                        average: 35,//平均分
                                        difference: 0,//均分差
                                        ranking: 2,//排名
                                        standard: 111.25,//标准差
                                        lack: 1,//缺考
                                        overall: 65//总人数
                                    },
                                    {
                                        key: 3,
                                        schoolName: "育才",//学校名称
                                        average: 45,//平均分
                                        difference: 1.5,//均分差
                                        ranking: 3,//排名
                                        standard: 82.25,//标准差
                                        lack: 32,//缺考
                                        overall: 200//总人数
                                    }],
                            }

                        },
                        { //各科平均分
                            view: 'bureauEducation/sectionAverage/sectionAverage',
                            course_id: 1,
                            data:{
                                sectionAverageArr: [
                                    {
                                        key: 0,
                                        subject: '数学',//科目
                                        average: 97.4,//平均分
                                        full: 150,//总分
                                        deviation: 120,//标准差
                                        highest: 148,//最高
                                        lowest: 15,//最低
                                        lack: 10,//缺考
                                        overall: 500//总人数
                                    },
                                    {
                                        key: 1,
                                        subject: '物理',//科目
                                        average: 88,//平均分
                                        full: 100,//总分
                                        deviation: 90,//标准差
                                        highest: 98,//最高
                                        lowest: 55,//最低
                                        lack: 2,//缺考
                                        overall: 600//总人数
                                    },
                                    {
                                        key: 2,
                                        subject: '化学',//科目
                                        average: 85,//平均分
                                        full: 100,//总分
                                        deviation: 80,//标准差
                                        highest: 88,//最高
                                        lowest: 46,//最低
                                        lack: 6,//缺考
                                        overall: 467//总人数
                                    }
                                ],
                            }

                        },
                        { //试卷质量
                            view: "bureauEducation/paperQuality/paperQuality",
                            course_id: 1,
                            data:{
                                paperQualityArr: [{
                                    key: 0,
                                    subject: '语文',//科目
                                    difficulty: 0.55,//难度
                                    degree: 0.43//区分度
                                }, {
                                    key: 1,
                                    subject: '数学',//科目
                                    difficulty: 0.34,//难度
                                    degree: 0.21//区分度
                                }, {
                                    key: 2,
                                    subject: '英语',//科目
                                    difficulty: 0.11,//难度
                                    degree: 0.78//区分度
                                },]
                            }
                        }

                    ]
                }
            ]

        });
        return res.json(data)
    }, 1000)
});
module.exports = router;
