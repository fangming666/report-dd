import {gain_login} from "../services/login";

export default {
    namespace: 'app',
    state: {
        _loginStatus: true,
        _loginSpring: 1
    },
    reducers: {
        "changeLogin"(state: any, {payload: {loginStatus}}: any) {
            return {
                ...state,
                _loginStatus: loginStatus,
                _loginSpring:0
            }
        }
    },
    effects: {
        * queryLogin(_: null, {call, put}: any) {
            try {
                let result: any = yield call(gain_login);
                let {loginStatus} = result;
                yield put({
                    type: 'changeLogin',
                    payload: {
                        loginStatus
                    }
                })
            } catch (err) {
                console.log(`err is ${err}`)
            }

        }
    }
}