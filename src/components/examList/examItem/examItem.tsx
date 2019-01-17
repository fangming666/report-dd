/**
 * 考试列表
 * */
import * as React from "react";
import {Component} from "react";
import ReactDOM from "react-dom"
import {connect} from "dva";
import "./examItem.scss"
import {PullToRefresh} from 'antd-mobile';
import NoAnnounce from "./../../noAnnounce/noAnnounce"

type PageOwnProps = {
    dispatch: any,
    examList: any
}
type PageState = {
    refreshing: boolean,
    height: number,
    announceSwitch: boolean
}


class ExamItem extends Component <PageOwnProps, PageState> {
    private ptr: any;

    constructor(props: any) {
        super(props);
        this.state = {
            refreshing: false,//是否显示刷新状态
            height: document.documentElement.clientHeight,
            announceSwitch: false,//成绩暂未公布的显示开关
        }
    }

    componentDidMount() {
        // @ts-ignore
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop - 57;
        setTimeout(() => this.setState({
            height: hei,
        }), 0);
    }


    //上拉刷新的回调函数
    private refresh() {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        }, 1000);
    }

    //打开报告
    private openReport(...req: any) {
        let [promulgate, reportArr] = req;
        if (!promulgate) {
            this.setState({
                announceSwitch:true
            });
            setTimeout(() =>{
                this.setState({
                    announceSwitch:false
                });
            },1000)
        } else {
            console.log(reportArr)
        }
    }


    public render() {
        // @ts-ignore
        return (
            <div className={'exam-item-warp'}>
                {this.state.announceSwitch && <NoAnnounce announceText={'成绩暂未发布'}>
                </NoAnnounce>}
                // @ts-ignore
                <PullToRefresh
                    className={'exam-item'}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    ref={el => {
                        this.ptr = el
                    }}
                    indicator={{deactivate: '上拉刷新'}}
                    direction={'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.refresh()
                    }}
                >
                    {this.props.examList._examArr.length && this.props.examList._examArr.map((item: any, index: number) => {
                        return <div className={'exam clearfix'} key={index}
                                    onClick={this.openReport.bind(this, item.promulgate, item.report)}>
                               <span className={"exam-grade float-left"} style={{background: item.color}}>
                                   {item.grade}
                               </span>
                            <div className={"exam-message float-left"}>
                                <p className={'exam-name'}>
                                    {item.examName}
                                </p>
                                <p className={"clearfix"}>
                                    <span>{item.schoolNum}所学校</span><span>{item.subjectNum}个科目</span>
                                    <span className={'float-right'}>{item.time}</span>
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


