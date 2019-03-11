import * as React from "react";
import {Component} from "react";

type PageOwnProps = {
    bureauEducation: any,
    dispatch: any,
    reportId: any,
}

type PageState = {
    reportId: string | number,
    contentSwitch: number,
    subjectArr: string[],
    teacherJson: any,
    closeSwitch: boolean
}


const hoc = (WrappedComponent: React.ComponentType<{}>): React.ComponentClass<{}> => {
    return class extends Component<PageOwnProps, PageState> {
        constructor(props: any) {
            super(props);
            this.state = {
                reportId: '',
                contentSwitch: 0,//切换概述与教师对比的开关
                subjectArr: [],//科目列表
                teacherJson: {},//教师对比的json
                closeSwitch: false,//缺考名单模态框的开关
            }
        }


        //打开模态框
        public open(): void {
            this.setState({
                closeSwitch: true
            })
        }

        //关闭模态框
        public close(): void {
            this.setState({
                closeSwitch: false
            })
        }

        // 分段器的change事件
        private onChange = (num: number) => {
            this.setState({
                contentSwitch: num
            })
        };

        // //科目导航的点击事件
        private async subNavClick(subjectName: string) {
            if (!this.props.bureauEducation._bureauEducation[1].coures.length || this.props.bureauEducation._bureauEducation.length < 2) {
                return;
            }
            let {dispatch} = this.props;
            await dispatch({
                type: "bureauEducation/changeSubjectName",
                payload: {
                    subjectName
                }
            },);

            for (let child of this.props.bureauEducation._bureauEducation[1].coures) {
                if (child.subject === subjectName) {
                    this.setState({
                        teacherJson: child
                    });
                    break;
                }
            }

        }


        componentWillReceiveProps(nextProps: Readonly<PageOwnProps>): void {
            if (!nextProps.bureauEducation._bureauEducation.length || nextProps.bureauEducation._bureauEducation.length < 2 || nextProps.bureauEducation._bureauEducation[1].name !== "教师对比") {
                return
            }
            //更新dva中的科目名称
            if (!nextProps.bureauEducation._subjectName) {
                this.props.dispatch({
                    type: "bureauEducation/changeSubjectName",
                    payload: {
                        subjectName: nextProps.bureauEducation._bureauEducation[1].coures[0].subject
                    }
                });
            }
            //重组数组
            this.setState({
                subjectArr: nextProps.bureauEducation._bureauEducation[1].coures.reduce((initArr: string[], item: any) => {
                    initArr = [...initArr, item.subject];
                    return initArr
                }, []),
                teacherJson: nextProps.bureauEducation._bureauEducation[1].coures[0]
            })
        }

        async componentDidMount() {
            this.setState({
                reportId: this.props.reportId
            });
            let {dispatch} = this.props;
            await dispatch({
                type: "bureauEducation/queryBureauEducation",
                payload: {
                    reportId: this.state.reportId
                }
            });
        }


        render() {
            const props: object = {
                ...this.props,
                state: this.state,
                open: this.open.bind(this),
                close: this.close.bind(this),
                onChange: this.onChange.bind(this),
                subNavClick: this.subNavClick.bind(this)
            };
            return <WrappedComponent
                {...props}
            />
        }
    }
};

export default hoc as any;


