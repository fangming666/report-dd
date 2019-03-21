import {gain_remove_bind} from "../services";
import {GetRequest} from "../utils";

export default {
    namespace: 'app',
    state: {
        _userId: true,
        _loginSpring: 1,
        _authority: -1,//权限
        _shelter: true,//遮挡白版
        _backSwitch: false,//页面的返回开关（当能跳转的时候置为true,不能跳转的时候置为false）

    },
    reducers: {
        //改变登录状态
        "changeLogin"(state: any, {payload: {user_id}}: any) {
            return {
                ...state,
                _userId: user_id,
                _loginSpring: 0
            }
        },

        //改变白版的显示状态
        "changeShelter"(state: any, {payload: {shelter}}: any) {
            return {
                ...state,
                _shelter: shelter
            }
        },
        //改变绑定返回的状态
        "changeBack"(state: any, {payload: {backSwitch}}: any) {
            return {
                ...state,
                _backSwitch: backSwitch
            }
        }
    },
    effects: {
        //获取登录状态
        * queryLogin(_: null, {call, put}: any) {
            // @ts-ignore
            try {
                let user_id = '';
                let result: any = yield new GetRequest().the();
                // @ts-ignore
                if (localStorage.getItem("user_id") && !result.hasOwnProperty("user_id")) {
                    //@ts-ignore
                    user_id = JSON.parse(localStorage.getItem("user_id"))
                } else {
                    localStorage.setItem("talk_user_id", result.talk_user_id || null);
                    localStorage.setItem("user_id", result.user_id || null);
                    user_id = result.user_id;//当user_id为空的时候，为未登录，需要跳转到登录页面
                }
                yield put({
                    type: 'changeLogin',
                    payload: {
                        user_id
                    }
                });
            } catch (err) {
                console.log(`err is ${err}`)
            }

        },
        //解除绑定
        * releaseBind(_: null, {call, put}: any) {
            try {
                let result: any = yield call(gain_remove_bind);
                yield put({
                    type: 'changeLogin',
                    payload: {
                        loginStatus: false
                    }
                });
                localStorage.removeItem("user_id");
                return result;
            } catch (err) {
                console.log(`err is ${err}`);
                return Promise.reject(err);
            }

        }
    }
}
