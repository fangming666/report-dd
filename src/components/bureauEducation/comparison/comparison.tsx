/**
 * rank{boolean}区县教育局全科：学校对比/校长：班级对比
 * */
import {Table} from "antd";
import * as React from "react";
import {Component} from "react";
import './comparison.scss'
import {DifferenceJudge} from "./../../../utils/index"

type PageOwnProps = {
    comparisonArr: any[],
    comparisonTitle?:string,//标题
    rank?: boolean//学校对比/班级对比的开关
    columnOneTitle?:string,//第一列的标题
    columnOneTitleKey?:string,//第一列的索引key
    columnLastTitle?:string,//最后一列的标题
    columnLastTitleKey?:string//最后一列的索引key
}

type PageState = {
    columns: any[]
}


class Comparison extends Component <PageOwnProps, PageState> {
    static defaultProps = {
        rank: true,
        comparisonTitle:'学校对比',
        columnOneTitle:'学校',
        columnOneTitleKey:'schoolName',
        columnLastTitle:'总人数|缺考',
        columnLastTitleKey:'lack',
    };

    constructor(props: any) {
        super(props);
        this.state = {
            columns:[]
        }
    }
    componentDidMount(): void {
        this.setState({
            columns: [
                {
                    title: this.props.columnOneTitle,
                    dataIndex: this.props.columnOneTitleKey,
                    width: 93,
                    fixed: 'left',
                    render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
                },
                {
                    title: '平均分',
                    dataIndex: 'average',
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
                    width: 82,
                    align: 'center'
                },
                {
                    title: '标准差',
                    dataIndex: 'standard',
                    width: 82,
                    align: 'center',
                    render: (text: string) => <span className={'td-standard'}>
                        {text}
                    </span>
                },
                {
                    title: this.props.columnLastTitle,
                    dataIndex: this.props.columnLastTitleKey,
                    width: 96,
                    align: 'center',
                    render: (text: string, record: any) => {
                        return this.props.rank?<p className={'table-full'}>{text}<span>{record.overall}</span></p>
                            :<span className={'td-standard'}>{text}</span>
                    }
                }]
        })
    }
    componentWillUnmount(): void {
        this.setState({
            columns:[]
        })
    }

    public render() {
        return (
            <div>
                {this.props.comparisonArr&&this.props.comparisonArr.length ?
                    <div className={'school-comparison'}>
                        <h5 className={'box-title'}>
                            {this.props.comparisonTitle}
                        </h5>

                        <Table dataSource={this.props.comparisonArr}
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


