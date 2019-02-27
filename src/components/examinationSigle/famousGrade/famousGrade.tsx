/**
 * 区县教研员：各校等级划分
 * */
import {Table} from "antd";
import * as React from "react";
import {Component} from "react";
import './famousGrade.scss'

type PageOwnProps = {
    famousGradeArr: any[]
}

type PageState = {
    columns: any[],
    dataSource: any[],
    sum: number
}


class FamousGrade extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        // 表格的设置
        this.state = {
            dataSource: [],//拼装的数据源
            columns: [],//列配置
            sum: 0,//不确定列的数量
        }
    }

    componentDidMount(): void {
        if (!this.props.famousGradeArr.length) {
            return;
        }
        //拆分组合数据
        this.setState({
            sum: this.props.famousGradeArr[0].data.length,
            dataSource: this.props.famousGradeArr.map((item: any) => {
                const everyRow = {key: item.key, school: item.school};
                for (const child of item.data) {
                    everyRow[child.title] = child.score + ' | ' + child.ranking;
                }
                return everyRow;
            })
        }, () => {
            this.setState({
                columns: [
                    {
                        title: '学校', dataIndex: 'school', fixed: 'left',
                        width: 80,
                        render: (text: string) => <span className={'td-school-name'}>{text}</span>
                    },
                    ...this.props.famousGradeArr[0].data.map((item: any) => ({
                        title: item.title,
                        dataIndex: item.title,
                        width: 90,
                        render: (text: string) => {
                            let textArr: string[] = text.split("|");
                            return <p className={'table-full'}>{textArr[0]}<span>{textArr[1]}</span></p>
                        }
                    })),
                ],
            })
        })
    }

    public render() {
        return (
            <div>
                {this.props.famousGradeArr&&this.props.famousGradeArr.length ?
                    <div className={'famous-gradeArr'}>
                        <h5 className={'box-title'}>
                            各校等级划分
                        </h5>
                        <Table dataSource={this.state.dataSource}
                               columns={this.state.columns}
                               className={'wathet-table'}
                               bordered
                               scroll={{x: 80 + this.state.sum * 90}}
                               size={"middle"}
                               pagination={false}
                               rowClassName={(record, index) => index % 2 ? 'table-row-zebra' : 'table-row-normal'}
                        >
                        </Table>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default FamousGrade;


