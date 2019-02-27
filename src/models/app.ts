import {gain_login} from "../services";

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

        }
    }
}