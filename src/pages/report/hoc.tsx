import * as React from "react";
import {Component} from "react";

type PageOwnProps = {
    location: any,
    dispatch: any,
    history: any,
    app: any,
    match: any
}

type PageState = {
    headTitle: string,//报告的小标题
    reportId: number//报考的id
    reportDom: any
    goChooseSwitch: boolean//跳转选择报告的开关，当点击的时候为true，防止跳转错误
}


const reportHoc = (WrappedComponent: React.ComponentType<{}>): React.ComponentClass<{}> => {
    return class extends Component<PageOwnProps, PageState> {
        constructor(props: any) {
            super(props);
            this.state = {
                headTitle: "全科",
                reportId: -1,
                reportDom: null,
                goChooseSwitch: false
            }
        }

        componentDidMount(): void {
            if (this.props.location.state) {
                //修改页面的title
                document.title = `${this.props.location.state.grade} ${this.props.location.state.examName}`;
                //修改报告的小标题
                this.setState({
                    headTitle: this.props.location.state.title,
                });
            }
        }

        //跳转到选择报告的页面
        goChooseReport(): void {
            this.setState({
                goChooseSwitch: true
            }, () => {
                this.props.history.push({
                    pathname: '/choose_report',
                    state: {
                        grade: this.props.location.state.grade,
                        examName: this.props.location.state.examName,
                        exam_id: this.props.location.state.exam_id,
                        group_id: this.props.location.state.group_id,
                    }
                })
            });
        }

        //回退到列表页，
        componentWillUnmount(): void {
            !this.state.goChooseSwitch &&  this.props.history.push({
                pathname: '/',
            });
        }


        render() {
            const props: object = {
                ...this.props,
                state: this.state,
                goChooseReport: this.goChooseReport.bind(this)
            };
            return <WrappedComponent
                {...props}
            />
        }
    }
};

export default reportHoc as any;


