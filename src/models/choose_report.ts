import {gain_choose_report} from "../services";

export default {
    namespace: 'choose_report',
    state: {
        _chooseReportList: [],
        _parentIndex: -1,
        _ownIndex: -1
    },
    reducers: {
        //修改选择报告的列表
        "changeChooseReport"(state: any, {payload: {data}}: any) {
            return {
                ...state,
                _chooseReportList: data
            }
        },
        //修改index方便对比进行active的显示
        "changeIndex"(state: any, {payload: {parentIndex, ownIndex}}: any) {
            return {
                ...state,
                _parentIndex: parentIndex,
                _ownIndex: ownIndex
            }
        }
    },
    effects: {
        * queryChooseReport({payload}: any, {call, put}: any) {
            let result: any = yield call(gain_choose_report, payload);
            let {data} = result;
            yield put({
                type: 'changeChooseReport',
                payload: {
                    data
                }
            })
        }
    }
}