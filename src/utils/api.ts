/**
 * api接口
 * */
const baseUrl: string = `/api/`;//base接口
export const loginApi: string = `${baseUrl}login`;//登录
export const bindApi: string = `${baseUrl}talk/login/index`;//绑定
export const individualApi:string = `${baseUrl}talk/user/index`;//个人信息
export const removeBindApi:string = `${baseUrl}talk/auth/release`;//解除绑定
export const examApi:string = `${baseUrl}/talk/exam/index`;//考试列表
export const chooseReportApi:string = `${baseUrl}talk/exam/group`;//报告列表
export const bureauEducationApi:string = `${baseUrl}talk/report/index`;//获取报告
