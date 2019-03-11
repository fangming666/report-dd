let data = [
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
                        key: 0,//表格列的唯一key，不重复
                        className: "学校",//班级名称
                        average: 974,//平均分
                        difference: '/',//均分差
                        ranking: "/",//排名
                        standard: 148.25,//标准差,
                        lack: 10,//缺考
                        overall: 500//总人数
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
                            school: '整体',//学校名称
                            key: 0,
                            data: [{
                                title: 'A(%)|排名',//列名
                                score: '97.4',//比例
                                ranking: '/',//排名
                            }
                            ],


                        }
                    ]
                }
            },

        ]
    }
];
