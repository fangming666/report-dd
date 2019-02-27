/**
 * 各科平均分
 * */
import {Table} from "antd";
import * as React from "react";
import {Component} from "react";
import {DifferenceJudge} from "../../../utils";


type PageOwnProps = {
    subjectAverageArr: any[],
    switch: boolean//区分校长（true）/班主任(false)
}

type PageState = {
    columns: any[],
}


class SubjectAverage extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            columns: [],
        }
    }

    static defaultProps = {
        switch: true
    };

    componentDidMount(): void {
        if (!this.props.subjectAverageArr || !this.props.subjectAverageArr.length) {
            return;
        }
        this.setState({
            columns: [
                {
                    title: '科目',
                    align: 'center',
                    width: 88,
                    fixed: 'left',
                    dataIndex: 'subjectName',
                    render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
                },
                {
                    title: `均分(${this.props.switch ? '校|联考' : '班|学校'})`,
                    align: 'center',
                    width: 112,
                    dataIndex: `${this.props.switch ? 'schoolAverage' : 'classAverage'}`,
                    render: (text: string, record: any,) => {
                        let differenceJudge = new DifferenceJudge(record.rate);//对类名的判断
                        let resultClassName: string = differenceJudge.goJudge();//span的类名
                        return <p className={'table-full'}><span
                            className={resultClassName}>{text}</span><span>{this.props.switch ? record.examinationAverage : record.schoolAverage}</span>
                        </p>
                    }
                },
                {
                    title: '超均率(%)',
                    dataIndex: 'rate',
                    align: 'center',
                    width: 90,
                    render: (text: string, record: any,) => {
                        let differenceJudge = new DifferenceJudge(record.rate);//对类名的判断
                        let resultClassName: string = differenceJudge.goJudge();//span的类名
                        return <span className={resultClassName}>{text}</span>
                    },
                },
                {
                    title: `${this.props.switch ? '联考名次' : '校次'}`,
                    dataIndex: 'ranking',
                    width: 80,
                    align: 'center'
                },
                {
                    width: 102,
                    title: '标准差',
                    dataIndex: 'standard',
                    align: 'center',
                }]
        })
    }

    public render() {
        return (
            <React.Fragment>
                {this.props.subjectAverageArr && this.props.subjectAverageArr.length ?
                    <div className={'base-box'}>
                        <h5 className={'box-title'}>
                            各科平均分
                        </h5>

                        <Table dataSource={this.props.subjectAverageArr}
                               columns={this.state.columns}
                               bordered
                               className={'wathet-table'}
                               size={"middle"}
                               scroll={{x: 465}}
                               pagination={false}
                               rowClassName={(record, index) => index % 2 ? 'table-row-zebra' : 'table-row-normal'}
                        >
                        </Table>
                    </div>
                    : null
                }
            </React.Fragment>
        )
    }
}

export default SubjectAverage;


