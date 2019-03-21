import * as React from "react";
import {Component} from "react";
import {Accordion} from 'antd-mobile';
import {connect} from "dva";
import hoc from './hoc';
import "./choose_report.scss"
import NoExam from "./../../components/examList/noExam/noExam"

type PageOwnProps = {
    choose_report: any,
    app: any,
    opt: () => any
}

type PageState = {}

@connect(({choose_report, app}: any) => ({
    choose_report, app
}))
@hoc

class ChooseReport extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={'choose-report'}>
                <Accordion defaultActiveKey={'0'}>
                    {
                        this.props.app._shelter ?
                            <></>
                            :
                            this.props.choose_report._chooseReportList.length ? this.props.choose_report._chooseReportList.map((item: any, index: number) => {
                                    let AccordionDom: any = null;
                                    if (!item.list.length && !item.classList.length) {
                                    } else {
                                        AccordionDom = <Accordion.Panel header={item.title} key={index} className="pad">
                                            <p>
                                                {
                                                    item.list.map((listItem: any, listIndex: number) => {
                                                        return <span key={listIndex}
                                                                     className={`choose-report-item
                                                          ${(this.props.choose_report._parentIndex === index && this.props.choose_report._ownIndex === listIndex)
                                                                         ? 'choose-report-item-active' : ''}`}
                                                                     onClick={this.props.opt.bind(this, index, listIndex, listItem, item.title)}>
                                                {listItem.name}
                                            </span>
                                                    })
                                                }
                                            </p>
                                            <p>
                                                {
                                                    item.classList.map((listItem: any, listIndex: number) => {
                                                        return <span key={listIndex}
                                                                     className={`choose-report-item
                                                          ${(this.props.choose_report._parentIndex === index && this.props.choose_report._ownIndex === listIndex+item.list.length)
                                                                         ? 'choose-report-item-active' : ''}`}
                                                                     onClick={this.props.opt.bind(this, index, listIndex+item.list.length, listItem, item.title)}>
                                                {listItem.name}
                                            </span>
                                                    })
                                                }
                                            </p>
                                        </Accordion.Panel>
                                    }
                                    return AccordionDom
                                }) :
                                <NoExam noExamText={'没有查看此份报告的权限，请单击左上角“返回”查看其它报告。'}>
                                </NoExam>
                    }

                </Accordion>
            </div>
        )
    }
}

export default ChooseReport;


