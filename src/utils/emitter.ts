/**
 * 事件监听处理
 * */
const EventEmitter = require('events').EventEmitter;

class MyEmitter extends EventEmitter {
}

const myEmitter: any = new MyEmitter();

//空白遮挡的方法
function toggleShelter(result: boolean) {
    const shelterDom: any = document.getElementsByClassName("shelter-all")[0];
    shelterDom.style.display = result ? "block" : "none";
}

//内容区域是否显示
function toggleContent(result: boolean) {
    const contentDom: any = document.getElementsByClassName("content")[0];
    contentDom.style.display = result ? "block" : "none";
}

//err是否显示
function toggleErr(result: boolean) {
    const errDom: any = document.getElementsByClassName("err-warp")[0];
    errDom.style.display = result ? "block" : "none";
}


//监听Shelter事件
myEmitter.on("TOGGLE_Shelter", toggleShelter);

//监听toggleContent事件
myEmitter.on("TOGGLE_content", toggleContent);

//监听toggleErr事件
myEmitter.on("TOGGLE_err", toggleErr);

export {
    myEmitter
}