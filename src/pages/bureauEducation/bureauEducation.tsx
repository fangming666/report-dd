/**
 * 区县教育局看到全科报告
 * **/
import * as React from "react";
import {Component} from "react";
import './bureauEducation.scss';
import {connect} from "dva";
import Epitome from "./../../components/epitome/epitome";//考试概括
import FocusSchools from "./../../components/bureauEducation/focusSchools/focusSchools";//重点关注学校
import Comparison from "../../components/bureauEducation/comparison/comparison";//学校对比
import SectionAverage from "./../../components/bureauEducation/sectionAverage/sectionAverage";//各科平均分
import PaperQuality from "./../../components/bureauEducation/paperQuality/paperQuality";//试卷质量
import PubFoot from "../../components/public/pubFoot/pubFoot";//公用底部
import hoc from "./hoc"

type PageOwnProps = {
    bureauEducation: any
}

type PageState = {}


@connect(({bureauEducation}: any) => ({
    bureauEducation
}))
@hoc
class BureauEducation extends Component <PageOwnProps, PageState> {


    public render() {
        return (
            <div>
                {JSON.stringify(this.props.bureauEducation._bureauEducation) !== "{}" &&
                <React.Fragment>
                    <Epitome
                        average={this.props.bureauEducation._bureauEducation.average}
                        averageTitle={"平均分"}
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
                    < FocusSchools focusSchoolArr={this.props.bureauEducation._bureauEducation.focusSchoolArr}>
                    </ FocusSchools>
                    <Comparison comparisonArr={this.props.bureauEducation._bureauEducation.schoolComparisonArr}>
                    </Comparison>
                    <SectionAverage sectionAverageArr={this.props.bureauEducation._bureauEducation.sectionAverageArr}>
                    </SectionAverage>
                    <PaperQuality paperQualityArr={this.props.bureauEducation._bureauEducation.paperQualityArr}>
                    </PaperQuality>
                    <PubFoot>
                    </PubFoot>
                </React.Fragment>
                }
            </div>
        )
    }
}

export default BureauEducation;


