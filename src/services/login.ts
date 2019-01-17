/*
* 进行登录
* */
import request from "./server";
import {loginApi} from "../utils/api";

export function gain_login() {
    return request(loginApi,{},true)
}