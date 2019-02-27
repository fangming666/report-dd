/**
 * 考试列表页面
 * */
import * as React from "react";
import {Component} from "react";
import './exam_list.scss';
import {connect} from "dva";
import hoc from "./hoc"
import ListHead from "./../../components/listHead/listHead"
import ExamItem from "./../../components/examList/examItem/examItem"
import NoExam from "./../../components/examList/noExam/noExam"


type PageOwnProps = {
    state: any,
    changeIndividualImg: () => void,
    goIndividual: () => void,
    exam_list: any
}

type PageState = {}

@connect(({app, exam_list}: any) => ({
    app, exam_list
}))
@hoc

class Exam_list extends Component <PageOwnProps, PageState> {


    public render() {
        return (
            <div className={'exam-list'}>
                {/*头部信息*/}
                <ListHead listHeadTitle={'考试列表'}>
                  <span className={'individual-icon float-right'}>
                    <img src={this.props.state.IndividualImgSrc} alt="个人中心"
                         onTouchStart={this.props.changeIndividualImg.bind(this, true)}
                         onTouchEnd={this.props.changeIndividualImg.bind(this, false)}
                         onClick={this.props.goIndividual.bind(this)}/>
                </span>
                </ListHead>
                {this.props.exam_list._examArr.length ?
                    // 考试列表
                    <ExamItem>
                    </ExamItem> :
                    // 考试列表为空
                    <NoExam>
                    </NoExam>}
            </div>
        )
    }
}

export default Exam_list;


