/**
 * 考试列表为空
 * */
import * as React from "react";
import {Component} from "react";
import "./noExam.scss";
import noExamImg from "./../../../assets/imgs/no-exam.png"


type PageOwnProps = {
    noExamText:string,
    noExamHeight:any
}

type PageState = {}


class NoExam extends Component <PageOwnProps, PageState> {
    static defaultProps = {
        noExamText: '当前暂无考试',
        noExamHeight:"calc(100vh - 57px)"
    };
    public render() {
        return (
            <div className={'no-exam'} style={{height:this.props.noExamHeight}}>
                <img src={noExamImg} alt="no-exam"/>
                <p>{this.props.noExamText}</p>
            </div>
        )
    }
}

export default NoExam;


