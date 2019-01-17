/**
 * 进行绑定
 * */
import request from "./server";
import {bindApi} from "../utils/api";

export function gain_bind(reqObj:any) {
    return request(bindApi,reqObj)
}
