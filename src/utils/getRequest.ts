/**
 * 获取外部应用（如小程序，E应用）通过url传过来的参数方便进行业务逻辑的处理
 * @param {string} url 传入的url，获取url中"?"符后的字串
 * @return {object} the() 返回截取的参数
 * */
class GetRequest {
    constructor(public url: string = location.search) {
        this.url = url;//获取url中"?"符后的字串
    }

    public the(): object {
        let theRequest: object = {};
        let strs: string[] = [''];
        if (this.url.indexOf("?") != -1) {
            let str = this.url.substr(1);
            strs = str.split("&");
            for (let i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
}