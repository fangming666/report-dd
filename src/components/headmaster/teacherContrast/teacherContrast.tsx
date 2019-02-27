/**
 * 教师对比
 * */
import * as React from "react";
import {Component} from "react";
import "./teacherContrast.scss";
import noTeacherImg2x from "../../../assets/imgs/no-teacher@2x.png";//没上传老师显示的二倍图
import noTeacherImg3x from "../../../assets/imgs/no-teacher@3x.png";//没上传老师显示的三倍图
import Quantization from "../quantization/quantization";//学科分量化
import Comparison from "../../bureauEducation/comparison/comparison";//平均分标准差
import GradeDivide from "../gradeDivide/gradeDivide";//等级划分对比


type PageOwnProps = {
    teacherJson: any,
    bureauEducation: any
}

type PageState = {
    quantizationHighestArr: string[],
    quantizationLowestArr: string[]
}

class TeacherContrast extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            quantizationHighestArr: [],//教师对比量化分最高学生的数组
            quantizationLowestArr: [],//教师对比最低分学生的数组
        }
    }


    componentWillReceiveProps(nextProps: Readonly<PageOwnProps>, nextContext: any): void {
        if (JSON.stringify(nextProps.teacherJson) === "{}") {
            return;
        }
        this.setState({
            quantizationHighestArr: nextProps.teacherJson.quantizationHighestArr,
            quantizationLowestArr: nextProps.teacherJson.quantizationLowestArr,
        })
    }

    public render() {
        return (
            <div className={'teacher-contrast-warp'}>
                {JSON.stringify(this.props.teacherJson) === "{}" ?
                    <div className={'no-teacher'}>
                        <img src={noTeacherImg2x} alt="no-teacher"
                             srcSet={`${noTeacherImg2x} 2x,${noTeacherImg3x} 3x`}/>
                        <p>暂未添加任课教师信息，学校管理员添加后该分析内容可查看。</p>
                    </div>
                    : <div className={'teacher-contrast'}>
                        <Quantization quantizationArr={this.props.teacherJson.quantization} bureauEducation={''}
                                      quantizationHighestArr={this.state.quantizationHighestArr}
                                      quantizationLowestArr={this.state.quantizationLowestArr}
                        >
                        </Quantization>
                        <Comparison
                            comparisonArr={this.props.teacherJson.averageStandard}
                            comparisonTitle={`${this.props.bureauEducation._subjectName}-平均分标准差`}
                            columnOneTitle={'教师'}
                            columnOneTitleKey={'teacher'}
                        >
                        </Comparison>
                        <GradeDivide gradeDivideArr={this.props.teacherJson.divisionContrast} bureauEducation={''}>
                        </GradeDivide>
                    </div>
                }
            </div>
        )
    }
}

export default TeacherContrast;


