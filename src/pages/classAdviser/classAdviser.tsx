/**
 * 班主任（全科）
 * **/
import * as React from "react";
import {Component} from "react";
import "./classAdviser.scss"
import {connect} from "dva";
import hoc from "../bureauEducation/hoc";
//分段器
import PubSegmentedControl from "../../components/public/pubSegmentedControl/pubSegmentedControl";
//概述
import Epitome from "./../../components/epitome/epitome";
import PubModel from "../../components/public/pubModel/pubModel";//缺考名单的模态框
import GoodBaseSubject from "./../../components/headmaster/goodBaseSubject/goodBaseSubject";//优劣学科
import SubjectAverage from "../../components/headmaster/subjectAverage/subjectAverage";//各科平均分
import ReportCard from "../../components/reportCard/reportCard";//成绩单
import PubFoot from "../../components/public/pubFoot/pubFoot";//公用底部

type PageOwnProps = {
    bureauEducation: any,
    lackArr: string[]
}

type PageState = {
    contentSwitch: number,
    closeSwitch: boolean
}


@connect(({bureauEducation}: any) => ({
    bureauEducation
}))
@hoc

class ClassAdviser extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            contentSwitch: 0,//切换班级概述与成绩单的开关
            closeSwitch: false,//缺考名单模态框的开关
        }
    }

    //分段器的change事件
    private onChange = (num: number) => {
        this.setState({
            contentSwitch: num
        })
    };

    //打开模态框
    public open(): void {
        this.setState({
            closeSwitch: true
        })
    }

    //关闭模态框
    public close(): void {
        this.setState({
            closeSwitch: false
        })
    }


    public render() {
        return (
            <div className={'class-adviser'}>
                {JSON.stringify(this.props.bureauEducation._bureauEducation) !== "{}" &&
                <React.Fragment>
                    <PubSegmentedControl
                        values={['班级概述', '成绩单']}
                        fnChange={this.onChange.bind(this)}
                    >
                    </PubSegmentedControl>
                    {!this.state.contentSwitch ?
                        <React.Fragment>
                            {/*班级概述*/}
                            <Epitome
                                openModal={this.open.bind(this)}
                                classPeopleNum={this.props.bureauEducation._bureauEducation.summary.classPeopleNum}
                                average={this.props.bureauEducation._bureauEducation.summary.average}
                                classNum={this.props.bureauEducation._bureauEducation.summary.classNum}
                                averageTitle={"班级平均分"}
                                fullMark={this.props.bureauEducation._bureauEducation.summary.fullMark}
                                lackNum={this.props.bureauEducation._bureauEducation.summary.lackNum}
                                highRun={this.props.bureauEducation._bureauEducation.summary.highRun}
                                schoolAverage={this.props.bureauEducation._bureauEducation.summary.schoolAverage}
                                averageDifference={this.props.bureauEducation._bureauEducation.summary.averageDifference}
                                ranking={this.props.bureauEducation._bureauEducation.summary.ranking}
                                examinationHighRun={this.props.bureauEducation._bureauEducation.summary.examinationHighRun}
                                rankTitle={false}
                                rank={false}>
                            </Epitome>
                            {this.state.closeSwitch ? <PubModel closeModel={this.close.bind(this)} headTitle={'缺考名单'}>
                                <p className={'lack-modal'}>
                                    {this.props.bureauEducation._bureauEducation.summary.lackArr.length &&
                                    this.props.bureauEducation._bureauEducation.summary.lackArr.map((item: string, index: number) =>
                                        <span key={index} className={'lack-item'}>{item}</span>)}
                                </p>
                            </PubModel> : null}
                            <GoodBaseSubject
                                goodBaseSubjectArr={this.props.bureauEducation._bureauEducation.summary.goodBaseSubjectArr}>
                            </GoodBaseSubject>
                            <SubjectAverage
                                subjectAverageArr={this.props.bureauEducation._bureauEducation.summary.subjectAverageArr}
                                switch={false}
                            >
                            </SubjectAverage>
                            <PubFoot>
                            </PubFoot>
                        </React.Fragment>
                        : <React.Fragment>
                            {/*成绩单*/}
                            <ReportCard reportCardArr={this.props.bureauEducation._bureauEducation.reportCard}>
                            </ReportCard>
                        </React.Fragment>
                    }
                </React.Fragment>
                }
            </div>
        )
    }
}

export default ClassAdviser;


