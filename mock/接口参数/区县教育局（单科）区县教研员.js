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
                    "averageTitle": '联考平均分',//概括的标题
                    "schoolNum": 8,//学校总数量
                    "peopleNum": 2456,//学生总数量
                    "lackNum": 5,//缺考生总数量
                    "average": 670.3,//平均分
                    "fullMark": 750,//满分
                    "highRun": 710.5,//最高分
                    "mode": 702.3,//众数
                    "median": 71.2//中位数
                }
            },
            {
                //等级分数线及比例
                view: "examinationSigle/gradeLine/gradeLine",
                //等级分数线及比例
                course_id: 0,
                schoolProportionSwitch:false,//区县单科为ｆａｌｓｅ
                data: {
                    gradeLineArr: [
                        {
                            score: '[100,120]',//分数线
                            people: 132,//人数
                            scale: 15,//比例
                            grade: "A",//等级
                            key: 0
                        }
                    ],
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

            {
                view: 'examinationSigle/famousGrade/famousGrade',
                "course_id": 1,
                data: {
                    viewTitle:'各校等级划分',//组件名称
                    //各校等级划分
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
