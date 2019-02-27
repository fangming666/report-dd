/**
 * 等级划分对比科目列表的change
 * @param {object[]} initArr 传入的要处理的对象数组
 * @param {number} num 传入的触发条件的索引
 * @param {object[]} turnArr 要进行状态判断的对象数组
 * @return {object[]} change 返回处理完毕的带有active的对象数组
 * @return {boolean} estate 返回当前是否为active的状态
 * */
export default class GradeDivideChange {
    constructor(public initArr: object[] = [], public num: number = 0, public turnArr: object[] = []) {
        this.initArr = initArr;
        this.num = num;
        this.turnArr = turnArr;
    }

    public change(): object[] {
        let otherArr = [...this.initArr];
        let initNum: number = 0;
        for (let i = 0; i < this.initArr.length; i++) {
            if (i === this.num) {
                this.initArr[i]['active'] = !this.initArr[i]['active'];
                break;
            }
        }
        this.initArr.map((item: any) => {
            if (item['active']) {
                initNum++
            }
        });
        return initNum ? this.initArr : otherArr;
    }

    public estate(): boolean {
        let result: boolean = false;
        for (let i = 0; i < this.turnArr.length; i++) {
            if (i === this.num) {
                result = this.turnArr[i]['active'];
                break;
            }
        }
        return result;
    }
}