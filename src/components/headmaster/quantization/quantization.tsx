/**
 * 学科分量化
 * */
import * as React from "react";
import {Component} from "react";
import {connect} from "dva";
import "./quantization.scss"
import PubProgress from "../../public/pubProgress/pubProgress"//公用的斑马线

type PageOwnProps = {
    quantizationArr: any[],
    bureauEducation: any,
    quantizationHighestArr: string[]//最高分人数的数组
    quantizationLowestArr: string[]//最低分人数的数组
}

type PageState = {}

@connect(({bureauEducation}: any) => ({
    bureauEducation
}))
class Quantization extends Component <PageOwnProps, PageState> {

    public render() {
        return (
            <React.Fragment>
                {this.props.quantizationArr && this.props.quantizationArr.length ?
                    <div className={'quantization base-box'}>
                        <h5 className={'box-title'}>
                            {this.props.bureauEducation._subjectName}-学科分量化
                        </h5>
                        <p className={'quantization-info'}>
                            本次考试量化分最高的是{this.props.quantizationHighestArr.map((item: string, index: number) =>
                            <span
                                key={index}>{item}{index < this.props.quantizationHighestArr.length - 1 ? "、" : ""}</span>)}
                        </p>
                        <p className={'quantization-info m-b-1'}>
                            最低的是{this.props.quantizationLowestArr.map((item: string, index: number) =>
                            <span
                                key={index}>{item}{index < this.props.quantizationLowestArr.length - 1 ? "、" : ""}</span>)}
                        </p>
                        {this.props.quantizationArr.map((item: any,index:number) =>
                            <PubProgress score={item.score} userName={item.name} info={item.score} key={index}>
                            </PubProgress>)}
                    </div>
                    : null
                }
            </React.Fragment>
        )
    }
}

export default Quantization;


