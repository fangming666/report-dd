/**
 * 学生成绩单详情
 * */
import {Table} from "antd";
import * as React from "react";
import {Component} from "react";
import "./studentDetail.scss"
import closeIcon from "../../assets/imgs/close.png"

type PageOwnProps = {
    detail: any,
    closeModel: () => void
}

type PageState = {
    columns:object[]
}


class StudentDetail extends Component <PageOwnProps, PageState> {
    static defaultProps = {
        detail: {}
    };
    constructor(props:any){
        super(props);
        this.state ={
            columns:[{
                title: '科目',
                dataIndex: 'subject',
                align: 'center',
                render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
            },
                {
                    title: '成绩',
                    dataIndex: 'score',
                    align: 'center',
                    render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
                },
                {
                    title: '等级',
                    dataIndex: 'grade',
                    align: 'center',
                    render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
                }, {
                    title: '班次 | 校次',
                    dataIndex: 'classRank',
                    align: 'center',
                    render: (text: string, record: any) => <p className={'table-full'}><span
                        className={'td-school-name'}>{text}</span><span>{record.schoolRank}</span>
                    </p>
                }]
        }
    }


    public render() {
        return (
            <div className={'student-detail'}>
                {JSON.stringify(this.props.detail) !== "{}" &&
                <>
                    <h2>{this.props.detail.name}</h2>
                    <img src={closeIcon} alt="close" onClick={this.props.closeModel.bind(this)}/>
                    <div className={'student-detail-info'}>
                        <dl >
                            <dt>总成绩:</dt>
                            <dd>{this.props.detail.score}</dd>
                        </dl>
                        <dl>
                            <dt>等级:</dt>
                            <dd>{this.props.detail.grade}</dd>
                        </dl>
                        <dl>
                            <dt>班级:</dt>
                            <dd>{this.props.detail.classRank}</dd>
                        </dl>
                        <dl>
                            <dt>校级:</dt>
                            <dd>{this.props.detail.schoolRank}</dd>
                        </dl>
                    </div>
                    <Table dataSource={this.props.detail.detailed}
                           columns={this.state.columns}
                           bordered
                           className={'wathet-table'}
                           size={"middle"}
                           pagination={false}
                           rowClassName={(record, index) => index % 2 ? 'table-row-zebra' : 'table-row-normal'}
                    >
                    </Table>
                </>
                }
            </div>
        )
    }
}

export default StudentDetail;


