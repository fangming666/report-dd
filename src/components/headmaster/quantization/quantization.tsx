/**
 * 学科分量化
 *   quantization: any[],
 quantizationHighestArr: string[]//最高分人数的数组
 quantizationLowestArr: string[]//最低分人数的数组
 * */
import * as React from "react";
import {Component} from "react";
import {connect} from "dva";
import "./quantization.scss"
import PubProgress from "../../public/pubProgress/pubProgress"//公用的斑马线

type PageOwnProps = {
    data: any,
    bureauEducation: any,
}

type PageState = {}

@connect(({bureauEducation}: any) => ({
    bureauEducation
}))
class Quantization extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <React.Fragment>
                {this.props.data.quantization && this.props.data.quantization.length ?
                    <div className={'quantization base-box'}>
                        <h5 className={'box-title'}>
                            {this.props.bureauEducation._subjectName}-学科分量化
                        </h5>
                        <p className={'quantization-info'}>
                            本次考试量化分最高的是{this.props.data.quantizationHighestArr.map((item: string, index: number) =>
                            <span
                                key={index}>{item}{index < this.props.data.quantizationHighestArr.length - 1 ? "、" : ""}</span>)}
                        </p>
                        <p className={'quantization-info m-b-1'}>
                            最低的是{this.props.data.quantizationLowestArr.map((item: string, index: number) =>
                            <span
                                key={index}>{item}{index < this.props.data.quantizationLowestArr.length - 1 ? "、" : ""}</span>)}
                        </p>
                        {this.props.data.quantization.map((item: any, index: number) =>
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


