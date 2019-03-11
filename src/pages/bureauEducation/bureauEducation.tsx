/**
 * 校长全科
 * */
import {connect} from "dva";
import * as React from "react";
import {Component} from "react";
import './bureauEducation.scss'
import hoc from "./../bureauEducation/hoc"
import Loadable from 'react-loadable';
import LoadingDom from "../../components/loadingDom/loadingDom";
import PubFoot from "../../components/public/pubFoot/pubFoot";//公用底部
import PubNav from "../../components/public/pubNav/pubNav";//公用的科目选择nav
import PubSegmentedControl from "../../components/public/pubSegmentedControl/pubSegmentedControl";//分段器
import TeacherContrast from "../../components/headmaster/teacherContrast/teacherContrast";//教师对比内容
import PubModel from "../../components/public/pubModel/pubModel";//公用模态框

type PageOwnProps = {
    bureauEducation?: any,
    dispatch?: any,
    reportId: any,
    subNavClick?: any,
    state?: any,
    open?: any,
    close?: any,
    onChange?: any,
}


type PageState = {}

@connect(({bureauEducation}: any) => ({
    bureauEducation
}))
@hoc


class Headmaster extends Component <PageOwnProps, PageState> {


    public render() {
        let DynamicDetail: any = null;
        return (
            <div className={'headmaster'} id={'headmaster'}>
                {this.props.bureauEducation._bureauEducation.length ?
                    <React.Fragment>
                        {this.props.bureauEducation._bureauEducation.length > 1 ?
                            <PubSegmentedControl
                                values={this.props.bureauEducation._navArr}
                                fnChange={this.props.onChange.bind(this)}
                            >}
                            </PubSegmentedControl> : null}
                        {!this.props.state.contentSwitch ?
                            <React.Fragment>
                                {
                                    this.props.bureauEducation._bureauEducation[0].components.map((item: any) => {
                                        DynamicDetail = Loadable({
                                            loader: () => import(`../../components/${item.view}`),
                                            loading: () => <LoadingDom>
                                            </LoadingDom>
                                        });
                                        if (item.view === "epitome/epitome" && !item.data.rankTitle) {
                                            return <React.Fragment key={item.view}>
                                                {this.props.state.closeSwitch ?
                                                    <PubModel closeModel={this.props.close.bind(this)}
                                                              headTitle={'缺考名单'}>
                                                        <p className={'lack-modal'}>
                                                            {item.data.lackArr.length &&
                                                            item.data.lackArr.map((lackItem: string, lackIndex: number) =>
                                                                <span key={lackIndex}
                                                                      className={'lack-item'}>{lackItem}</span>)}
                                                        </p>
                                                    </PubModel> : null}
                                                <DynamicDetail data={item.data}
                                                               key={item.view}
                                                               openModal={this.props.open.bind(this)}
                                                >
                                                </DynamicDetail>
                                            </React.Fragment>
                                        }
                                        return <DynamicDetail data={item.data} key={item.view}>
                                        </DynamicDetail>
                                    })
                                }

                                <PubFoot>
                                </PubFoot>
                            </React.Fragment>
                            : this.props.bureauEducation._navArr[1] === "教师对比" ?
                                <React.Fragment>
                                    {/*教师对比*/}
                                    <PubNav
                                        navArr={this.props.state.subjectArr}
                                        subNavClick={this.props.subNavClick.bind(this)}>
                                    </PubNav>
                                    <TeacherContrast teacherJson={this.props.state.teacherJson}
                                                     bureauEducation={this.props.bureauEducation}
                                    >
                                    </TeacherContrast>
                                </React.Fragment>
                                : <React.Fragment>
                                    {/*成绩单*/}
                                    {
                                        this.props.bureauEducation._bureauEducation[1].components.map((item: any) => {
                                                DynamicDetail = Loadable({
                                                    loader: () => import(`../../components/${item.view}`),
                                                    loading: () => <LoadingDom>
                                                    </LoadingDom>
                                                });
                                                return <DynamicDetail
                                                    key={item.view}
                                                    data={item.data}>
                                                </DynamicDetail>
                                            }
                                        )}

                                </React.Fragment>
                        }

                    </React.Fragment>
                    : null
                }
            </div>
        )
    }
}

export default Headmaster;


