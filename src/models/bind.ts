import {gain_bind} from "../services";

export default {
    namespace: 'bind',
    state: {
        _bindMsg: '',
        _bindCode: 0
    },
    reducers: {
        "changeMsg"(state: any, {payload: {msg, status}}: any) {
            return {
                ...state,
                _bindMsg: msg,
                _bindCode: status
            }
        }
    },
    effects: {
        * queryBind({payload}: any, {call, put}: any) {
            try {
                let result: any = yield call(gain_bind, payload);
                localStorage.setItem("user_id", result['user_id']);
                let {msg, status} = result;
                yield put({
                    type: 'changeMsg',
                    payload: {
                        msg, status
                    }
                });
                return result;
            } catch (err) {
                console.log(`err is ${err}`);
                return Promise.reject(err);
            }

        }
    }
}
