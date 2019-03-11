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
                //等级分数线
                view: "classroomTeacher/gradeFractional/gradeFractional",
                course_id: 0,
                data: {
                    //等级分数线
                    gradeFractionalArr: [{
                        key: 0,
                        grade: "A",//等级
                        scope: '[101.0,120]',//分数线范围
                        standard: 97.4,//班级达标比例
                        school: 150,//校比例
                        rank: 5,//排名
                        peopleNum: 8,//人数
                        peopleArr: ['房明', '马云', '马化腾', '王健林', '张小龙', '王思聪', '王磊', '雷军']//达标人名单
                    }]
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
                teacherSwitch: false,//true为班主任,false为任课老师
                reportCardArr: [
                    {
                        key: 0,
                        name: "房明",//姓名
                        score: 650,//成绩
                        classRank: 2,//班次
                        schoolRank: 34,//校次
                        grade: 'A',//等级
                        studentId: 1,//学生ID
                    }
                ]
            }//成绩单数组
        }]
    }
];
