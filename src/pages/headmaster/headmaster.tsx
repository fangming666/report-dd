/**
 * 校长全科
 * */
import {connect} from "dva";
import * as React from "react";
import {Component} from "react";
import './headmaster.scss'
import hoc from "./../bureauEducation/hoc"
import Epitome from "./../../components/epitome/epitome";//考试概括
import GoodBaseSubject from "./../../components/headmaster/goodBaseSubject/goodBaseSubject";//优劣学科
import PubSegmentedControl from "../../components/public/pubSegmentedControl/pubSegmentedControl";//分段器
import Comparison from "../../components/bureauEducation/comparison/comparison";//班级对比
import SubjectAverage from "../../components/headmaster/subjectAverage/subjectAverage";//各科平均分
import PubFoot from "../../components/public/pubFoot/pubFoot";//公用底部
import PubNav from "../../components/public/pubNav/pubNav";//公用的科目选择nav
import TeacherContrast from "../../components/headmaster/teacherContrast/teacherContrast"


type PageOwnProps = {
    bureauEducation: any,
    dispatch: any
}

type PageState = {
    contentSwitch: number,
    subjectArr: string[],
    teacherJson: object,

}

@connect(({bureauEducation}: any) => ({
    bureauEducation
}))
@hoc


class Headmaster extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            contentSwitch: 0,//切换概述与教师对比的开关
            subjectArr: [],//科目列表
            teacherJson: {},//教师对比的json
        }
    }

    //分段器的change事件
    private onChange = (num: number) => {
        this.setState({
            contentSwitch: num
        })
    };

    //科目导航的点击事件
    private async subNavClick(subjectName: string) {
        if (!this.props.bureauEducation._bureauEducation.teacherContrast.data.length) {
            return;
        }
        let {dispatch} = this.props;
        await dispatch({
            type: "bureauEducation/changeSubjectName",
            payload: {
                subjectName
            }
        },);

        for (let child of this.props.bureauEducation._bureauEducation.teacherContrast.data) {
            if (child.subject === subjectName) {
                this.setState({
                    teacherJson: child.data
                });
                break;
            }
        }

    }

    //外面大盒子的滚动事件

    componentWillReceiveProps(nextProps: Readonly<PageOwnProps>, nextContext: any): void {
        if (JSON.stringify(nextProps.bureauEducation._bureauEducation) === "{}") {
            return
        }
        //更新dva中的科目名称
        if (!nextProps.bureauEducation._subjectName) {
            this.props.dispatch({
                type: "bureauEducation/changeSubjectName",
                payload: {
                    subjectName: nextProps.bureauEducation._bureauEducation.teacherContrast.data[0].subject
                }
            });
        }
        //重组数组
        this.setState({
            subjectArr: nextProps.bureauEducation._bureauEducation.teacherContrast.data.reduce((initArr: string[], item: any) => {
                initArr = [...initArr, item.subject];
                return initArr
            }, []),
            teacherJson: nextProps.bureauEducation._bureauEducation.teacherContrast.data[0].data
        })
    }


    public render() {
        return (
            <div className={'headmaster'} id={'headmaster'}>
                {JSON.stringify(this.props.bureauEducation._bureauEducation) !== "{}" &&
                <React.Fragment>
                    <PubSegmentedControl
                        values={['概述', '教师对比']}
                        fnChange={this.onChange.bind(this)}
                    >
                    </PubSegmentedControl>
                    {!this.state.contentSwitch ?
                        <React.Fragment>
                            {/*概述*/}
                            <Epitome
                                average={this.props.bureauEducation._bureauEducation.summary.average}
                                averageTitle={"学校平均分"}
                                fullMark={this.props.bureauEducation._bureauEducation.summary.fullMark}
                                lackNum={this.props.bureauEducation._bureauEducation.summary.lackNum}
                                schoolNum={this.props.bureauEducation._bureauEducation.summary.schoolNum}
                                peopleNum={this.props.bureauEducation._bureauEducation.summary.peopleNum}
                                highRun={this.props.bureauEducation._bureauEducation.summary.highRun}
                                examinationAverage={this.props.bureauEducation._bureauEducation.summary.examinationAverage}
                                averageDifference={this.props.bureauEducation._bureauEducation.summary.averageDifference}
                                ranking={this.props.bureauEducation._bureauEducation.summary.ranking}
                                examinationHighRun={this.props.bureauEducation._bureauEducation.summary.examinationHighRun}
                                rankTitle={true}
                                rank={false}>
                            </Epitome>
                            <GoodBaseSubject
                                goodBaseSubjectArr={this.props.bureauEducation._bureauEducation.summary.goodBaseSubjectArr}>
                            </GoodBaseSubject>
                            <Comparison
                                comparisonArr={this.props.bureauEducation._bureauEducation.summary.classComparisonArr}
                                rank={false}
                                comparisonTitle={'班级对比'}
                                columnOneTitle={'班级'}
                                columnOneTitleKey={'className'}
                                columnLastTitle={'班主任'}
                                columnLastTitleKey={'classTeacher'}
                            >
                            </Comparison>
                            <SubjectAverage
                                subjectAverageArr={this.props.bureauEducation._bureauEducation.summary.subjectAverageArr}
                            >
                            </SubjectAverage>
                            <PubFoot>
                            </PubFoot>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            {/*教师对比*/}
                            <PubNav
                                navArr={this.state.subjectArr}
                                subNavClick={this.subNavClick.bind(this)}>
                            </PubNav>
                            <TeacherContrast teacherJson={this.state.teacherJson}
                                             bureauEducation={this.props.bureauEducation}
                            >
                            </TeacherContrast>
                        </React.Fragment>
                    }

                </React.Fragment>}
            </div>
        )
    }
}

export default Headmaster;


