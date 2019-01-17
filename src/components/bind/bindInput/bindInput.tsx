import * as React from "react";
import {Component} from "react";
import './bindInput.scss'
import {InputItem} from 'antd-mobile';

type PageOwnProps = {
    inputTitle: string,
    inputPlaceholder: string,
    changeInput: any,
    inputType:any
}

type PageState = {}


class BindInput extends Component <PageOwnProps, PageState> {

    public render() {
        return (
            <div className={'input-name'}>
                <p>
                    {this.props.inputTitle}
                </p>
                <InputItem
                    placeholder={this.props.inputPlaceholder}
                    clear
                    type={this.props.inputType}
                    onChange={
                        (val) => this.props.changeInput(val)
                    }
                    moneyKeyboardAlign="left"
                >
                </InputItem>
            </div>
        )
    }
}

export default BindInput;


