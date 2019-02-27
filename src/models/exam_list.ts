import {gain_exam} from "../services";

export default {
    namespace: 'exam_list',
    state: {
        _examArr: ["test"],//避免出现无考试页面，所以默认不为空
    },
    reducers: {
        "changeExam"(state: any, {payload: {data}}: any) {
            return {
                ...state,
                _examArr: data
            }
        }
    },
    effects: {
        * queryExam({payload}: any, {call, put}: any) {
            try {
                let data: any = "";
                //检验是否有缓存
                if (localStorage.getItem("examList")) {
                    //去缓存里面的数据
                    let result:any = localStorage.getItem("examList");
                    data = JSON.parse(result);
                } else {
                    //请求接口，将数据存到缓存里面
                    let result: any = yield call(gain_exam, payload);
                    data = result.data;
                    //将"exam_list"作为key进行缓存
                    localStorage.setItem("examList", JSON.stringify(data));
                }
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