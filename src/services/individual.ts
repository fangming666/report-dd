/**
 * 个人中心信息
 * */
import request from "./server";
import {individualApi,removeBindApi} from "../utils/api";


export function gain_individual(reqObj:any) {
    return request(individualApi,reqObj)
}


export function gain_remove_bind(reqObj:any) {
    return request(removeBindApi,reqObj)
}