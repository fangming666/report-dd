/**
 *区县教育局全科：重点关注学校
 * */
import * as React from "react";
import {Component} from "react";
import "./focusSchools.scss"
import {Table} from "antd"


type PageOwnProps = {
    focusSchoolArr: any[]
}

type PageState = {
    columns: any[],
}


class FocusSchools extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '科目',
                    dataIndex: 'subject',
                    render: (text: string, record: any, index: number) => <span
                        className={!index ? 'sub-one' : index === 1 ? 'sub-two' : 'sub-three'}>
                        {text}
                    </span>
                },
                {
                    title: '科目排名',
                    dataIndex: 'ranking',
                },
                {
                    title: '对比整体',
                    dataIndex: 'contrast',
                    render: (text: string, record: any,) => <span
                        className={record.plusMinus ? 'contrast-success' : 'contrast-danger'}>
                        {record.plusMinus ? '+' : '-'}{text}
                    </span>
                }
            ]
        }
    }

    public render() {
        return (
            <div>
                {
                    this.props.focusSchoolArr&&this.props.focusSchoolArr.length ?
                        <div className={'focus-schools'}>
                            <h5 className={'box-title'}>
                                重点关注学校
                            </h5>
                            {this.props.focusSchoolArr.map((item: any, index: number) => {
                                return <div key={index}>
                                    <p>{item.schoolName}<span>(整体排名第{item.ranking}名)</span></p>
                                    <Table dataSource={item.subArr}
                                           columns={this.state.columns}
                                           bordered
                                           rowKey={item.key}
                                           size={"middle"}
                                           pagination={false}
                                           rowClassName={(record, index) => index % 2 ? 'table-row-zebra' : 'table-row-normal'}
                                    >
                                    </Table>
                                </div>
                            })}
                        </div> : null
                }
            </div>
        )
    }
}

export default FocusSchools;


