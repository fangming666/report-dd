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
    const error: any = new Error(response.statusText);
    error.response = response;
    throw error;
}

//处理code
function manageCode(data: any) {
    // 判断是否有一些需要全局拦截的自定义code
    switch (data.code) {
        case 1:
            return new Promise((resolve, reject) => reject("参数错误"));
        default:
            break;
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
            setTimeout(() => reject(new Error('request timeout')), 15000)
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
                throw new Error(err);
                if (shelterSwitch) {
                    myEmitter.emit("TOGGLE_Shelter", false);
                }
                myEmitter.emit("TOGGLE_content", false);
                myEmitter.emit("TOGGLE_err", true);
                Toast.hide();
            }
        );
};

export default request