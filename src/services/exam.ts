/**
 * 进行绑定
 * */
import request from "./server";
import {examApi} from "../utils/api";

export function gain_exam(reqObj:any) {
    return request(examApi,reqObj)
}
