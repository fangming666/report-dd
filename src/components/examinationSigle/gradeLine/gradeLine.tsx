/**
 * 等级分数线及比例
 *  gradeLineArr: any[],
 *  schoolProportionSwitch?: boolean//校比例的开关
 * */
import {Table} from "antd";
import * as React from "react";
import {Component} from "react";
import "./gradeLine.scss"
// @ts-ignore
import * as F2 from "@antv/f2";
// @ts-ignore
import * as PieLabel from "@antv/f2/lib/plugin/pie-label"

type PageOwnProps = {
    data: any,


}

type PageState = {
    columns: any[]
}

class GradeLine extends Component <PageOwnProps, PageState> {


    constructor(props: any) {
        super(props);
        // 表格的设置
        this.state = {
            columns: [
                {
                    title: '等级',
                    dataIndex: 'grade',
                    align: 'center',
                    width: 72,
                    render: (text: string, record: any, index: number) => {
                        let resultClass: string = '';
                        switch (index) {
                            case 0:
                                resultClass = 'grade-line-one';
                                break;
                            case 1:
                                resultClass = 'grade-line-two';
                                break;
                            case 2:
                                resultClass = 'grade-line-three';
                                break;
                            case 3:
                                resultClass = 'grade-line-four';
                                break;
                            case 4:
                                resultClass = 'grade-line-five';
                                break;
                            default:
                                resultClass = 'td-school-name';
                                break;
                        }
                        return <span className={resultClass}>{text}</span>
                    }
                },
                {
                    title: '分数线',
                    width: 110,
                    dataIndex: 'score',
                    render: (text: string) => <span className={'td-school-name'}>{text}</span>
                },
                {
                    title: `${this.props.data.schoolProportionSwitch ? '校比例 | 联考(%)' : '人数'}`,
                    dataIndex: `${this.props.data.schoolProportionSwitch ? 'scale' : 'people'}`,
                    align: 'center',
                    width: 100,
                    render: (text: string, record: any) => {
                        if (this.props.data.schoolProportionSwitch) {
                            return <div>
                                <span
                                    className={`${text > record.examination ? 'contrast-success ' : text < record.examination ? 'contrast-danger' : 'contrast-normal'}`}>
                                    {text}
                                </span>
                                <span className={'examination-scale-text'}>
                                    {record.examination}
                                </span>
                            </div>
                        } else {
                            return <span className={'td-school-other'}>{text}</span>
                        }
                    }
                }, {
                    title: `${this.props.data.schoolProportionSwitch ? '排名' : '比例(%)'}`,
                    dataIndex: `${this.props.data.schoolProportionSwitch ? 'ranking' : 'scale'}`,
                    align: 'center',
                    render: (text: string) => <span className={'td-school-other'}>{text}</span>
                }
            ]
        }
    }

    componentDidMount(): void {
        //重组数组
        let resultGradeLineArr: any = this.props.data.gradeLineArr.reduce((initArr: any, item: any, index: number) => {
            if (index < 5) {
                initArr = [...initArr, item];
            }
            return initArr;
        }, []);


        /*
        * 圆环的设置
        * */
        //整体配置
        let chart = new F2.Chart({
            id: 'gradeLineCanvas',
            plugins: PieLabel,
            pixelRatio: window.devicePixelRatio
        });

        //数据源
        chart.source(resultGradeLineArr);

        //图例
        chart.legend({
            position: 'bottom',
            offsetY: -5,
            marker: 'square',
            align: 'center',
            itemFormatter: (val: string | number) => {
                return `${val}等`; // val 为每个图例项的文本值
            }
        });

        //圆环大小配置
        chart.coord('polar', {
            transposed: true,
            innerRadius: 0.65,
            radius: 3
        });

        //*坐标轴
        chart.axis(false);

        //工具提示
        chart.tooltip(false);

        //颜色
        chart.interval().position('const*scale').color('grade', ['#3FA1FF', '#3ECBCB', '#50CB74', '#FBD444', '#EF4864']).adjust('stack');

        //圆环中间内容
        chart.guide().html({
            position: ['50%', '50%'],
            html: '<div style="text-align: center;width:150px;height: 50px;">\n      <p style="font-size: 12px;color: #999;margin: 0" id="grade"> </p>\n      <p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" id="scale"> </p>\n      </div>',
        });

        // 添加饼图文本
        chart.pieLabel({
            sidePadding: 40,
            label1: function label1(data: any) {
                return {
                    text: data.scale + "%",
                    fill: '#919191',
                    fontSize: "14px"
                };
            },
            label2: function label1(data: any) {
                return {
                    text: data.people + "人",
                    fill: '#919191',
                    fontSize: "14px"
                };
            },
            onClick: function onClick(ev: any) {
                var data = ev.data;
                if (data) {
                    //@ts-ignore
                    document.getElementById("grade").innerHTML = `${data.grade}等`;
                    //@ts-ignore
                    document.getElementById("scale").innerHTML = `${data.scale} % `;
                }
            }
        });
        chart.render();
    }

    public render() {
        return (
            <div>
                {this.props.data.gradeLineArr && this.props.data.gradeLineArr.length ?
                    <div className={'grade-line'}>
                        <h5 className={'box-title'}>
                            等级分数线及比例
                        </h5>
                        <canvas id={'gradeLineCanvas'} className={'grade-line-canvas'}>
                        </canvas>
                        <Table dataSource={this.props.data.gradeLineArr}
                               columns={this.state.columns}
                               bordered
                               size={"middle"}
                               pagination={false}
                               rowClassName={(record, index) => index % 2 ? 'table-row-zebra' : 'table-row-normal'}
                        >
                        </Table>
                    </div>
                    : null}
            </div>
        )
    }
}

export default GradeLine;


