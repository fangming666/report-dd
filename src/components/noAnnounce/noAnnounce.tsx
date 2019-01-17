/**
 * 暂无信息的通告
 * */
import * as React from "react";
import {Component} from "react";


type PageOwnProps = {
    announceText:string
}

type PageState = {}


class NoAnnounce extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={'no-announce'}>
                {this.props.announceText}
            </div>
        )
    }
}

export default NoAnnounce;


