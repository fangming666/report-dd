/**
 * 学校教研员（校长单科）
 * */
import * as React from "react";
import {Component} from "react";
import "./schoolInstructor.scss"
import {connect} from "dva";
import hoc from "./../bureauEducation/hoc"
import Epitome from "./../../components/epitome/epitome";//考试概括
import GradeLine from "./../../components/examinationSigle/gradeLine/gradeLine";//等级分数线及比例
import Comparison from "../../components/bureauEducation/comparison/comparison";//班级对比
import FamousGrade from "./../../components/examinationSigle/famousGrade/famousGrade";//名校各等级分
import PubFoot from "../../components/public/pubFoot/pubFoot";//公用底部


type PageOwnProps = {
    bureauEducation: any,
}

type PageState = {}

@connect(({bureauEducation}: any) => ({
    bureauEducation
}))
@hoc


class SchoolInstructor extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={'schoolInstructor'}>
                {JSON.stringify(this.props.bureauEducation._bureauEducation) !== "{}" &&
                <React.Fragment>
                    {/*概述*/}
                    <Epitome
                        average={this.props.bureauEducation._bureauEducation.average}
                        averageTitle={"学校平均分"}
                        fullMark={this.props.bureauEducation._bureauEducation.fullMark}
                        lackNum={this.props.bureauEducation._bureauEducation.lackNum}
                        schoolNum={this.props.bureauEducation._bureauEducation.schoolNum}
                        peopleNum={this.props.bureauEducation._bureauEducation.peopleNum}
                        highRun={this.props.bureauEducation._bureauEducation.highRun}
                        examinationAverage={this.props.bureauEducation._bureauEducation.examinationAverage}
                        averageDifference={this.props.bureauEducation._bureauEducation.averageDifference}
                        ranking={this.props.bureauEducation._bureauEducation.ranking}
                        examinationHighRun={this.props.bureauEducation._bureauEducation.examinationHighRun}
                        rankTitle={true}
                        rank={false}>
                    </Epitome>
                    <GradeLine gradeLineArr={this.props.bureauEducation._bureauEducation.gradeLineArr}
                               schoolProportionSwitch={true}
                    >
                    </GradeLine>
                    <Comparison
                        comparisonArr={this.props.bureauEducation._bureauEducation.classComparisonArr}
                        rank={false}
                        comparisonTitle={'班级对比'}
                        columnOneTitle={'班级'}
                        columnOneTitleKey={'className'}
                        columnLastTitle={'教师'}
                        columnLastTitleKey={'teacher'}
                    >
                    </Comparison>
                    <FamousGrade famousGradeArr={this.props.bureauEducation._bureauEducation.famousGradeArr}>
                    </FamousGrade>
                    <PubFoot>
                    </PubFoot>
                </React.Fragment>
                }
            </div>
        )
    }
}

export default SchoolInstructor;


