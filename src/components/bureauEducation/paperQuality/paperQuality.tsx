/**
 * 区县教育局全科：试卷质量
 * */
import {Table} from "antd";
import * as React from "react";
import {Component} from "react";
import {Difficulty, Degree} from "./../../../utils";
import PubModel from "../../public/pubModel/pubModel";

import './paperQuality.scss'

type PageOwnProps = {
    paperQualityArr: any[]
}

type PageState = {
    columns: any[],
    closeSwitch: boolean
}


class PaperQuality extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            closeSwitch: false,
            columns: [{
                title: '科目',
                dataIndex: 'subject',
                render: (text: string) => <span className={'td-school-name'}>
                        {text}
                    </span>
            }, {
                title: '难度',
                dataIndex: 'difficulty',
                render: (text: number) => {
                    let difficultyVal: string = new Difficulty(text).compare();
                    return <span>{text}&nbsp;{difficultyVal}</span>
                }
            },
                {
                    title: '区分度',
                    dataIndex: 'degree',
                    render: (text: number) => {
                        let degreeVal: string = new Degree(text).compare();
                        return <span>{text}&nbsp;{degreeVal}</span>
                    }
                }
            ]
        }
    }

    //打开模态框
    public open(): void {
        this.setState({
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
            <div>
                {this.props.paperQualityArr&&this.props.paperQualityArr.length ?
                    <div className={'paper-quality'}>
                        <h5 className={'box-title'}>
                            试卷质量
                        </h5>
                        <span className={'data-interpretation'} onClick={this.open.bind(this)}>
                    数据解读
                </span>
                        {this.state.closeSwitch ? <PubModel closeModel={this.close.bind(this)} headTitle={'难度区分度'}>
                            <p>
                                难度表示试卷的难易程度，取值范围为0-1，数据越大，试卷越简单；
                            </p>
                            <p>
                                区分度描述试卷能否区分不同层次学生水平，取值范围为0-1，数据越大，试卷质量越高
                            </p>
                        </PubModel> : null}
                        <Table
                            className={'wathet-table'}
                            dataSource={this.props.paperQualityArr}
                            columns={this.state.columns}
                            bordered
                            size={"middle"}
                            pagination={false}
                            rowClassName={(index: number) => index % 2 ? 'table-row-zebra' : 'table-row-normal'}
                        />

                    </div> : null}
            </div>
        )
    }
}

export default PaperQuality;


