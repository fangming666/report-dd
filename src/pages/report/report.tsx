/**
 *报告页面
 * */
import {connect} from "dva";
import * as React from "react";
import {Component} from "react";
import ListHead from "./../../components/listHead/listHead"
import reportHoc from './hoc';
import "./report.scss"
import {Route} from "react-router-dom";
import BureauEducation from "../bureauEducation/bureauEducation";//区县教育局全科
import ExaminationSingle from "../examinationSingle/examinationSingle";//区县教研员（单科）
import Headmaster from "../headmaster/headmaster";//校长全科
import SchoolInstructor from "../schoolInstructor/schoolInstructor";//学校教研员（单科）
import ClassAdviser from "../classAdviser/classAdviser";//班主任全科
import ClassroomTeacher from "../classroomTeacher/classroomTeacher";//任课老师（单科）

type PageOwnProps = {
    state: any,
    app: any,
    match: any,
    history: any,
    goChooseReport: () => any
}

type PageState = {}

@connect(({report, app, bureauEducation}: any) => ({
    report, app, bureauEducation
}))
@reportHoc
class Report extends Component <PageOwnProps, PageState> {
    componentDidMount(): void {
    }

    public render() {

        return (
            <div className={'report-warp'}>
                {/*头部*/}
                <ListHead listHeadTitle={this.props.state.headTitle}>
                    <p className="switching-report float-right" onClick={this.props.goChooseReport}>
                        切换报告
                    </p>
                </ListHead>
                <Route exact path={`${this.props.match.url}/bureauEducation`} component={BureauEducation}
                >
                </Route>
                <Route exact path={`${this.props.match.url}/examinationSingle`} component={ExaminationSingle}>
                </Route>
                <Route exact path={`${this.props.match.url}/headmaster`} component={Headmaster}>
                </Route>
                <Route exact path={`${this.props.match.url}/schoolInstructor`} component={SchoolInstructor}>
                </Route>
                <Route exact path={`${this.props.match.url}/classAdviser`} component={ClassAdviser}>
                </Route>
                <Route exact path={`${this.props.match.url}/classroomTeacher`} component={ClassroomTeacher}>
                </Route>

            </div>
        )
    }
}

export default Report;


