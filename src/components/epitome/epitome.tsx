/**
 * 考试概括
 * */
import * as React from "react";
import {Component} from "react";
import "./epitome.scss";


type PageOwnProps = {
    rank: boolean,//概括info的显示方式
    rankTitle: boolean,//概括标头的显示方式
    schoolNum?: number,//学校总数量
    peopleNum?: number,//学生总数量
    classPeopleNum?: number,//班级总人数
    lackNum: number,//缺考学生总数量
    average: number,//平均分
    averageTitle: string,//平均分的标题
    fullMark: number,//满分
    highRun: number,//最高分
    mode?: number,//众数
    median?: number,//中位数
    averageDifference?: number,//均分差
    ranking?: number,//排名
    examinationAverage?: number,//联考平均分
    examinationHighRun?: number,//联考最高分
    schoolAverage?: number,//校平均分
    schoolHighRun?: number,//校最高分
    classNum?: number//班级总数量
    openModal?:  any;//缺考名单模态框开启事件
}

type PageState = {}


class Epitome extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={this.props.rank ? 'epitome' : 'epitome epitome-other'}>
                <h5>考试概括</h5>
                <div className={'epitome-info'}>
                    {this.props.rankTitle ?
                        <p>
                            本次考试共{this.props.schoolNum}所学校，{this.props.peopleNum}人考试，{this.props.lackNum}人缺考
                        </p> :
                        <p>
                            本班考生{this.props.classPeopleNum}人，缺考{this.props.lackNum}人 <span
                            onClick={this.props.openModal.bind(this)}>查看缺考名单</span>
                        </p>
                    }
                </div>
                <div className={'epitome-content'}>
                    <p>{this.props.averageTitle}</p>
                    <p>{this.props.average}</p>
                    <p>{this.props.examinationAverage ?
                        <span className={'epitome-content-item'}>联考:{this.props.examinationAverage}</span>
                        : this.props.schoolAverage ? <span
                            className={'epitome-content-item'}>校平均分:{this.props.schoolAverage}</span> : null}<span>
                        满分:{this.props.fullMark}</span></p>
                </div>
                {this.props.rank ?
                    <div className={'epitome-genre'}>
                        <dl>
                            <dt>
                                最高分
                            </dt>
                            <dd>
                                {this.props.highRun}
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                众数
                            </dt>
                            <dd>
                                {this.props.mode}
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                中位数
                            </dt>
                            <dd>
                                {this.props.median}
                            </dd>
                        </dl>
                    </div> :
                    <div className={'epitome-genre'}>
                        <dl>
                            <dt>
                                均分差
                            </dt>
                            <dd>
                                {this.props.averageDifference && this.props.averageDifference > 0 ?
                                    <span className={'average-difference'}>+{this.props.averageDifference}</span>
                                    :
                                    <span className={'average-difference-other'}>{this.props.averageDifference}</span>}
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                排名
                            </dt>
                            <dd>
                                {this.props.ranking}
                            </dd>
                            {this.props.classNum ? <dd className={'epitome-genre-item'}>
                                {this.props.classNum}个班级
                            </dd> : null}
                        </dl>
                        <dl>
                            <dt>
                                最高分
                            </dt>
                            <dd>
                                {this.props.highRun}
                            </dd>
                            {this.props.examinationHighRun ?
                                <dd className={'epitome-genre-item'}>联考:{this.props.examinationHighRun}</dd>
                                : this.props.schoolHighRun ?
                                    <dd
                                        className={'epitome-genre-item'}>校最高分:{this.props.examinationHighRun}</dd> : null}
                        </dl>
                    </div>
                }
            </div>
        )
    }
}

export default Epitome;


