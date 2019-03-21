/**
 * 公用的分段器组建
 * */
import {SegmentedControl, WingBlank} from "antd-mobile";
import * as React from "react";
import {Component} from "react";
import "./pubSegmentedControl.scss"


type PageOwnProps = {
    values: string[],
    fnChange: () => any,
}

type PageState = {
    initNum:number
}


class PubSegmentedControl extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            initNum :0
        }
    }

    //分段器的change事件
    // @ts-ignore
    public onChange = (e: any) => {
        this.setState({
            initNum:e.nativeEvent.selectedSegmentIndex
        });
        //@ts-ignore
        return this.props.fnChange(e.nativeEvent.selectedSegmentIndex);
    };

    public render() {
        return (
            <WingBlank size="lg" className="headmaster-title">
                <SegmentedControl
                    tintColor={'#FFFFFF'}
                    selectedIndex={this.state.initNum}
                    values={this.props.values}
                    onChange={this.onChange}
                />
            </WingBlank>
        )
    }
}

export default PubSegmentedControl;


