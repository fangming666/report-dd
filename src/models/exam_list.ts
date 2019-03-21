import {gain_exam} from "../services";

export default {
    namespace: 'exam_list',
    state: {
        _examArr: [],//考试列表
        _currPage: 1,//页码
    },
    reducers: {
        "changeExam"(state: any, {payload: {data, currPage}}: any) {

            return {
                ...state,
                _examArr: [...state._examArr, ...data],
                _currPage: currPage + 1,
            }
        },
        "emptyExam"(state: any) {
            return {
                ...state,
                _examArr: [],

            }
        },
        "reduceCurrPage"(state: any) {
            return {
                ...state,
                _currPage: state._curragePage === 1 ? 1 : state._currPage - 1
            }
        }
    },
    effects: {
        * queryExam({payload}: any, {call, put}: any) {
            try {
                let data: any[] = [], {currPage} = payload;//initSwitch:true(初始请求)||false(上拉加载请求)

                //检验是否有缓存
                if (localStorage.getItem("examList")) {
                    //去缓存里面的数据
                    let result: any = localStorage.getItem("examList");
                    data = JSON.parse(result);
                } else {
                    //请求接口，将数据存到缓存里面
                        let result: any = yield call(gain_exam, payload);
                        data = result.exams;

                    //将"exam_list"作为key进行缓存
                    // localStorage.setItem("examList", JSON.stringify(data));
                }
                yield put({
                    type: 'changeExam',
                    payload: {
                        data,
                        currPage
                    }
                })

            } catch (err) {
                console.log(`err is ${err}`);
                return Promise.reject(err);
            }

        }
    }
}
