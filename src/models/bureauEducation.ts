import {gain_bureauEducation} from "../services";

export default {
    namespace: 'bureauEducation',
    state: {
        _bureauEducation: [],
        _navArr: [],//分段器的数组
        _subjectName: '',//科目名称（教师对比学科量化分）
    },
    reducers: {
        "changeBureauEducation"(state: any, {payload: {data}}: any) {
            return {
                ...state,
                _bureauEducation: data,
                _navArr: data.reduce((initArr:string[], item:any)  => {
                    initArr = [...initArr,item.name];
                    return initArr
                }, [])
            }
        },
        "changeSubjectName"(state: any, {payload: {subjectName}}: any) {
            return {
                ...state,
                _subjectName: subjectName,
            }
        }
    },
    effects: {
        * queryBureauEducation({payload}: any, {call, put}: any) {
            try {
                let result: any = yield call(gain_bureauEducation, payload);
                let {data} = result;
                yield put({
                    type: "changeBureauEducation",
                    payload: {
                        data
                    }
                })
            } catch (err) {
                throw new Error(err)
            }

        }
    }
}
