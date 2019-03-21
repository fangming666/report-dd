import * as PropTypes from "prop-types";
import * as React from "react";
import {Component} from "react";
//@ts-ignore
import * as ReactDOM from "react-dom";


type PageOwnProps = {
    exam_list: any,
    location: any,
    dispatch: any,
    app:any
}

type PageState = {
    refreshing: boolean,
    height: number,
    announceSwitch: boolean,
    reportArr: any[],
    modelSwitch: boolean,
    grade: string,
    examName: string,
    exam_id: string | number
}

let ptr: any = null;
const hoc = (WrappedComponent: React.ComponentType<{}>): React.ComponentClass<{}> => {

    return class extends Component<PageOwnProps, PageState> {
        static contextTypes = {
            router: PropTypes.object.isRequired,
        };

        constructor(props: any) {
            super(props);
            this.state = {
                refreshing: false,//是否显示刷新状态
                height: document.documentElement.clientHeight,
                announceSwitch: false,//成绩暂未公布的显示开关
                reportArr: [],//报告列表
                modelSwitch: false,//报告模态框的开关
                grade: '',//年纪
                examName: '',//
                exam_id: '',//考试的ID
            }
        }

        componentDidMount() {
            if (ReactDOM.findDOMNode(ptr)) {
                //@ts-ignore
                const hei = this.state.height - ReactDOM.findDOMNode(ptr).offsetTop - 57;
                setTimeout(() => this.setState({
                    height: hei,
                }), 0);
            }

        }


        //上拉刷新的回调函数
        private async refresh() {
            this.setState({refreshing: true});
            let {dispatch} = this.props;
            try {
                let currPage = this.props.exam_list._currPage;
                await dispatch({
                    type: "exam_list/queryExam",
                    payload: {
                        currPage,
                        initSwitch: false
                    }
                });
                this.setState({refreshing: false});
            } catch (e) {

            }

        }

        //打开报告
        private openReport(...req: any) {
            let [promulgate, reportArr, grade, examName, exam_id] = req;
            if (!promulgate) {
                //报告暂未开放
                this.setState({
                    announceSwitch: true,
                });
                setTimeout(() => {
                    this.setState({
                        announceSwitch: false
                    });
                }, 1000)
            } else {
                //报告开放
                this.setState({
                    reportArr,
                    grade,
                    examName,
                    exam_id
                });
                //当只有一个的时候无需弹窗直接进入选择报告
                if(reportArr.length === 1){
                    this.toReport(reportArr[0].group_id)
                }else{
                    this.setState({
                        modelSwitch: true
                    })
                }
            }
        }

        //关闭报告模态框
        private closeOwnModel() {
            this.setState({
                modelSwitch: false
            })
        }

        //跳转到选择报告页面
        private async toReport(reportId: any) {
            await this.props.dispatch({
                type: "app/changeBack",
                payload: {
                    backSwitch: true
                }
            });
            this.context.router.history.push({
                pathname: `/choose_report`,
                state: {
                    group_id: reportId,
                    grade: this.state.grade,
                    examName: this.state.examName,
                    exam_id: this.state.exam_id
                }
            });
        }


        public render() {
            const props: object = {
                ...this.props,
                ptr: ptr,
                state: this.state,
                refresh: this.refresh.bind(this),
                openReport: this.openReport.bind(this),
                closeOwnModel: this.closeOwnModel.bind(this),
                toReport: this.toReport.bind(this)
            };
            return <WrappedComponent
                {...props}
            >
            </WrappedComponent>
        }
    }
};

export default hoc as any;


