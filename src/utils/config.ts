/**
 * 路由菜单
 * */
const menuGlobal: object[] = [

    {
        id: "bind",
        name: "bind",
        path: "/bind",
        title: "绑定",
        models: () => [import('./../models/bind')],
        component: () => import('./../pages/bind/bind')
    }, {
        id: "individual",
        name: "individual",
        path: "/individual",
        title: "个人中心",
        models: () => [import('../models/individual')],
        component: () => import('./../pages/individual/individual')
    },
    {
        id: "choose_report",
        name: "choose_report",
        path: "/choose_report",
        title: "",
        models: () => [import('../models/choose_report')],
        component: () => import('./../pages/choose_report/choose_report'),

    },
    {
        id: "report",
        name: "report",
        path: "/report",
        title: "",
        models: () => [import('../models/report'),import('../models/bureauEducation')],
        component: () => import('./../pages/report/report'),
    },
    {
        id: "exam_list",
        name: "exam_list",
        path: "/",
        title: "考试列表",
        models: () => [import('../models/exam_list')],
        component: () => import('../pages/exam_list/exam_list')
    },

];
export default {
    menuGlobal
}
