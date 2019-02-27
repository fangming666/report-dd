/**
 * 公用的progress跑马线
 * */
import * as React from "react";
import {Component} from "react";
import "./pubProgress.scss"

type PageOwnProps = {
    userName: string,//姓名
    score: number//分数
    info:string,//斑马线后面的说明
    colorClass?: string//跑马线颜色的类名
}

type PageState = {}


class pubProgress extends Component <PageOwnProps, PageState> {
    static defaultProps = {
        colorClass:'warning-progress'
    };

    public render() {
        return (
            <div className={'pub-progress'}>
                <div>{this.props.userName}</div>
                <div>
                    <div className={'pub-progress-content'}>
                        <div className={`pub-progress-reveal ${this.props.colorClass}`}
                             style={{'width': `${this.props.score}%`}}>
                        </div>
                    </div>
                </div>
                <div>
                    {this.props.info}
                </div>
            </div>
        )
    }
}

export default pubProgress;


