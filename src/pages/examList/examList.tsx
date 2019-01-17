/**
 * 考试列表页面
 * */
import * as PropTypes from "prop-types";
import * as React from "react";
import {Component} from "react";
import './examList.scss';
import {connect} from "dva";
import ListHead from "./../../components/listHead/listHead"
import ExamItem from "./../../components/examList/examItem/examItem"
import IndividualImg from "./../../assets/imgs/Individual.svg";
import IndividualClickImg from "./../../assets/imgs/Individual-click.svg";

type PageOwnProps = {
    app: any,
    dispatch: any,
    examList: any
}

type PageState = {
    IndividualImgSrc: string
}


class ExamList extends Component <PageOwnProps, PageState> {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            IndividualImgSrc: IndividualImg
        }
    }

    public async componentDidMount() {
        let {dispatch} = this.props;
        await dispatch({
            type: "examList/queryExam",
            payload: {}
        });
    }

    //跳转到个人中心页面
    private goIndividual() {
        this.context.router.history.push({pathname: '/individual'});
    }

    //改变个人中心图标的路径
    private changeIndividualImg(result: boolean) {
        this.setState({
            IndividualImgSrc: result ? IndividualClickImg : IndividualImg
        })
    }

    public render() {
        return (
            <div className={'exam-list'}>
                {/*头部信息*/}
                <ListHead listHeadTitle={'考试列表'}>
                  <span className={'individual-icon float-right'}>
                    <img src={this.state.IndividualImgSrc} alt="个人中心"
                         onTouchStart={this.changeIndividualImg.bind(this, true)}
                         onTouchEnd={this.changeIndividualImg.bind(this, false)}
                         onClick={this.goIndividual.bind(this)}/>
                </span>
                </ListHead>
                <ExamItem>
                </ExamItem>
            </div>
        )
    }
}

export default connect(({app, examList}: any) => ({
    app, examList
}))(ExamList);


