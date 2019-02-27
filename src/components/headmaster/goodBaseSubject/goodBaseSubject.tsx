/**
 * 优劣学科
 * */
// @ts-ignore
import * as F2 from "@antv/f2";
import * as React from "react";
import {Component} from "react";
import "./goodBaseSubject.scss"
import PubModel from "../../public/pubModel/pubModel";//数据解读的模态框
import GoodBaseArr from "./../../../utils/goodBaseArr";//优劣学科的重新组装


type PageOwnProps = {
    goodBaseSubjectArr: any[]
}

type PageState = {
    closeSwitch: boolean,
    goodArr: string[],
    baseArr: string[]
}


class GoodBaseSubject extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            closeSwitch: false,
            goodArr: [],//优势学科
            baseArr: [],//劣势学科
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

    componentDidMount(): void {
        if (!this.props.goodBaseSubjectArr.length) {
            return;
        }
        this.setState({
            goodArr: new GoodBaseArr(this.props.goodBaseSubjectArr).getGood(),
            baseArr: new GoodBaseArr(this.props.goodBaseSubjectArr).getBase()
        });


        //基本配置
        let chart = new F2.Chart({
            id: 'goodBaseSubjectCanvas',
            pixelRatio: window.devicePixelRatio
        });

        //数值最大最小范围
        chart.source(this.props.goodBaseSubjectArr, {
            score: {
                min: 0,
                max: 100
            }
        });
        // 选择极坐标系
        chart.coord('polar');
        //图例（此处应用图表的点击事件）
        chart.tooltip({
            custom: true,
            onChange: function onChange(obj: any) {
                //@ts-ignore
                document.getElementById("goodBaseSubjectSubject").innerHTML = obj.items[0].origin.subject;
                //@ts-ignore
                document.getElementById("goodBaseSubjectScore").innerHTML = obj.items[0].origin.score
            }
        });
        //坐标轴
        chart.axis('score', {
            grid: {
                lineDash: null
            },
            label: null,
            line: null,
        });
        //坐标轴
        chart.axis('subject', {
            grid: {
                lineDash: null
            },
            label: () => {
                return {
                    Color: 'red',
                };
            }
        });
        //面积
        chart.area().position('subject*score').color('#0CA9F0').style({
            fillOpacity: 0.38
        }).animate({
            appear: {
                animation: 'groupWaveIn'
            }
        });
        //线条
        chart.line().position('subject*score').color('#0CA9F0').size(1).animate({
            appear: {
                animation: 'groupWaveIn'
            }
        });
        //点
        chart.point().position('subject*score').color('#0CA9F0').animate({
            appear: {
                delay: 300
            }
        });

        //图表中间的文字
        chart.guide().html({
            position: ['45%', '40%'],
            html: '<div style="color: #0CA9F0;white-space: nowrap;text-align:left;">' + '<p id="goodBaseSubjectSubject" style="font-size: 12px;margin:0;"> </p>' + '<p style="font-size: 20px;margin:0;font-weight: bold;" id="goodBaseSubjectScore"> </p>' + '</div>'
        });
        chart.render();
    }

    public render() {
        return (
            <React.Fragment>
                {this.props.goodBaseSubjectArr&&this.props.goodBaseSubjectArr.length ?
                    <div className={'good-base-subject base-box'}>
                        <h5 className={'box-title'}>学校优劣学科</h5>
                        <span className={'data-interpretation'} onClick={this.open.bind(this)}>
                    数据解读
                </span>
                        <canvas id="goodBaseSubjectCanvas" className={'good-base-subject-canvas'}>
                        </canvas>
                        <div className={'info'}>
                            <dl>
                                <dt>
                                    优势学科:
                                </dt>
                                <dd>
                                    {this.state.goodArr.length ?
                                        this.state.goodArr.map((item: any, index: number) => {
                                            return <span key={index}>{item}{index < this.state.goodArr.length - 1 ? '、' : ''}</span>
                                        })
                                        : null}
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    劣势学科:
                                </dt>
                                <dd>
                                    {this.state.baseArr.length ?
                                        this.state.baseArr.map((item: any, index: number) => {
                                            return <span key={index}>{item}{index < this.state.baseArr.length - 1 ? '、' : ''}</span>
                                        })
                                        : null}
                                </dd>
                            </dl>
                        </div>
                        {this.state.closeSwitch ? <PubModel closeModel={this.close.bind(this)} headTitle={'优劣学科'}>
                            <p className={'pub-model-info'}>学科成绩已转换成标准分数并进行线性转换，线性转换分越高说明该学科优势越大、反之劣势越大。</p>
                            <p className={'pub-model-info'}>50分为联考平均水平，大于50表示高于平均水平，小于50表示低于平均水平。</p>
                        </PubModel> : null}
                    </div>
                    : null}
            </React.Fragment>
        )
    }
}

export default GoodBaseSubject;


