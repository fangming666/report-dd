let data = [
    {
        "name": "整体概述",
        "components": [
            {
                //考试概括
                "view": "epitome/epitome",
                "course_id": 1,
                "data": {
                    rank:true,//概括内容的显示开关，此时为true，
                    rankTitle:true,//title的显示方式，此时为true
                    "averageTitle": '平均分',//概括的标题
                    "schoolNum": 8,//学校总数量
                    "peopleNum": 2456,//学生总数量
                    "lackNum": 5,//缺考生总数量
                    "average": 670.3,//平均分
                    "fullMark": 750,//满分
                    "highRun": 710.5,//最高分
                    "mode": 702.3,//众数
                    "median": 71.2//中位数
                }
            }
            , {
                //重点关注学校
                "view": "bureauEducation/focusSchools/focusSchools",
                "course_id": 1,
                "data": {
                    //重点关注学校的数组
                    "focusSchoolArr": [{
                        "schoolName": "卧龙",//学校名称
                        "ranking": 1,//学校排名
                        "subArr": [
                            {
                                "key": 0,//不重复唯一值，表格必须
                                "subject": "化学",//科目名称
                                "ranking": "8",//科目排名
                                "contrast": "6"//对比整体
                            }
                        ]
                    }
                    ]
                }
            }
            , {
                //学校对比
                view: "bureauEducation/comparison/comparison",
                "course_id": 1,
                data: {
                    //学校对比
                    comparisonTitle:'学校对比',//组件名称
                    columnOneTitle: '学校',//第一列的名称
                    columnOneTitleKey: 'schoolName',//第一列的索引
                    columnLastTitle: '总人数|缺考',//最后一列的名称
                    columnLastTitleKey: 'lack',//最后一列的索引
                    comparisonArr: [{
                        key: 0,//表格列的唯一key，不重复
                        schoolName: "整体",//学校名称
                        average: 974,//平均分
                        difference: '/',//均分差
                        ranking: "/",//排名
                        standard: 148.25,//标准差,
                        lack: 10,//缺考
                        overall: 500//总人数
                    }],
                }

            },

            { //各科平均分
                view: 'bureauEducation/sectionAverage/sectionAverage',
                "course_id": 1,
                data: {
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
                    ]
                }
            },
            { //试卷质量
                view: "bureauEducation/paperQuality/paperQuality",
                "course_id": 1,
                data: {
                    paperQualityArr: [{
                        key: 0,
                        subject: '语文',//科目
                        difficulty: 0.55,//难度
                        degree: 0.43//区分度
                    }]
                }
            }
        ]
    }
];
