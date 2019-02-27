import {gain_bind} from "../services";

export default {
    namespace: 'bind',
    state: {
        _bindMsg: '',
        _bindCode: 0
    },
    reducers: {
        "changeMsg"(state: any, {payload: {message, code}}: any) {
            return {
                ...state,
                bindMsg: message,
                bindCode: code
            }
        }
    },
    effects: {
        * queryBind({payload}: any, {call, put}: any) {
            try {
                let result: any = yield call(gain_bind, payload);
                let {message, code} = result;
                yield put({
                    type: 'changeMsg',
                    payload: {
                        message, code
                    }
                });
                return result;
            } catch (err) {
                console.log(`err is ${err}`)
            }

        }
    }
}