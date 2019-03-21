/**
 *     comparisonArr: any[],
 *     comparisonTitle?: string,//标题
 columnOneTitle?: string,//第一列的标题
 columnOneTitleKey?: string,//第一列的索引key
 columnLastTitle?: string,//最后一列的标题
 columnLastTitleKey?: string//最后一列的索引key
 * */
import {connect} from "dva";
import {Table} from "antd";
import * as React from "react";
import {Component} from "react";
import './comparison.scss'
import {DifferenceJudge} from "./../../../utils/index"

type PageOwnProps = {
    data: any,
    bureauEducation: any
}

type PageState = {
    columns: any[]
}

@connect(({bureauEducation}: any) => ({
    bureauEducation
}))

class Comparison extends Component <PageOwnProps, PageState> {

    constructor(props: any) {
        super(props);
        this.state = {
            columns: []
        }
    }

    componentDidMount(): void {
        this.setState({
            columns: [
                {
                    title: this.props.data.columnOneTitle,
                    dataIndex: this.props.data.columnOneTitleKey,
                    key: 0,
                    width: 93,
                    fixed: 'left',
                    render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
                },
                {
                    title: '平均分',
                    dataIndex: 'average',
                    key: 1,
                    width: 82,
                    render: (text: string, record: any,) => {
                        let differenceJudge = new DifferenceJudge(record.difference);//对类名的判断
                        let resultClassName: string = differenceJudge.goJudge();//span的类名
                        return <span className={resultClassName}>
                        {text}
                    </span>
                    }
                },
                {
                    title: '均分差',
                    dataIndex: 'difference',
                    key: 2,
                    width: 82,
                    align: 'center',
                    render: (text: string, record: any,) => {
                        let differenceJudge = new DifferenceJudge(record.difference, true);//对类名的判断
                        let resultClassName: string = differenceJudge.goJudge();//span的类名
                        return <span className={resultClassName}>
                        {text}
                    </span>
                    },
                    sorter: (a: any, b: any) => a.difference - b.difference,
                },
                {
                    title: '排名',
                    dataIndex: 'ranking',
                    key: 3,
                    width: 82,
                    align: 'center'
                },
                {
                    title: '标准差',
                    dataIndex: 'standard',
                    key: 4,
                    width: 82,
                    align: 'center',
                    render: (text: string) => <span className={'td-standard'}>
                        {text}
                    </span>
                },
                {
                    title: this.props.data.columnLastTitle,
                    dataIndex: this.props.data.columnLastTitleKey,
                    key: 5,
                    width: 96,
                    align: 'center',
                    render: (text: string, record: any) => {
                        return this.props.data.comparisonTitle === '学校对比' ?
                            <p className={'table-full'}>{text}<span>{record.overall}</span></p>
                            : <span className={'td-standard'}>{text}</span>
                    }
                }]
        })
    }

    componentWillUnmount(): void {
        this.setState({
            columns: []
        })
    }

    public render() {
        return (
            <div>
                {this.props.data.comparisonArr && this.props.data.comparisonArr.length ?
                    <div className={'school-comparison'}>
                        <h5 className={'box-title'}>
                            {`${this.props.data.comparisonTitle}`}
                        </h5>

                        <Table dataSource={this.props.data.comparisonArr}
                               columns={this.state.columns}
                               bordered
                               className={'wathet-table'}
                               size={"middle"}
                               scroll={{x: 517}}
                               pagination={false}
                               rowClassName={(record, index) => index % 2 ? 'table-row-zebra' : 'table-row-normal'}
                        >
                        </Table>

                        <p>
                            注：标准差越大说明分数越离散，学生两极分化越大。标准差越小说明分数越集中，学生两极分化越小。
                        </p>
                    </div> : null}
            </div>)
    }
}

export default Comparison;


