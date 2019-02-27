/**
 * 公共模态框
 * */
import * as React from "react";
import {Component} from "react";
import closeIcon from "../../../assets/imgs/close.png"
import './pubModel.scss'

type PageOwnProps = {
    headTitle: string,
    closeModel: () => void,
    children: any
}

type PageState = {}


class PubModel extends Component <PageOwnProps, PageState> {
    //点击外部阻止事件捕获从而关闭模态框
    private close(e: any) {
        if( e.target.matches('div.pub-model-warp')){
            this.props.closeModel();
        }
    }

    public render() {
        return (
            <div className={'pub-model-warp'} onClick={this.close.bind(this)}>
                <div className={'pub-model'}>
                    <header className={'pub-model-head'}>
                        {this.props.headTitle}
                        <img src={closeIcon} alt="close" onClick={this.props.closeModel.bind(this)}/>
                    </header>
                    <section className={'pub-model-content'}>
                        {this.props.children}
                    </section>
                </div>
            </div>
        )
    }
}

export default PubModel;


