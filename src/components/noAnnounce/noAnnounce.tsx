/**
 * 暂无信息的通告
 * */
import * as React from "react";
import {Component} from "react";
import "./noAnnounce.scss"
import {connect} from "dva";

type PageOwnProps = {
    announceText: string,
    app:any,
}

type PageState = {
}


class NoAnnounce extends Component <PageOwnProps, PageState> {
    static defaultProps = {
        announceText: '',
    };


    public render() {
        return (
            <div>
                    <div className={'no-announce'}>
                        {this.props.announceText}
                    </div>
            </div>
        )
    }
}

export default connect(({app}:any) =>({
    app
}))(NoAnnounce);


