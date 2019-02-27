/**
 * 区县教育局全科：各科平均分
 * */
import {Table} from "antd";
import * as React from "react";
import {Component} from "react";
import './sectionAverage.scss'

type PageOwnProps = {
    sectionAverageArr: any[]
}

type PageState = {
    columns: any[]
}


class SectionAverage extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            columns: [{
                title: '科目',
                dataIndex: 'subject',
                align: 'center',
                width: 87,
                fixed: 'left',
                render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
            },
                {
                    title: '平均分|满分',
                    dataIndex: 'average',
                    align: 'center',
                    width: 94,
                    render: (text: string, record: any) => {
                        return <p className={'table-full'}>{text}<span>{record.full}</span></p>
                    }
                }
                , {
                    title: '标准差',
                    dataIndex: 'deviation',
                    width: 82,
                    align: 'center',
                },
                {
                    title: '最高',
                    dataIndex: 'highest',
                    width: 77,
                    align: 'center',
                },
                {
                    title: '最低',
                    dataIndex: 'lowest',
                    width: 77,
                    align: 'center',
                },
                {
                    title: '总人数|缺考',
                    dataIndex: 'lack',
                    width: 96,
                    align: 'center',
                    render: (text: string, record: any) => {
                        return <p className={'table-full'}>{text}<span>{record.overall}</span></p>
                    }
                }]
        }
    }

    public render() {
        return (
            <div>
                {this.props.sectionAverageArr&&this.props.sectionAverageArr.length ?
                    <div className={'section-average'}>
                        <h5 className={'box-title'}>
                            全科平均分
                        </h5>

                        <Table dataSource={this.props.sectionAverageArr}
                               className={'wathet-table'}
                               columns={this.state.columns}
                               bordered
                               scroll={{x: 513}}
                               size={"middle"}
                               pagination={false}
                               rowClassName={(record, index) => index % 2 ? 'table-row-zebra' : 'table-row-normal'}
                        >
                        </Table>
                    </div> : null}
            </div>
        )
    }
}

export default SectionAverage;


