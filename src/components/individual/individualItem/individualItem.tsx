/*
* 个人中心子内容
* */
import * as React from "react";
import {Component} from "react";
import './individualItem.scss'


type PageOwnProps = {
    individualItemName:string,
    children:any
}

type PageState = {}


class IndividualItem extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={'individual-item'}>
                <p>{this.props.individualItemName}</p>
                <div className={'individual-item-content'}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default IndividualItem;


