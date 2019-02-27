import * as PropTypes from "prop-types";
import * as React from "react";
import {Component} from "react";
//@ts-ignore
import * as ReactDOM from "react-dom";


type PageOwnProps = {
    exam_list: any,
    location: any
}

type PageState = {
    refreshing: boolean,
    height: number,
    announceSwitch: boolean,
    reportArr: any[],
    modelSwitch: boolean,
    grade: string,
    examName: string
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
                examName: ''//
            }
        }

        componentDidMount() {
            if(ReactDOM.findDOMNode(ptr)){
                //@ts-ignore
                const hei = this.state.height - ReactDOM.findDOMNode(ptr).offsetTop - 57;
                setTimeout(() => this.setState({
                    height: hei,
                }), 0);
            }

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
            let [promulgate, reportArr, grade, examName] = req;
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
                    modelSwitch: true,
                    grade,
                    examName
                });
            }
        }

        //关闭报告模态框
        private closeOwnModel() {
            this.setState({
                modelSwitch: false
            })
        }

        //跳转到选择报告页面
        private toReport(reportId: any) {
            this.context.router.history.push({
                pathname: '/choose_report',
                state: {reportId: reportId, grade: this.state.grade, examName: this.state.examName}
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


