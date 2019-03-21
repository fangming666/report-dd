import {gain_individual} from "../services";

export default {
    namespace: 'individual',
    state: {
        _username: "",
        _accountNumber: "",
        _teach: []
    },
    reducers: {
        "changeIndividual"(state: any, {payload: {username, real_name, teacher_class}}: any) {
            return {
                ...state,
                _username: username,
                _accountNumber: real_name,
                _teach: teacher_class
            }
        }
    },
    effects: {
        //请求个人数据
        * queryIndividual(_: any, {call, put}: any) {
            try {
                let result: any = yield call(gain_individual);
                let {username, real_name, teacher_class} = result;
                yield put({
                    type: 'changeIndividual',
                    payload: {
                        username, real_name, teacher_class
                    }
                })

            } catch (err) {
                console.log(`err is ${err}`);
                return Promise.reject(err);
            }

        },
    }
}
