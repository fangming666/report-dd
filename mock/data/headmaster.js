/**
 * 校长全科
 * **/
let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/report/bureauEducation", (req, res) => {
    setTimeout(() => {
        let data = Mock.mock({
            code: 0,
            message: '',
            data: [
                {//概述
                    "name": "概述",
                    "components": [
                        {
                            //考试概括
                            "view": "epitome/epitome",
                            "course_id": 1,
                            "data": {
                                rank: false,//概括内容的显示开关，此时为false，
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
                                //优劣学科
                                goodBaseSubjectArr: [
                                    {
                                        subject: '语文',//科目
                                        score: 60//联考分数
                                    },
                                    {
                                        subject: '数学',//科目
                                        score: 30//联考分数
                                    },
                                    {
                                        subject: '英语',//科目
                                        score: 80//联考分数
                                    },
                                    {
                                        subject: '化学',//科目
                                        score: 20//联考分数
                                    },
                                    {
                                        subject: '物理',//科目
                                        score: 45//联考分数
                                    },
                                    {
                                        subject: '思想与品德',//科目
                                        score: 55//联考分数
                                    }
                                ],
                            }
                        },
                        {
                            //班级对比
                            view: "bureauEducation/comparison/comparison",
                            "course_id": 1,
                            data: {
                                comparisonTitle: '班级对比',//组件名称
                                columnOneTitle: '班级',//第一列的标题
                                columnOneTitleKey: 'className',//第一列的索引key
                                columnLastTitle: '班主任',//最后一列的标题
                                columnLastTitleKey: 'classTeacher',//最后一列的索引key
                                //班级对比
                                comparisonArr: [{
                                    key: 0,
                                    className: "学校",//班级名称
                                    average: 974,//平均分
                                    difference: '/',//均分差
                                    ranking: "/",//排名
                                    standard: 148.25,//标准差,
                                    classTeacher: "/",//班主任
                                },
                                    {
                                        key: 1,
                                        className: "1班",//学校名称
                                        average: 97,//平均分
                                        difference: -2.5,//均分差
                                        ranking: 1,//排名
                                        standard: 108.25,//标准差
                                        classTeacher: "王晓亮",//班主任
                                    },
                                    {
                                        key: 2,
                                        className: "2班",//学校名称
                                        average: 97,//平均分
                                        difference: 2.5,//均分差
                                        ranking: 1,//排名
                                        standard: 108.25,//标准差
                                        classTeacher: "房明",//班主任
                                    },
                                ],
                            }

                        },
                        {

                            view: 'headmaster/subjectAverage/subjectAverage',
                            "course_id": 1,
                            data: {
                                //各科平均分
                                subjectAverageArr: [
                                    {
                                        key: 0,
                                        subjectName: '语文',//科目名称
                                        schoolAverage: 97.4,//学校均分
                                        examinationAverage: 150,//联考均分
                                        rate: 0.5,//超均率
                                        ranking: 5,//联考名次
                                        standard: 121//标准差
                                    },
                                    {
                                        key: 1,
                                        subjectName: '数学',//科目名称
                                        schoolAverage: 85.6,//学校均分
                                        examinationAverage: 140,//联考均分
                                        rate: 0,//超均率
                                        ranking: 2,//联考名次
                                        standard: 111//标准差
                                    },
                                    {
                                        key: 2,
                                        subjectName: '英语',//科目名称
                                        schoolAverage: 78,//学校均分
                                        examinationAverage: 130,//联考均分
                                        rate: -0.2,//超均率
                                        ranking: 3,//联考名次
                                        standard: 151//标准差
                                    }
                                ]
                            }
                        }]
                },
                {//教师对比
                    "name": "教师对比",
                    coures: [
                        {
                            subject: '语文',//科目名称
                            components: [{
                                view: "headmaster/quantization/quantization",
                                "course_id": 1,
                                data:{
                                    //量化
                                    quantization: [{
                                        name: '朱湘',//姓名
                                        score: 98,//量化分
                                    },
                                        {
                                            name: '房明',//姓名
                                            score: 94,//量化分
                                        }, {
                                            name: '甄子丹',//姓名
                                            score: 92,//量化分
                                        }, {
                                            name: '胡歌',//姓名
                                            score: 85,//量化分
                                        }, {
                                            name: '李连杰',//姓名
                                            score: 74,//量化分
                                        }, {
                                            name: '胡一天',//姓名
                                            score: 68,//量化分
                                        }, {
                                            name: '蔡徐坤',//姓名
                                            score: 32,//量化分
                                        }],
                                    quantizationHighestArr: ['朱湘', '房明', '甄子丹'],//量化分最高的学生数组
                                    quantizationLowestArr: ['蔡徐坤'],//量化分最低的学生数组
                                }

                            }, {
                                view:'bureauEducation/comparison/comparison',
                                course_id:1,
                                data:{
                                    comparisonTitle:'-平均分标准差',//组件名称
                                    columnOneTitle: '教师',//第一列的名称
                                    columnOneTitleKey: 'teacher',//第一列的索引
                                    columnLastTitle: '总人数|缺考',//最后一列的名称
                                    columnLastTitleKey: 'lack',//最后一列的索引

                                    //平均分标准差
                                    comparisonArr: [{
                                        key: 0,
                                        teacher: '整体',//教师
                                        average: 974,//均分
                                        difference: "/",//均分差
                                        ranking: "/",//排名
                                        standard: 148.25,//标准差
                                        lack: 13,//缺考人数
                                        overall: 1200//总人数
                                    },
                                        {
                                            key: 1,
                                            teacher: '王玲',//教师
                                            average: 890.5,//均分
                                            difference: -2.5,//均分差
                                            ranking: 1,//排名
                                            standard: 115.35,//标准差
                                            lack: 3,//缺考人数
                                            overall: 120//总人数
                                        },
                                        {
                                            key: 2,
                                            teacher: '王玲玉',//教师
                                            average: 497.5,//均分
                                            difference: 2.5,//均分差
                                            ranking: 2,//排名
                                            standard: 85.7,//标准差
                                            lack: 50,//缺考人数
                                            overall: 850//总人数
                                        }, {
                                            key: 3,
                                            teacher: '李强',//教师
                                            average: 98.5,//均分
                                            difference: 0,//均分差
                                            ranking: 4,//排名
                                            standard: 115.35,//标准差
                                            lack: 65,//缺考人数
                                            overall: 900//总人数
                                        }]}
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
                                    }, {
                                        name: '房明',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 15//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 40//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 30//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 5//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }, {
                                        name: '乔峰',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 38//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 12//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 20//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 20//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }, {
                                        name: '段誉',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 36//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 34//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 10//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 10//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }]
                                }
                                }


                            ]
                        },
                        {
                            subject: '数学',//科目名称
                            components: []
                        },
                        {
                            subject: '物理',//科目名称
                            components: [{
                                view: "headmaster/quantization/quantization",
                                "course_id": 1,
                                data:{
                                    //量化
                                    quantization: [{
                                        name: '阿紫',//姓名
                                        score: 98,//量化分
                                    },
                                        {
                                            name: '乔峰',//姓名
                                            score: 94,//量化分
                                        }, {
                                            name: '段誉',//姓名
                                            score: 92,//量化分
                                        }, {
                                            name: '虚竹',//姓名
                                            score: 85,//量化分
                                        }, {
                                            name: '李连杰',//姓名
                                            score: 74,//量化分
                                        }, {
                                            name: '胡一天',//姓名
                                            score: 68,//量化分
                                        }, {
                                            name: '蔡徐坤',//姓名
                                            score: 32,//量化分
                                        }],
                                    quantizationHighestArr: ['朱湘', '甄子丹'],//量化分最高的学生数组
                                    quantizationLowestArr: ['吴亦凡'],//量化分最低的学生数组
                                }

                            }, {
                                view:'bureauEducation/comparison/comparison',
                                course_id:1,
                                data:{
                                    comparisonTitle:'-平均分标准差',//组件名称
                                    columnOneTitle: '教师',//第一列的名称
                                    columnOneTitleKey: 'teacher',//第一列的索引
                                    columnLastTitle: '总人数|缺考',//最后一列的名称
                                    columnLastTitleKey: 'lack',//最后一列的索引
                                    //平均分标准差
                                    comparisonArr: [{
                                        key: 0,
                                        teacher: '整体',//教师
                                        average: 974,//均分
                                        difference: "/",//均分差
                                        ranking: "/",//排名
                                        standard: 148.25,//标准差
                                        lack: 13,//缺考人数
                                        overall: 1200//总人数
                                    },
                                        {
                                            key: 1,
                                            teacher: '呼啦啦',//教师
                                            average: 890.5,//均分
                                            difference: -2.5,//均分差
                                            ranking: 1,//排名
                                            standard: 115.35,//标准差
                                            lack: 3,//缺考人数
                                            overall: 120//总人数
                                        },
                                        {
                                            key: 2,
                                            teacher: '王玲玉',//教师
                                            average: 497.5,//均分
                                            difference: 2.5,//均分差
                                            ranking: 2,//排名
                                            standard: 85.7,//标准差
                                            lack: 50,//缺考人数
                                            overall: 850//总人数
                                        }, {
                                            key: 3,
                                            teacher: '李强',//教师
                                            average: 98.5,//均分
                                            difference: 0,//均分差
                                            ranking: 4,//排名
                                            standard: 115.35,//标准差
                                            lack: 65,//缺考人数
                                            overall: 900//总人数
                                        }]}
                            }, {
                                view:'headmaster/gradeDivide/gradeDivide',
                                course_id:1,
                                data:{
                                    //划分对比
                                    divisionContrast: [{
                                        name: '阿紫',//姓名
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
                                    }, {
                                        name: '阿訇',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 15//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 40//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 30//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 5//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }, {
                                        name: '乔峰',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 38//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 12//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 20//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 20//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }, {
                                        name: '段誉',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 36//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 34//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 10//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 10//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }]
                                }
                            }


                            ]
                        },
                        {
                            subject: '思想与品德',//科目名称
                            components: [{
                                view: "headmaster/quantization/quantization",
                                "course_id": 1,
                                data:{
                                    //量化
                                    quantization: [{
                                        name: '朱湘',//姓名
                                        score: 98,//量化分
                                    },
                                        {
                                            name: '房明',//姓名
                                            score: 94,//量化分
                                        }, {
                                            name: '甄子丹',//姓名
                                            score: 92,//量化分
                                        }, {
                                            name: '胡歌',//姓名
                                            score: 85,//量化分
                                        }, {
                                            name: '李连杰',//姓名
                                            score: 74,//量化分
                                        }, {
                                            name: '胡一天',//姓名
                                            score: 68,//量化分
                                        }, {
                                            name: '蔡徐坤',//姓名
                                            score: 32,//量化分
                                        }],
                                    quantizationHighestArr: ['朱湘', '房明', '甄子丹'],//量化分最高的学生数组
                                    quantizationLowestArr: ['蔡徐坤'],//量化分最低的学生数组
                                }

                            }, {
                                view:'bureauEducation/comparison/comparison',
                                course_id:1,
                                data:{
                                    comparisonTitle:'-平均分标准差',//组件名称
                                    columnOneTitle: '教师',//第一列的名称
                                    columnOneTitleKey: 'teacher',//第一列的索引
                                    columnLastTitle: '总人数|缺考',//最后一列的名称
                                    columnLastTitleKey: 'lack',//最后一列的索引
                                    //平均分标准差
                                    comparisonArr: [{
                                        key: 0,
                                        teacher: '整体',//教师
                                        average: 974,//均分
                                        difference: "/",//均分差
                                        ranking: "/",//排名
                                        standard: 148.25,//标准差
                                        lack: 13,//缺考人数
                                        overall: 1200//总人数
                                    },
                                        {
                                            key: 1,
                                            teacher: '王玲',//教师
                                            average: 890.5,//均分
                                            difference: -2.5,//均分差
                                            ranking: 1,//排名
                                            standard: 115.35,//标准差
                                            lack: 3,//缺考人数
                                            overall: 120//总人数
                                        },
                                        {
                                            key: 2,
                                            teacher: '王玲玉',//教师
                                            average: 497.5,//均分
                                            difference: 2.5,//均分差
                                            ranking: 2,//排名
                                            standard: 85.7,//标准差
                                            lack: 50,//缺考人数
                                            overall: 850//总人数
                                        }, {
                                            key: 3,
                                            teacher: '李强',//教师
                                            average: 98.5,//均分
                                            difference: 0,//均分差
                                            ranking: 4,//排名
                                            standard: 115.35,//标准差
                                            lack: 65,//缺考人数
                                            overall: 900//总人数
                                        }]}
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
                                    }, {
                                        name: '房明',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 15//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 40//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 30//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 5//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }, {
                                        name: '乔峰',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 38//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 12//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 20//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 20//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }, {
                                        name: '段誉',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 36//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 34//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 10//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 10//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }]
                                }
                            }


                            ]
                        },
                        {
                            subject: '化学',//科目名称
                            components: []
                        },
                        {
                            subject: '地理',//科目名称
                            components: [{
                                view: "headmaster/quantization/quantization",
                                "course_id": 1,
                                data:{
                                    //量化
                                    quantization: [{
                                        name: '朱湘',//姓名
                                        score: 98,//量化分
                                    },
                                        {
                                            name: '房明',//姓名
                                            score: 94,//量化分
                                        }, {
                                            name: '甄子丹',//姓名
                                            score: 92,//量化分
                                        }, {
                                            name: '胡歌',//姓名
                                            score: 85,//量化分
                                        }, {
                                            name: '李连杰',//姓名
                                            score: 74,//量化分
                                        }, {
                                            name: '胡一天',//姓名
                                            score: 68,//量化分
                                        }, {
                                            name: '蔡徐坤',//姓名
                                            score: 32,//量化分
                                        }],
                                    quantizationHighestArr: ['朱湘', '房明', '甄子丹'],//量化分最高的学生数组
                                    quantizationLowestArr: ['蔡徐坤'],//量化分最低的学生数组
                                }

                            }, {
                                view:'bureauEducation/comparison/comparison',
                                course_id:1,
                                data:{
                                    comparisonTitle:'-平均分标准差',//组件名称
                                    columnOneTitle: '教师',//第一列的名称
                                    columnOneTitleKey: 'teacher',//第一列的索引
                                    columnLastTitle: '总人数|缺考',//最后一列的名称
                                    columnLastTitleKey: 'lack',//最后一列的索引
                                    //平均分标准差
                                    comparisonArr: [{
                                        key: 0,
                                        teacher: '整体',//教师
                                        average: 974,//均分
                                        difference: "/",//均分差
                                        ranking: "/",//排名
                                        standard: 148.25,//标准差
                                        lack: 13,//缺考人数
                                        overall: 1200//总人数
                                    },
                                        {
                                            key: 1,
                                            teacher: '王玲',//教师
                                            average: 890.5,//均分
                                            difference: -2.5,//均分差
                                            ranking: 1,//排名
                                            standard: 115.35,//标准差
                                            lack: 3,//缺考人数
                                            overall: 120//总人数
                                        },
                                        {
                                            key: 2,
                                            teacher: '王玲玉',//教师
                                            average: 497.5,//均分
                                            difference: 2.5,//均分差
                                            ranking: 2,//排名
                                            standard: 85.7,//标准差
                                            lack: 50,//缺考人数
                                            overall: 850//总人数
                                        }, {
                                            key: 3,
                                            teacher: '李强',//教师
                                            average: 98.5,//均分
                                            difference: 0,//均分差
                                            ranking: 4,//排名
                                            standard: 115.35,//标准差
                                            lack: 65,//缺考人数
                                            overall: 900//总人数
                                        }]}
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
                                    }, {
                                        name: '房明',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 15//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 40//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 30//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 5//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }, {
                                        name: '乔峰',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 38//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 12//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 20//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 20//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }, {
                                        name: '段誉',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 36//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 34//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 10//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 10//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }]
                                }
                            }


                            ]
                        },
                        {
                            subject: '英语',//科目名称
                            components: []
                        },
                        {
                            subject: '科学',//科目名称
                            components: [{
                                view: "headmaster/quantization/quantization",
                                "course_id": 1,
                                data:{
                                    //量化
                                    quantization: [{
                                        name: '朱湘',//姓名
                                        score: 98,//量化分
                                    },
                                        {
                                            name: '房明',//姓名
                                            score: 94,//量化分
                                        }, {
                                            name: '甄子丹',//姓名
                                            score: 92,//量化分
                                        }, {
                                            name: '胡歌',//姓名
                                            score: 85,//量化分
                                        }, {
                                            name: '李连杰',//姓名
                                            score: 74,//量化分
                                        }, {
                                            name: '胡一天',//姓名
                                            score: 68,//量化分
                                        }, {
                                            name: '蔡徐坤',//姓名
                                            score: 32,//量化分
                                        }],
                                    quantizationHighestArr: ['朱湘', '房明', '甄子丹'],//量化分最高的学生数组
                                    quantizationLowestArr: ['蔡徐坤'],//量化分最低的学生数组
                                }

                            }, {
                                view:'bureauEducation/comparison/comparison',
                                course_id:1,
                                data:{
                                    comparisonTitle:'-平均分标准差',//组件名称
                                    columnOneTitle: '教师',//第一列的名称
                                    columnOneTitleKey: 'teacher',//第一列的索引
                                    columnLastTitle: '总人数|缺考',//最后一列的名称
                                    columnLastTitleKey: 'lack',//最后一列的索引
                                    //平均分标准差
                                    comparisonArr: [{
                                        key: 0,
                                        teacher: '整体',//教师
                                        average: 974,//均分
                                        difference: "/",//均分差
                                        ranking: "/",//排名
                                        standard: 148.25,//标准差
                                        lack: 13,//缺考人数
                                        overall: 1200//总人数
                                    },
                                        {
                                            key: 1,
                                            teacher: '王玲',//教师
                                            average: 890.5,//均分
                                            difference: -2.5,//均分差
                                            ranking: 1,//排名
                                            standard: 115.35,//标准差
                                            lack: 3,//缺考人数
                                            overall: 120//总人数
                                        },
                                        {
                                            key: 2,
                                            teacher: '王玲玉',//教师
                                            average: 497.5,//均分
                                            difference: 2.5,//均分差
                                            ranking: 2,//排名
                                            standard: 85.7,//标准差
                                            lack: 50,//缺考人数
                                            overall: 850//总人数
                                        }, {
                                            key: 3,
                                            teacher: '李强',//教师
                                            average: 98.5,//均分
                                            difference: 0,//均分差
                                            ranking: 4,//排名
                                            standard: 115.35,//标准差
                                            lack: 65,//缺考人数
                                            overall: 900//总人数
                                        }]}
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
                                    }, {
                                        name: '房明',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 15//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 40//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 30//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 5//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }, {
                                        name: '乔峰',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 38//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 12//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 20//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 20//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }, {
                                        name: '段誉',//姓名
                                        data: [{
                                            grade: 'A',//等级
                                            ratio: 36//比例
                                        }, {
                                            grade: 'B',//等级
                                            ratio: 34//比例
                                        }, {
                                            grade: 'C',//等级
                                            ratio: 10//比例
                                        }, {
                                            grade: 'D',//等级
                                            ratio: 10//比例
                                        }, {
                                            grade: 'E',//等级
                                            ratio: 10//比例
                                        }],
                                    }]
                                }
                            }


                            ]
                        },
                        {
                            subject: '数学',//科目名称
                            components: []
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
