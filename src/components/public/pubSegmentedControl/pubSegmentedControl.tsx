/**
 * 公用的分段器组建
 * */
import {SegmentedControl, WingBlank} from "antd-mobile";
import * as React from "react";
import {Component} from "react";
import "./pubSegmentedControl.scss"


type PageOwnProps = {
    values: string[],
    fnChange: () => any
}

type PageState = {}


class PubSegmentedControl extends Component <PageOwnProps, PageState> {
    //分段器的change事件
    // @ts-ignore
    public onChange = (e: any) => this.props.fnChange(e.nativeEvent.selectedSegmentIndex);

    public render() {
        return (
            <WingBlank size="lg" className="headmaster-title">
                <SegmentedControl
                    tintColor={'#FFFFFF'}
                    values={this.props.values}
                    onChange={this.onChange}
                />
            </WingBlank>
        )
    }
}

export default PubSegmentedControl;


