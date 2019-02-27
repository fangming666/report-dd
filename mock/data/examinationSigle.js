/**
 * 区县教研员单科
 * **/
let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/report/bureauEducation", (req, res) => {
    setTimeout(() => {
        let data = Mock.mock({
            code: 0,
            message: '',
            data: {
                schoolNum: 8,
                peopleNum: 2456,
                lackNum: 5,
                average: 99.2,
                fullMark: 750,
                highRun: 710.5,
                mode: 702.3,
                median: 71.2,
                //学校对比
                schoolComparisonArr: [{
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
                //等级分数线及比例
                gradeLineArr: [
                    {
                        score: '[100,120]',//分数线
                        people: 132,//人数
                        scale: 15,//比例
                        grade: "A",//等级
                        key: 0
                    },
                    {
                        score: '[82,100)',//分数线
                        people: 82,//人数
                        scale: 32,//比例
                        grade: "B",//等级
                        key: 1
                    },
                    {
                        score: '[41,820)',//分数线
                        people: 32,//人数
                        scale: 17.2,//比例
                        grade: "C",//等级
                        key: 2
                    },
                    {
                        score: '[17.0,41.0)',//分数线
                        people: 56,//人数
                        scale: 17.8,//比例
                        grade: "D",//等级
                        key: 3
                    },
                    {
                        score: '[0,17.0)',//分数线
                        people: 82,//人数
                        scale: 18,//比例
                        grade: "E",//等级
                        key: 4
                    },
                ],
                //各校等级划分
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
        });
        return res.json(data)
    }, 1000)
});
module.exports = router;