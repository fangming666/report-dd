import {gain_individual} from "../services";

export default {
    namespace:'individual',
    state: {
        _username: "",
        _accountNumber: "",
        _teach: []
    },
    reducers: {
        "changeIndividual"(state: any, {payload: {username, accountNumber, teach}}: any) {
            return {
                ...state,
                _username: username,
                _accountNumber: accountNumber,
                _teach: teach
            }
        }
    },
    effects: {
        //请求个人数据
        * queryIndividual(_: any, {call, put}: any) {
            try {
                let result: any = yield call(gain_individual);
                let {username, accountNumber, teach} = result;
                yield put({
                    type: 'changeIndividual',
                    payload: {
                        username, accountNumber, teach
                    }
                })

            } catch (err) {
                console.log(`err is ${err}`)
            }

        },
    }
}
