/**
 * 错误页面
 * */
import * as React from "react";
import {Component} from "react";
import {Button} from "antd-mobile";

import "./err.scss"
type PageOwnProps = {
    ownReset:() =>void
}

type PageState = {}


class Err extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={'err-warp'}>
                <p>网络请求超时，请刷新重试！</p>
                <Button type={"ghost"} className={'err-btn'}
                        onClick={this.props.ownReset.bind(this)}>
                    刷新
                </Button>
            </div>
        )
    }
}

export default Err;


