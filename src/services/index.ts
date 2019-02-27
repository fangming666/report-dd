import request from "./server";
import {
    individualApi,
    loginApi,
    removeBindApi,
    bindApi,
    chooseReportApi,
    examApi,
    bureauEducationApi
} from "../utils/api";

/**
 * 进行登录
 * */
export function gain_login() {
    return request(loginApi, {}, true)
}


/**
 * 个人中心信息
 * */
export function gain_individual(reqObj: any) {
    return request(individualApi, reqObj)
}


export function gain_remove_bind(reqObj: any) {
    return request(removeBindApi, reqObj)
}

/**
 * 进行绑定
 * */

export function gain_bind(reqObj: any) {
    return request(bindApi, reqObj)
}

/**
 * 选择报告
 * */
export function gain_choose_report(reqObj: any) {
    return request(chooseReportApi, reqObj)
}

/**
 * 考试列表
 * */
export function gain_exam(reqObj: any) {
    return request(examApi, reqObj)
}

/**
 * 区县教研员全科
 * */
export function gain_bureauEducation(reqObj: any) {
    return request(bureauEducationApi, reqObj)
}