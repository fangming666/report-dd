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
            data: {
                //概述
                summary: {
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
                    //班级对比
                    classComparisonArr: [{
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
                },
                //教师对比
                teacherContrast: {
                    data: [
                        {
                            subject: '语文',//科目名称
                            data: {
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
                                //平均分标准差
                                averageStandard: [{
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
                                    }],
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
                        },
                        {
                            subject: '数学',//科目名称
                            data:
                                {}
                        }
                        ,
                        {
                            subject: '英语',//科目名称
                            data:
                                {
                                    quantizationHighestArr: ['郭靖', '杨过', '郭襄'],//量化分最高的学生数组
                                    quantizationLowestArr:
                                        ['欧阳锋', '洪七公'],//量化分最低的学生数组
                                    //量化
                                    quantization:
                                        [{
                                            name: '郭靖',//姓名
                                            score: 98,//量化分
                                        },
                                            {
                                                name: '杨过',//姓名
                                                score: 94,//量化分
                                            }, {
                                            name: '郭襄',//姓名
                                            score: 92,//量化分
                                        }, {
                                            name: '小龙女',//姓名
                                            score: 85,//量化分
                                        }, {
                                            name: '李莫愁',//姓名
                                            score: 74,//量化分
                                        }, {
                                            name: '欧阳锋',//姓名
                                            score: 68,//量化分
                                        }, {
                                            name: '洪七公',//姓名
                                            score: 32,//量化分
                                        }],
                                    //平均分标准差
                                    averageStandard:
                                        [{
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
                                                teacher: '王阿玲',//教师
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
                                        }],
                                    //划分对比
                                    divisionContrast:
                                        [{
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
                                        },{
                                            name: '张小凡',//姓名
                                            data: [{
                                                grade: 'A',//等级
                                                ratio: 30//比例
                                            }, {
                                                grade: 'B',//等级
                                                ratio: 20//比例
                                            }, {
                                                grade: 'C',//等级
                                                ratio: 10//比例
                                            }, {
                                                grade: 'D',//等级
                                                ratio: 30//比例
                                            }, {
                                                grade: 'E',//等级
                                                ratio: 10//比例
                                            }],
                                        },{
                                            name: '杨过',//姓名
                                            data: [{
                                                grade: 'A',//等级
                                                ratio: 5//比例
                                            }, {
                                                grade: 'B',//等级
                                                ratio: 35//比例
                                            }, {
                                                grade: 'C',//等级
                                                ratio: 40//比例
                                            }, {
                                                grade: 'D',//等级
                                                ratio: 10//比例
                                            }, {
                                                grade: 'E',//等级
                                                ratio: 10//比例
                                            }],
                                        },]
                                }
                        }
                        ,
                        {
                            subject: '物理',//科目名称
                            data:
                                {
                                    quantizationHighestArr: ['张无忌', '杨逍', '范遥'],//量化分最高的学生数组
                                    quantizationLowestArr:
                                        ['周芷若', '陈友谅'],//量化分最低的学生数组
                                    //量化
                                    quantization:
                                        [{
                                            name: '张无忌',//姓名
                                            score: 98,//量化分
                                        },
                                            {
                                                name: '杨逍',//姓名
                                                score: 94,//量化分
                                            }, {
                                            name: '范遥',//姓名
                                            score: 92,//量化分
                                        }, {
                                            name: '赵敏',//姓名
                                            score: 85,//量化分
                                        }, {
                                            name: '谢逊',//姓名
                                            score: 74,//量化分
                                        }, {
                                            name: '周芷若',//姓名
                                            score: 68,//量化分
                                        }, {
                                            name: '陈友谅',//姓名
                                            score: 32,//量化分
                                        }],
                                    //平均分标准差
                                    averageStandard:
                                        [{
                                            key: 0,
                                            teacher: '整体',//教师
                                            average: 934,//均分
                                            difference: "/",//均分差
                                            ranking: "/",//排名
                                            standard: 248.25,//标准差
                                            lack: 13,//缺考人数
                                            overall: 1200//总人数
                                        },
                                            {
                                                key: 1,
                                                teacher: '陈智',//教师
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
                                        }],
                                    //划分对比
                                    divisionContrast:
                                        [{
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
                                        },{
                                            name: '李易峰',//姓名
                                            data: [{
                                                grade: 'A',//等级
                                                ratio: 30//比例
                                            }, {
                                                grade: 'B',//等级
                                                ratio: 20//比例
                                            }, {
                                                grade: 'C',//等级
                                                ratio: 10//比例
                                            }, {
                                                grade: 'D',//等级
                                                ratio: 30//比例
                                            }, {
                                                grade: 'E',//等级
                                                ratio: 10//比例
                                            }],
                                        },{
                                            name: '阿紫',//姓名
                                            data: [{
                                                grade: 'A',//等级
                                                ratio: 5//比例
                                            }, {
                                                grade: 'B',//等级
                                                ratio: 35//比例
                                            }, {
                                                grade: 'C',//等级
                                                ratio: 40//比例
                                            }, {
                                                grade: 'D',//等级
                                                ratio: 10//比例
                                            }, {
                                                grade: 'E',//等级
                                                ratio: 10//比例
                                            }],
                                        },]


                                }
                        }
                        ,
                        {
                            subject: '化学',//科目名称
                            data:
                                {
                                    quantizationHighestArr: ['萧峰', '段誉', '虚竹'],//量化分最高的学生数组
                                    quantizationLowestArr:
                                        ['鸠摩智'],//量化分最低的学生数组
                                    //量化
                                    quantization:
                                        [{
                                            name: '萧峰',//姓名
                                            score: 98,//量化分
                                        },
                                            {
                                                name: '段誉',//姓名
                                                score: 94,//量化分
                                            }, {
                                            name: '虚竹',//姓名
                                            score: 92,//量化分
                                        }, {
                                            name: '丁春秋',//姓名
                                            score: 85,//量化分
                                        }, {
                                            name: '庄聚贤',//姓名
                                            score: 74,//量化分
                                        }, {
                                            name: '慕容复',//姓名
                                            score: 68,//量化分
                                        }, {
                                            name: '鸠摩智',//姓名
                                            score: 32,//量化分
                                        }],
                                    //平均分标准差
                                    averageStandard:
                                        [{
                                            key: 0,
                                            teacher: '整体',//教师
                                            average: 374,//均分
                                            difference: "/",//均分差
                                            ranking: "/",//排名
                                            standard: 111.25,//标准差
                                            lack: 16,//缺考人数
                                            overall: 2400//总人数
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
                                        }],
                                    //划分对比
                                    divisionContrast:
                                        [{
                                            name: '杨幂',//姓名
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
                                        },{
                                            name: '张小凡',//姓名
                                            data: [{
                                                grade: 'A',//等级
                                                ratio: 30//比例
                                            }, {
                                                grade: 'B',//等级
                                                ratio: 20//比例
                                            }, {
                                                grade: 'C',//等级
                                                ratio: 10//比例
                                            }, {
                                                grade: 'D',//等级
                                                ratio: 30//比例
                                            }, {
                                                grade: 'E',//等级
                                                ratio: 10//比例
                                            }],
                                        },{
                                            name: '阿紫',//姓名
                                            data: [{
                                                grade: 'A',//等级
                                                ratio: 5//比例
                                            }, {
                                                grade: 'B',//等级
                                                ratio: 35//比例
                                            }, {
                                                grade: 'C',//等级
                                                ratio: 40//比例
                                            }, {
                                                grade: 'D',//等级
                                                ratio: 10//比例
                                            }, {
                                                grade: 'E',//等级
                                                ratio: 10//比例
                                            }],
                                        },]

                                }
                        }
                        ,
                        {
                            subject: '生物',//科目名称
                            data:
                                {
                                    quantizationHighestArr: ['EZ', '诺克', '盖伦'],//量化分最高的学生数组
                                    quantizationLowestArr:
                                        ['小炮', '大头', '剑姬'],//量化分最低的学生数组
                                    //量化
                                    quantization:
                                        [{
                                            name: 'EZ',//姓名
                                            score: 100,//量化分
                                        },
                                            {
                                                name: '诺克',//姓名
                                                score: 80,//量化分
                                            }, {
                                            name: '盖伦',//姓名
                                            score: 72,//量化分
                                        }, {
                                            name: '剑姬',//姓名
                                            score: 65,//量化分
                                        }, {
                                            name: '小炮',//姓名
                                            score: 54,//量化分
                                        }, {
                                            name: '大头',//姓名
                                            score: 38,//量化分
                                        }],
                                    //平均分标准差
                                    averageStandard:
                                        [{
                                            key: 0,
                                            teacher: '整体',//教师
                                            average: 1074,//均分
                                            difference: "/",//均分差
                                            ranking: "/",//排名
                                            standard: 115.25,//标准差
                                            lack: 33,//缺考人数
                                            overall: 2200//总人数
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
                                        }],
                                    //划分对比
                                    divisionContrast:
                                        [{
                                            name: '陈真',//姓名
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
                                        },{
                                            name: '霍元甲',//姓名
                                            data: [{
                                                grade: 'A',//等级
                                                ratio: 30//比例
                                            }, {
                                                grade: 'B',//等级
                                                ratio: 20//比例
                                            }, {
                                                grade: 'C',//等级
                                                ratio: 10//比例
                                            }, {
                                                grade: 'D',//等级
                                                ratio: 30//比例
                                            }, {
                                                grade: 'E',//等级
                                                ratio: 10//比例
                                            }],
                                        },{
                                            name: '阿紫',//姓名
                                            data: [{
                                                grade: 'A',//等级
                                                ratio: 5//比例
                                            }, {
                                                grade: 'B',//等级
                                                ratio: 35//比例
                                            }, {
                                                grade: 'C',//等级
                                                ratio: 40//比例
                                            }, {
                                                grade: 'D',//等级
                                                ratio: 10//比例
                                            }, {
                                                grade: 'E',//等级
                                                ratio: 10//比例
                                            }],
                                        },]


                                }
                        }
                        ,
                        {
                            subject: '思想与品德',//科目名称
                            data:
                                {
                                    quantizationHighestArr: ['vue', 'react', 'angular'],//量化分最高的学生数组
                                    quantizationLowestArr:
                                        ['wexx'],//量化分最低的学生数组
                                    //量化
                                    quantization:
                                        [{
                                            name: 'vue',//姓名
                                            score: 98,//量化分
                                        },
                                            {
                                                name: 'react',//姓名
                                                score: 94,//量化分
                                            }, {
                                            name: 'angular',//姓名
                                            score: 92,//量化分
                                        }, {
                                            name: 'jquery',//姓名
                                            score: 85,//量化分
                                        }, {
                                            name: 'taro',//姓名
                                            score: 74,//量化分
                                        }, {
                                            name: 'uniApp',//姓名
                                            score: 68,//量化分
                                        }, {
                                            name: 'wexx',//姓名
                                            score: 0,//量化分
                                        }],
                                    //平均分标准差
                                    averageStandard:
                                        [{
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
                                        }],
                                    //划分对比
                                    divisionContrast:
                                        [{
                                            name: '吴京',//姓名
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
                                        },{
                                            name: '张小凡',//姓名
                                            data: [{
                                                grade: 'A',//等级
                                                ratio: 30//比例
                                            }, {
                                                grade: 'B',//等级
                                                ratio: 20//比例
                                            }, {
                                                grade: 'C',//等级
                                                ratio: 10//比例
                                            }, {
                                                grade: 'D',//等级
                                                ratio: 30//比例
                                            }, {
                                                grade: 'E',//等级
                                                ratio: 10//比例
                                            }],
                                        },{
                                            name: '阿紫',//姓名
                                            data: [{
                                                grade: 'A',//等级
                                                ratio: 5//比例
                                            }, {
                                                grade: 'B',//等级
                                                ratio: 35//比例
                                            }, {
                                                grade: 'C',//等级
                                                ratio: 40//比例
                                            }, {
                                                grade: 'D',//等级
                                                ratio: 10//比例
                                            }, {
                                                grade: 'E',//等级
                                                ratio: 10//比例
                                            }],
                                        },]

                                }
                        }
                        ,

                    ]
                }
            }
        });
        return res.json(data)
    }, 1000)
})
;
module.exports = router;