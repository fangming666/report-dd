/**
 * 进行请求
 * */
import * as fetch from 'dva/fetch';
import {Toast} from "antd-mobile";
import {myEmitter} from '../utils/emitter';


function checkStatus(response: any) {
    if (response.status >= 200 && response.status < 300) {
        // 传递参数到下级
        return response.json();
    }
    throw new Error('fail++');
}

//处理code
function manageCode(data: any) {
    // 判断是否有一些需要全局拦截的自定义code
    if (data.status !== 200) {
        throw new Error(`${data.status}++${data.msg}`);
    }
    // 传递参数到下级
    return data;
}


/**
 * Requests a URL, returning a promise.
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @param shelterSwitch
 * @return {object}           An object containing either "data" or "err"
 */
const request = (url: string, options: any = {}, shelterSwitch: boolean = false) => {
    Toast.loading('Loading...', 0);
    // @ts-ignore
    const user_id: string | number | null = JSON.parse(localStorage.getItem("user_id"))||null;
    // @ts-ignore
    const talk_user_id: string | number | null = JSON.parse(localStorage.getItem("talk_user_id"))||null;
    options = {...options, user_id, talk_user_id};
    if (shelterSwitch) {
        myEmitter.emit("TOGGLE_Shelter", true);
        myEmitter.emit("TOGGLE_content", false);
    }
    return Promise.race([
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(options)
        })
            .then(checkStatus)
            .then(manageCode),
        //fetch进行超时操作
        new Promise(function (resolve, reject) {
            setTimeout(() => reject(new Error('request timeout')), 60000)
        })])
        .then(data => {
            if (shelterSwitch) {
                myEmitter.emit("TOGGLE_Shelter", false);
            }
            myEmitter.emit("TOGGLE_content", true);
            myEmitter.emit("TOGGLE_err", false);
            Toast.hide();
            return data;
        })
        .catch(err => {
                Toast.hide();
                if (err.message && (+err.message.split("++")[0] === 200 || err.message.split("++")[0] === 'fail')) {
                    if (shelterSwitch) {
                        myEmitter.emit("TOGGLE_Shelter", false);
                    }
                    myEmitter.emit("TOGGLE_content", false);
                    myEmitter.emit("TOGGLE_err", true);
                } else {
                    Toast.info(err.message ? err.message.split("++")[1] : 'error', 2);
                }
                return Promise.reject(err);
            }
        );
};

export default request
