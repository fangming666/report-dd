import * as React from "react";
import {Component} from "react";
import "./loadingDom.scss";
import {Spin} from 'antd';


type PageOwnProps = {}

type PageState = {}


class LoadingDom extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={'loading-dom'}>
                <Spin/>
            </div>
        )
    }
}

export default LoadingDom;


