import * as React from "react";
import {Component} from "react";

type PageOwnProps = {
    location: any,
    dispatch: any,
    history: any,
    app: any,
    match:any
}

type PageState = {
    headTitle: string,//报告的小标题
    reportId: number//报考的id
    reportDom: any
}


const reportHoc = (WrappedComponent: React.ComponentType<{}>): React.ComponentClass<{}> => {
    return class extends Component<PageOwnProps, PageState> {
        constructor(props: any) {
            super(props);
            this.state = {
                headTitle: "全科",
                reportId: -1,
                reportDom: null
            }
        }

        componentDidMount(): void {
            if(this.props.location.state){
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
            this.props.history.push({
                pathname: '/choose_report',
                state: {
                    grade: this.props.location.state.grade,
                    examName: this.props.location.state.examName
                }
            })
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


