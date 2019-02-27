import * as React from "react";
import {Component} from "react";
import {Accordion} from 'antd-mobile';
import {connect} from "dva";
import hoc from './hoc';
import "./choose_report.scss"

type PageOwnProps = {
    choose_report: any,
    opt:() =>any
}

type PageState = {}

@connect(({choose_report,app}: any) => ({
    choose_report,app
}))
@hoc

class ChooseReport extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={'choose-report'}>
                <Accordion>
                    {
                        this.props.choose_report._chooseReportList.length && this.props.choose_report._chooseReportList.map((item: any, index: number) => {
                            return <Accordion.Panel header={item.title} key={index} className="pad">
                                    {
                                        item.list.map((listItem:any,listIndex:number) =>{
                                            return <span key={listIndex}
                                                         className={`choose-report-item
                                                          ${(this.props.choose_report._parentIndex ===index&&this.props.choose_report._ownIndex ===listIndex)
                                                             ?'choose-report-item-active':''}`}
                                                         onClick={this.props.opt.bind(this,index,listIndex,listItem,item.title)}>
                                                {listItem.name}
                                            </span>
                                        })
                                    }
                            </Accordion.Panel>
                        })
                    }

                </Accordion>
            </div>
        )
    }
}

export default ChooseReport;


