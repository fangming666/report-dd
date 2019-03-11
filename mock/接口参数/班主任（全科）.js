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
            },
            {
                //优劣学科
                view: "headmaster/goodBaseSubject/goodBaseSubject",
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
        "name": "成绩单",
        components: [{
            view: "reportCard/reportCard",
            "course_id": 1,
            data: {
                teacherSwitch:true,//true为班主任,false为任课老师
                reportCardArr:[
                {
                    key: 0,
                    name: "房明",//姓名
                    score: 650,//成绩
                    classRank: 2,//班次
                    schoolRank: 34,//校次
                    grade: '2A1B2C',//等级
                    studentId: 1,//学生ID
                    detailed: [//各科成绩
                        {
                            key: 0,
                            subject: '语文',//科目
                            score: 121,//成绩
                            grade: 'A',//等级
                            schoolRank: 35,//校次
                            classRank: 1,//班次
                        }
                    ]
                }
            ]}//成绩单数组
        }]
    }
];
