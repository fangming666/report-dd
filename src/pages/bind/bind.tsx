/**
 * 绑定页面
 * */
import * as PropTypes from "prop-types";
import * as React from "react";
import {Component} from "react";
import BindInput from "../../components/bind/bindInput/bindInput"
import "./bind.scss"
//@ts-ignore
import {List, Button, Toast} from "antd-mobile";
import {connect} from "dva";

type PageOwnProps = {
    bind: any,
    dispatch: any,
}

type PageState = {
    usernameVal: any,
    passwordVal: any
}


class Bind extends Component <PageOwnProps, PageState> {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            usernameVal: '',//账号信息
            passwordVal: '',//密码信息
        }
    }

    //账号输入的函数
    private usernameChange(val: any) {
        this.setState({
            usernameVal: val
        })
    };

    //密码输入
    private passwordChange(val: any) {
        this.setState({
            passwordVal: val
        })
    }

    //点击绑定
    private async submitAll() {
        if (!this.state.usernameVal) {
            Toast.info("账号不能为空", 1);
        } else if (!this.state.passwordVal) {
            Toast.info("密码不能为空", 1)
        } else {
            //请求绑定接口
            let {dispatch} = this.props;
            try {
                await dispatch({
                    type: 'bind/queryBind',
                    payload: {
                        username: this.state.usernameVal,
                        password: this.state.passwordVal
                    }
                });
                if (this.props.bind._bindCode) {
                    //密码错误
                    Toast.info(this.props.bind._bindMsg, 1)
                } else {
                    //绑定成功并跳转到考试列表
                    Toast.info('绑定成功', 1);
                    setTimeout(() => {
                        this.context.router.history.push({pathname: '/'});
                    }, 1500)
                }
            } catch (e) {

            }


        }

    }

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
                        changeInput={this.usernameChange.bind(this)}
                    >
                    </BindInput>
                    <BindInput
                        inputTitle={'密码'}
                        inputPlaceholder={'请输入密码'}
                        inputType={'password'}
                        changeInput={this.passwordChange.bind(this)}
                    >
                    </BindInput>
                </List>
                <Button type={'ghost'} className={'bind-submit'}
                        onClick={this.submitAll.bind(this)}>
                    绑定
                </Button>
                <p className={'bind-info'}>
                    注：开通园丁邦服务时，工作人员将下发园丁邦账号密码，忘记密码可联系考试管理员（sd_wfkw）重置。
                </p>
            </div>
        )
    }
}

export default connect(({bind}: any) => ({
    bind
}))(Bind);


