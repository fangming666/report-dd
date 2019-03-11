/**
 * 班级等级分数线
 *  gradeFractionalArr: any[]
 * */
import * as React from "react";
import {Table} from "antd";
import {Component} from "react";
import "./gradeFractional.scss"
import PubModel from "../../../components/public/pubModel/pubModel";//各等级名单的模态框
type PageOwnProps = {
    data: any
}

type PageState = {
    columns: object[],
    scopeColumns: object[],
    closeSwitch: boolean,
    modalArr: string[],
    modalTitle: string
}


class GradeFractional extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            modalTitle: '',//模态框的标题
            modalArr: [],//各等级学生的姓名数组
            closeSwitch: false,//模态框的开关
            scopeColumns: [{
                title: '等级',
                dataIndex: 'grade',
                render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
            }, {
                title: '分数线',
                dataIndex: 'scope',
                render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
            }],//分数线范围的列
            columns: [{
                title: '等级',
                dataIndex: 'grade',
                align: 'center',
                render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
            }, {
                title: '班达标比例 | 校(%)',
                dataIndex: 'standard',
                align: 'center',
                render: (text: string, record: any) => <p className={'table-full'}>
                    <span
                        className={`${text > record.school ? 'contrast-success' : text < record.school ? 'contrast-danger' : 'td-school-name'}`}>
                        {text}
                    </span>
                    <span>
                        {record.school}
                    </span>
                </p>
            },
                {
                    title: '排名',
                    dataIndex: 'rank',
                    align: 'center',
                    render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
                },
                {
                    title: '人数',
                    dataIndex: 'peopleNum',
                    render: (text: string, record: any) => <p className={'td-school-people'}>
                        <span className={'td-school-name'}>
                        {text}
                        </span>
                        <span className={'check-btn'} onClick={this.open.bind(this, record)}>查看</span>
                    </p>
                }
            ]//数据大表格的列
        }
    }

    //打开模态框
    public open(obj: any): void {
        this.setState({
            modalTitle: `${obj.grade}等(${obj.peopleNum}人)`,
            modalArr: obj.peopleArr,
            closeSwitch: true
        })
    }

    //关闭模态框
    public close(): void {
        this.setState({
            closeSwitch: false
        })
    }

    public render() {
        return (
            <>
                {this.props.data.gradeFractionalArr && this.props.data.gradeFractionalArr.length ?
                    <div className={'grade-fractional base-box'}>
                        <h4 className={'box-title'}>
                            等级分数线
                        </h4>
                        <Table dataSource={this.props.data.gradeFractionalArr}
                               columns={this.state.scopeColumns}
                               bordered
                               className={'grade-fractional-scope-table'}
                               size={"middle"}
                               pagination={false}
                               rowClassName={(record, index) => index % 2 ? 'table-row-zebra' : 'table-row-normal'}
                        >
                        </Table>
                        <Table dataSource={this.props.data.gradeFractionalArr}
                               columns={this.state.columns}
                               bordered
                               className={'grade-fractional-table'}
                               size={"middle"}
                               pagination={false}
                               rowClassName={(record, index) => index % 2 ? 'table-row-zebra' : 'table-row-normal'}
                        >
                        </Table>
                        {this.state.closeSwitch ?
                            <PubModel closeModel={this.close.bind(this)} headTitle={this.state.modalTitle}>
                                <p className={'lack-modal'}>
                                    {this.state.modalArr &&
                                    this.state.modalArr.map((item: string, index: number) =>
                                        <span key={index} className={'lack-item'}>{item}</span>)}
                                </p>
                            </PubModel> : null}
                    </div>
                    : null}
            </>
        )
    }
}

export default GradeFractional;


