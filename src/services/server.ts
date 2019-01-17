/**
 * 进行请求
 * */
import * as fetch from 'dva/fetch';
import {Toast} from "antd-mobile";
import {myEmitter} from '../utils/emitter';

function parseJSON(response: any) {
    return response.json();
}

function checkStatus(response: any) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error: any = new Error(response.statusText);
    error.response = response;
    throw error;
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
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
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