/**
 *区县教育局全科：重点关注学校
 *  focusSchoolArr: any[]
 * */
import * as React from "react";
import {Component} from "react";
import "./focusSchools.scss"
import {Table} from "antd"


type PageOwnProps = {
    data: any,
    key: string

}

type PageState = {
    columns: any[],
}


export default class FocusSchools extends Component <PageOwnProps, PageState> {
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
                    render: (text: number) => <span
                        className={text >= 0 ? 'contrast-success' : 'contrast-danger'}>
                        {text >= 0 ? '+' : ''}{text}
                    </span>
                }
            ]
        }
    }

    public render() {
        return (
            <div>
                {
                    this.props.data.focusSchoolArr && this.props.data.focusSchoolArr.length ?
                        <div className={'focus-schools'}>
                            <h5 className={'box-title'}>
                                重点关注学校
                            </h5>
                            {this.props.data.focusSchoolArr.map((item: any, index: number) => {
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



