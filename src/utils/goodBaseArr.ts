/**
 * 优劣学科的组装
 *@parse {any[]} initArr 传入的数组，应为对象数组，子项为score:分数，subject:科目名称
 * @return {string[]} getGood:返回
 * */
export default class GoodBaseArr {
    constructor(public initArr: any[] = []) {
        this.initArr = initArr;
    }
    public getGood():string[]{
        return this.initArr.reduce((arr,item) =>{
            if(item.score >=50){
                arr = [...arr,item.subject]
            }
            return arr
        },[])
    }
    public getBase():string[]{
        return this.initArr.reduce((arr,item) =>{
            if(item.score <50){
                arr = [...arr,item.subject]
            }
            return arr
        },[])
    }
}