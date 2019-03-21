import * as React from "react";
import {Component} from "react";


type PageOwnProps = {
    location: any,
    dispatch: any,
    choose_report: any,
    history: any,
    app: any,
}

type PageState = {}


const hoc = (WrappedComponent: React.ComponentType<{}>): React.ComponentClass<{}> => {
    return class extends Component<PageOwnProps, PageState> {
        constructor(props: any) {
            super(props)
        }

        //获取报告列表
        async componentDidMount() {
            //修改页面的title
            document.title = `${this.props.location.state.grade} ${this.props.location.state.examName}`;
            let {dispatch} = this.props;
            let {exam_id, group_id} = this.props.location.state;
            try {
                await dispatch({
                    type: "app/changeShelter",
                    payload: {shelter: true}
                });
                await dispatch({
                    type: "choose_report/queryChooseReport",
                    payload: {exam_id, group_id}
                });
                await dispatch({
                    type: "app/changeShelter",
                    payload: {shelter: false}
                });
            } catch (e) {

            }

        }

        //进行选择报告
        opt(...data: any) {
            //parentIndex:父级的index,ownIndex自己的index，这两个参数方便显示选中状态
            //listItem，方便传递id和name
            //parentTitle:父级的标题
            let [parentIndex, ownIndex, listItem, parentTitle] = data;
            let {dispatch} = this.props;
            try {
                dispatch({
                    type: "choose_report/changeIndex",
                    payload: {parentIndex, ownIndex}
                })
            } catch (e) {

            }
            //跳转进报告页面
            let resultAuthority: string = '/report';
            this.props.history.push({
                pathname: resultAuthority,
                state: {
                    title: `${parentTitle === '联考整体报告' ? '联考' : parentTitle}-${listItem.name}`,
                    reportId: listItem.id,//listItem.id
                    grade: this.props.location.state.grade,
                    examName: this.props.location.state.examName,
                    exam_id: this.props.location.state.exam_id,
                    group_id: this.props.location.state.group_id,
                }
            })
        }

        render() {
            const props: object = {
                ...this.props,
                state: this.state,
                opt: this.opt.bind(this)
            };
            return <WrappedComponent
                {...props}
            />
        }
    }
};

export default hoc as any;


