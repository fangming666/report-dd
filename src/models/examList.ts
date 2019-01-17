import {gain_exam} from "../services/exam";

export default {
    namespace: 'examList',
    state: {
        _examArr:[]
    },
    reducers: {
        "changeExam"(state: any, {payload: {data}}: any) {
            return {
                ...state,
                _examArr: data
            }
        }
    },
    effects:{
        * queryExam({payload}: any, {call, put}: any) {
            try {
                let result: any = yield call(gain_exam, payload);
                let {data} = result;
                yield put({
                    type: 'changeExam',
                    payload: {
                        data
                    }
                })

            } catch (err) {
                console.log(`err is ${err}`)
            }

        }
    }
}