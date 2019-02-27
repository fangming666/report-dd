/**
 * 成绩单
 * */
import {Table} from "antd";
import {Modal} from "antd-mobile";
import * as React from "react";
import {Component} from "react";
import "./reportCard.scss";
import StudentDetail from "../studentDetail/studentDetail";//成绩单学生详情
import {GradeColor} from "../../utils";//等级的颜色类

type PageOwnProps = {
    reportCardArr: object[],
    teacherSwitch: boolean//true为班主任,false任课老师
}

type PageState = {
    columns: object[],
    closeSwitch: boolean,
    detail: object
}


class ReportCard extends Component <PageOwnProps, PageState> {
    static defaultProps = {
        teacherSwitch: true
    };

    constructor(props: any) {
        super(props);
        this.state = {
            detail: {},//学生成绩单详情
            closeSwitch: false,//模态框的开关
            columns: [{
                title: '姓名',
                dataIndex: 'name',
                align: 'center',
                width: 76,
                render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
            }, {
                title: '成绩',
                dataIndex: 'score',
                align: 'center',
                width: 100,
                sorter: (a: any, b: any) => a.score - b.score,
                render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
            }, {
                title: `${this.props.teacherSwitch ? '班次 | 校次' : '等级'}`,
                dataIndex: `${this.props.teacherSwitch ? 'classRank' : 'grade'}`,
                width: 125,
                align: 'center',
                render: (text: string, record: any, index: number) => this.props.teacherSwitch ?
                    <p className={'table-full'}><span
                        className={'td-school-name'}>{text}</span><span>{record.schoolRank}</span>
                    </p> : <div className={`base-grade-td ${new GradeColor(text, index).getColor()}`}>
                        {text}
                    </div>
            },
                {
                    title: `${this.props.teacherSwitch ? '查看各科成绩' : '班次 | 校次'}`,
                    dataIndex: `${this.props.teacherSwitch ? '' : 'classRank'}`,
                    align: 'center',
                    render: (text: string, record: any) => this.props.teacherSwitch ?
                        <span onClick={this.check.bind(this, record)}
                              className={'check-btn'}>查看</span>
                        : <p className={'table-full'}><span
                            className={'td-school-name'}>{text}</span><span>{record.schoolRank}</span>
                        </p>
                }
            ]
        }
    }


    //点击查看按钮事件
    private check(obj: any, e: any): void {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            closeSwitch: true,
            detail: obj
        })
    };

    //关闭模态框事件
    private close(): void {
        this.setState({
            closeSwitch: false
        })
    }


    public render() {
        return (
            <div className={'report-card'}>
                {this.props.reportCardArr && this.props.reportCardArr.length ?
                    <React.Fragment>
                        <Modal
                            className={'report-card-modal'}
                            popup
                            visible={this.state.closeSwitch}
                            onClose={this.close.bind(this)}
                            animationType="slide-up"
                        >
                            <StudentDetail detail={this.state.detail} closeModel={this.close.bind(this)}>
                            </StudentDetail>
                        </Modal>

                        <Table dataSource={this.props.reportCardArr}
                               columns={this.state.columns}
                               bordered
                               className={'wathet-table'}
                               size={"middle"}
                               pagination={false}
                               scroll={{y: 600}}
                               rowClassName={(record, index) => index % 2 ? 'table-row-zebra' : 'table-row-normal'}
                        >
                        </Table>
                    </React.Fragment>
                    : null
                }
            </div>
        )
    }
}

export default ReportCard;


