let data = [
    {
        "name": "班级概述",
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
                //优劣学科
                view: "headmaster/goodBaseSubject/goodBaseSubject",
                //等级分数线及比例
                course_id: 0,
                data: {
                    //优劣学科
                    goodBaseSubjectArr: [
                        {
                            subject: '语文',//科目
                            score: 60//联考分数
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
                view: 'headmaster/subjectAverage/subjectAverage',
                "course_id": 1,
                data: {
                    //各科平均分
                    switch: true,//true为校长，false为班主任
                    subjectAverageArr: [
                        {
                            key: 0,
                            subjectName: '语文',//科目名称
                            schoolAverage: 97.4,//学校均分
                            examinationAverage: 150,//联考均分
                            rate: 0.5,//超均率
                            ranking: 5,//联考名次
                            standard: 121//标准差
                        }
                    ]
                }
            },
        ]
    },
    {
        "name": "教师对比",
        coures: [{
            subject: '语文',//科目名称
            id: "C1",//科目ID
            components: [
                { //量化
                    view: "headmaster/quantization/quantization",
                    "course_id": 1,
                    data:{
                        quantizationHighestArr: ['朱湘', '房明', '甄子丹'],//量化分最高的学生数组
                        quantizationLowestArr: ['蔡徐坤'],//量化分最低的学生数组
                        quantization: [{
                            name: '朱湘',//姓名
                            score: 98,//量化分
                        }],

                    }
                },
                {
                    view:'bureauEducation/comparison/comparison',
                    course_id:1,
                    data:{
                        //平均分标准差
                        comparisonTitle:'-平均分标准差',//组件名称
                        columnOneTitle: '教师',//第一列的名称
                        columnOneTitleKey: 'teacher',//第一列的索引
                        columnLastTitle: '总人数|缺考',//最后一列的名称
                        columnLastTitleKey: 'lack',//最后一列的索引
                        comparisonArr: [{
                            key: 0,
                            teacher: '整体',//教师
                            average: 974,//均分
                            difference: "/",//均分差
                            ranking: "/",//排名
                            standard: 148.25,//标准差
                            lack: 13,//缺考人数
                            overall: 1200//总人数
                        }],
                    }
                }, {
                    view:'headmaster/gradeDivide/gradeDivide',
                    course_id:1,
                    data:{
                        //划分对比
                        divisionContrast: [{
                            name: '朱湘',//姓名
                            data: [{
                                grade: 'A',//等级
                                ratio: 45//比例
                            }, {
                                grade: 'B',//等级
                                ratio: 11//比例
                            }, {
                                grade: 'C',//等级
                                ratio: 10//比例
                            }, {
                                grade: 'D',//等级
                                ratio: 9//比例
                            }, {
                                grade: 'E',//等级
                                ratio: 25//比例
                            }],
                        }]
                    }

                }
            ]
        }]
    }
];
