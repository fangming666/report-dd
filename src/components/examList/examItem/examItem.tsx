/**
 * 考试列表
 * */
import {PullToRefresh} from "antd-mobile";

import * as React from "react";
import {Component} from "react";
// import ReactDOM from "react-dom"
import {connect} from "dva";
import "./examItem.scss"
import hoc from "./hoc"
import {ExamGradeColor} from "../../../utils/index"
import NoAnnounce from "./../../noAnnounce/noAnnounce"
import PubModel from "../../public/pubModel/pubModel"
// import Test from "./test"

type PageOwnProps = {
    dispatch: any,
    exam_list: any,
    closeOwnModel: () => any,
    toReport: () => any,
    refresh: () => any,
    openReport: () => any,
    ptr: any,
    state: any

}
type PageState = {
    refreshing: boolean,
    height: number,
}

@connect(({exam_list,app}: any) => ({
    exam_list,app
}))
@hoc
class ExamItem extends Component <PageOwnProps, PageState> {

    public render() {
        return (
            <div className={'exam-item-warp'}>
                {this.props.state.announceSwitch ? <NoAnnounce announceText={'成绩暂未发布'}>
                    </NoAnnounce> :
                    this.props.state.modelSwitch &&
                    <PubModel headTitle={'选择查看的报告'} closeModel={this.props.closeOwnModel.bind(this)}>
                        {this.props.state.reportArr.length && this.props.state.reportArr.map((item: any, index: number) => {
                            return <div className={'model-item'} key={index}
                                        onClick={this.props.toReport.bind(this, item.group_id)}>
                                {item.group_name}
                            </div>
                        })}
                    </PubModel>
                }
                //@ts-ignore
                <PullToRefresh
                    className={'exam-item'}
                    style={{
                        height: this.props.state.height,
                        overflow: 'auto',
                    }}
                    ref={el => {
                        // this.props.ptr = el
                    }}
                    indicator={{deactivate: '上拉刷新'}}
                    direction={'up'}
                    refreshing={this.props.state.refreshing}
                    onRefresh={() => {
                        this.props.refresh()
                    }}
                >
                    {this.props.exam_list._examArr.map((item: any, index: number) => {
                        return <div className={'exam clearfix'} key={index}
                                    onClick={this.props.openReport.bind(this, item.status, item.groups, item.gradeLabel, item.title, item.exam_id)}>
                               <span className={"exam-grade float-left"}
                                     style={{background: new ExamGradeColor(+item.grade).give()}}>
                                   {item.gradeLabel}
                               </span>
                            <div className={"exam-message float-left"}>
                                <p className={'exam-name'}>
                                    {item.title}
                                </p>
                                <p className={"clearfix"}>
                                    <span>{item.schoolNum}所学校</span><span>{item.paper_num}个科目</span>
                                    <span className={'float-right'}>{item.exam_time}</span>
                                </p>
                            </div>
                        </div>
                    })}
                </PullToRefresh>

            </div>
        )
    }
}

export default connect(({examList}: any) => ({
    examList
}))(ExamItem);


