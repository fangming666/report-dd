/**
 * 教师对比
 * */
import * as React from "react";
import {Component} from "react";
import "./teacherContrast.scss";
import noTeacherImg2x from "../../../assets/imgs/no-teacher@2x.png";//没上传老师显示的二倍图
import noTeacherImg3x from "../../../assets/imgs/no-teacher@3x.png";//没上传老师显示的三倍图
import Loadable from 'react-loadable';
import LoadingDom from "../../loadingDom/loadingDom";


type PageOwnProps = {
    teacherJson: any,
    bureauEducation: any
}

type PageState = {
    quantizationHighestArr: string[],
    quantizationLowestArr: string[]
}

class TeacherContrast extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            quantizationHighestArr: [],//教师对比量化分最高学生的数组
            quantizationLowestArr: [],//教师对比最低分学生的数组
        }
    }


    componentWillReceiveProps(nextProps: Readonly<PageOwnProps>, nextContext: any): void {
        if (JSON.stringify(nextProps.teacherJson) === "{}") {
            return;
        }
        this.setState({
            quantizationHighestArr: nextProps.teacherJson.quantizationHighestArr,
            quantizationLowestArr: nextProps.teacherJson.quantizationLowestArr,
        })
    }

    public render() {
        let DynamicDetail: any = null;
        return (
            <div className={'teacher-contrast-warp'}>
                {JSON.stringify(this.props.teacherJson) !== "{}" ?
                    !this.props.teacherJson.components.length ?
                        <div className={'no-teacher'}>
                            <img src={noTeacherImg2x} alt="no-teacher"
                                 srcSet={`${noTeacherImg2x} 2x,${noTeacherImg3x} 3x`}/>
                            <p>暂未添加任课教师信息，学校管理员添加后该分析内容可查看。</p>
                        </div>
                        : <div className={'teacher-contrast'}>
                            {
                                this.props.teacherJson.components.length && this.props.teacherJson.components.map((item: any) => {
                                    DynamicDetail = Loadable({
                                        loader: () => import(`./../../${item.view}`),
                                        loading: () => <LoadingDom>
                                        </LoadingDom>
                                    });
                                    return <DynamicDetail data={item.data} key={item.view}>
                                    </DynamicDetail>
                                })
                            }
                        </div> : null
                }
            </div>
        )
    }
}

export default TeacherContrast;


