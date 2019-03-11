/**
 *报告页面
 * */
import {connect} from "dva";
import * as React from "react";
import {Component} from "react";
import ListHead from "./../../components/listHead/listHead"
import reportHoc from './hoc';
import "./report.scss";
import BureauEducation from "../bureauEducation/bureauEducation";//报告内容组件

type PageOwnProps = {
    state: any,
    app: any,
    match: any,
    history: any,
    location: any,
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
                <BureauEducation
                   reportId={this.props.location.state.reportId}>
                </BureauEducation>

            </div>
        )
    }
}

export default Report;


