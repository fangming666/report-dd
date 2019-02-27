/**
 * 联考单科
 * */
import {connect} from "dva";
import * as React from "react";
import {Component} from "react";
import hoc from "../bureauEducation/hoc"
import Epitome from "./../../components/epitome/epitome";//考试概括
import GradeLine from "./../../components/examinationSigle/gradeLine/gradeLine";//等级分数线及比例
import Comparison from "../../components/bureauEducation/comparison/comparison";//学校对比
import FamousGrade from "./../../components/examinationSigle/famousGrade/famousGrade";//名校各等级分
import PubFoot from "../../components/public/pubFoot/pubFoot";//公用底部
type PageOwnProps = {
    bureauEducation: any
}

type PageState = {}

@connect(({bureauEducation}: any) => ({
    bureauEducation
}))
@hoc
class ExaminationSingle extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={'examination-single'}>
                {JSON.stringify(this.props.bureauEducation._bureauEducation) !== "{}" &&
                <React.Fragment>
                    <Epitome
                        average={this.props.bureauEducation._bureauEducation.average}
                        averageTitle={"联考平均分"}
                        fullMark={this.props.bureauEducation._bureauEducation.fullMark}
                        highRun={this.props.bureauEducation._bureauEducation.highRun}
                        lackNum={this.props.bureauEducation._bureauEducation.lackNum}
                        mode={this.props.bureauEducation._bureauEducation.mode}
                        median={this.props.bureauEducation._bureauEducation.median}
                        schoolNum={this.props.bureauEducation._bureauEducation.schoolNum}
                        peopleNum={this.props.bureauEducation._bureauEducation.peopleNum}
                        rankTitle = {true}
                        rank={true}>
                    </Epitome>
                    <GradeLine gradeLineArr={this.props.bureauEducation._bureauEducation.gradeLineArr}>
                    </GradeLine>
                    <Comparison comparisonArr={this.props.bureauEducation._bureauEducation.schoolComparisonArr}>
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

export default ExaminationSingle;


