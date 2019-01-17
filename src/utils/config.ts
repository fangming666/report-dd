/**
 * 路由菜单
 * */
const menuGlobal: object[] = [
    {
        id: "examList",
        name: "examList",
        path: "/",
        title:"考试列表",
        models: () => [import('./../models/examList')],
        component: () => import('./../pages/examList/examList')
    },
    {
        id: "bind",
        name: "bind",
        path: "/bind",
        title:"绑定",
        models: () => [import('./../models/bind')],
        component: () => import('./../pages/bind/bind')
    },   {
        id: "individual",
        name: "individual",
        path: "/individual",
        title:"个人中心",
        models: () => [import('../models/individual')],
        component: () => import('./../pages/individual/individual')
    },

];
export default {
    menuGlobal
}