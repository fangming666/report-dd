import {Toast} from "antd-mobile";
import * as PropTypes from "prop-types";
import * as React from "react";
import {Component} from "react";


type PageOwnProps = {
    bind: any,
    dispatch: any,
    history: any
}

type PageState = {
    usernameVal: any,
    passwordVal: any
}


const hoc = (WrappedComponent: React.ComponentType<{}>): React.ComponentClass<{}> => {
    return class extends Component<PageOwnProps, PageState> {
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
                let result: any;
                try {
                    result = await dispatch({
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
                        //知晓权限
                        dispatch({
                            type: "app/changeAuthority",
                            payload: {
                                authority: result.authority
                            }
                        });
                        //绑定成功并跳转到考试列表
                        Toast.info('绑定成功', 1);
                        setTimeout(() => {
                            this.props.history.push({
                                pathname: "/",

                            })
                        }, 1500)
                    }
                } catch (e) {

                }


            }

        }


        render() {
            const props = {
                ...this.props,
                state: this.state,
                usernameChange: this.usernameChange.bind(this),
                passwordChange: this.passwordChange.bind(this),
                submitAll: this.submitAll.bind(this)
            };
            return <WrappedComponent
                {...props}
            />
        }
    }
};

export default hoc as any;


