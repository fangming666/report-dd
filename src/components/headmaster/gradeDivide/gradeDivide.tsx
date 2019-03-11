/**
 * 等级划分对比
 *  divisionContrast: any[],
 * */
import * as React from "react";
import {Component} from "react";
import {connect} from "dva";
import "./gradeDivide.scss"
import PubProgress from "../../public/pubProgress/pubProgress"//公用的斑马线
import {GradeInfo, GradeDivideChange, CompareSort} from "../../../utils";


type PageOwnProps = {
    data: any,
    bureauEducation: any
}

type PageState = {
    gradeArr: object[],
    gradeInfoArr: object[]
}

@connect(({bureauEducation}: any) => ({
    bureauEducation
}))
class GradeDivide extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            gradeArr: [{'text': "A", 'active': true}
                , {'text': "B", 'active': false},
                {'text': "C", 'active': false},
                {'text': "D", 'active': false},
                {'text': "E", 'active': false},
            ],//科目数组
            gradeInfoArr: [],//等级分内容数组
        }
    }

    componentDidMount(): void {
        if (!this.props.data.divisionContrast || !this.props.data.divisionContrast.length) {
            return;
        }
        this.setState({
            gradeInfoArr: new CompareSort(new GradeInfo(this.props.data.divisionContrast).regroup()).sort()
        })
    }

    componentWillReceiveProps(nextProps: Readonly<PageOwnProps>, nextContext: any): void {
        if (!this.props.data.divisionContrast || !this.props.data.divisionContrast.length) {
            return;
        }
        this.setState({
            gradeInfoArr: new CompareSort(new GradeInfo(nextProps.data.divisionContrast).regroup()).sort()
        })
    }


    //等级的点击事件
    private changeGrade(num: number): any {
        let ownArr: object[] = new GradeInfo(this.props.data.divisionContrast, [], num).regroup();//当前点击的数组
        let estateSwitch: boolean = true;//当前是否激活active的开关
        this.setState({
            gradeArr: new GradeDivideChange(this.state.gradeArr, num).change(),
        }, () => {
            estateSwitch = new GradeDivideChange([], num, this.state.gradeArr).estate();
            this.setState({
                gradeInfoArr: new CompareSort(new GradeInfo([], this.state.gradeInfoArr, num, ownArr, estateSwitch).changeRatio()).sort()
            })
        })
    }

    public render() {
        return (
            <>
                {this.props.data.divisionContrast && this.props.data.divisionContrast.length ?
                    <div className={'grade-divide base-box'}>
                        <h5 className={'box-title'}>{this.props.bureauEducation._subjectName}-等级划分对比</h5>
                        <dl>
                            <dt>我要查看:</dt>
                            <dd>
                                {this.state.gradeArr.map((item: any, index: number) =>
                                    <span onClick={this.changeGrade.bind(this, index)}
                                          className={item.active ? 'grade-divide-active' : ''}
                                          key={index}>{item.text}</span>)}
                            </dd>
                        </dl>
                        {this.state.gradeInfoArr.length && this.state.gradeInfoArr.map((item: any, index: number) =>
                            <PubProgress colorClass={'primary-progress'} score={item.ratio} userName={item.name}
                                         info={`${item.ratio}%`} key={index}>
                            </PubProgress>)}
                    </div>
                    :
                    null
                }

            </>
        )
    }
}

export default GradeDivide;


