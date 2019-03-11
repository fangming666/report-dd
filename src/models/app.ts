import {gain_login, gain_remove_bind} from "../services";

export default {
    namespace: 'app',
    state: {
        _loginStatus: true,
        _loginSpring: 1,
        _authority: -1,//权限
    },
    reducers: {
        //改变登录状态
        "changeLogin"(state: any, {payload: {loginStatus}}: any) {
            return {
                ...state,
                _loginStatus: loginStatus,
                _loginSpring: 0
            }
        },
        //知晓权限
        "changeAuthority"(state: any, {payload: {authority}}: any) {
            return {
                ...state,
                _authority: authority
            }
        }
    },
    effects: {
        //获取登录状态
        * queryLogin(_: null, {call, put}: any) {
            try {
                let result: any = yield call(gain_login);
                let {loginStatus, authority} = result;
                yield put({
                    type: 'changeLogin',
                    payload: {
                        loginStatus
                    }
                });
                yield put({
                    type: 'changeAuthority',
                    payload: {
                        authority
                    }
                })
            } catch (err) {
                console.log(`err is ${err}`)
            }

        },
        //解除绑定
        * removeBind(_: null, {call, put}: any) {
            try {
                yield call(gain_remove_bind);
                yield put({
                    type: 'changeLogin',
                    payload: {
                        loginStatus: false
                    }
                });
            } catch (err) {
                console.log(`err is ${err}`)
            }
        }
    }
}
