/**
 * 绑定页面
 * */
import * as React from "react";
import {Component} from "react";
import BindInput from "./../../components/bind/bindInput/bindInput";
import "./bind.scss"
//@ts-ignore
import {List, Button} from "antd-mobile";
import {connect} from "dva";
import hoc from "./hoc";

type PageOwnProps = {
    usernameChange: () => void,
    submitAll: () => void,
    passwordChange: () => void
}

type PageState = {}

@connect(({bind,app}: any) => ({
    bind,app
}))
@hoc
class Bind extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={'bind'}>
                <div className={'bind-alert'}>
                    您还未绑定园丁邦账号，需先绑定账号，绑定后可直接查看分析报告。
                </div>
                <List className={'bind-input-warp'}>
                    <BindInput
                        inputTitle={'账号'}
                        inputPlaceholder={'请输入账号'}
                        inputType={'text'}
                        changeInput={this.props.usernameChange.bind(this)}
                    >
                    </BindInput>
                    <BindInput
                        inputTitle={'密码'}
                        inputPlaceholder={'请输入密码'}
                        inputType={'password'}
                        changeInput={this.props.passwordChange.bind(this)}
                    >
                    </BindInput>
                </List>
                <Button type={'ghost'} className={'bind-submit'}
                        onClick={this.props.submitAll.bind(this)}>
                    绑定
                </Button>
                <p className={'bind-info'}>
                    注：开通园丁邦服务时，工作人员将下发园丁邦账号密码，忘记密码可联系考试管理员（sd_wfkw）重置。
                </p>
            </div>
        )
    }
}

export default Bind;


