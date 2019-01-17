/**
 * 公共头部
 * */
import * as React from "react";
import {Component} from "react";
import "./listHead.scss"

type PageOwnProps = {
    listHeadTitle:string,
    children:any
}

type PageState = {}


class ListHead extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={'list-head clearfix'}>
               <span>
                   {this.props.listHeadTitle}
               </span>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default ListHead;


