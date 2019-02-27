/**
 *等级划分对比斑马数据的重组数组
 * @param {object[]} gradeDivideArr 传入的对象数组
 * @param {object[]} ratioArr 传入的要增减ratio的已处理数组
 * @param {number} num 点击的等级的索引
 * @param {object[]} parallelArr 被增减的处理数组
 * @param {boolean} addSubtractSwitch 增减的开关（true:+,false:-）
 * @return {any} regroup 加载完成重组的数组（默认等级为A）
 * @return {any} changeRatio 当等级改变的时候返回的数组
 * */
export default class GradeInfo {
    constructor(public gradeDivideArr: object[] = [], public ratioArr: object[] = [],
                public num: number = 0, public parallelArr: object[] = [],
                public addSubtractSwitch: boolean = false
    ) {
        this.gradeDivideArr = gradeDivideArr;
        this.ratioArr = ratioArr;
        this.num = num;
        this.parallelArr = parallelArr;
        this.addSubtractSwitch = addSubtractSwitch;
    }

    public regroup(): any {
        return this.gradeDivideArr.reduce((initArr: any[], item: any) => {
            let initObj: object = {name: item.name};
            initObj['ratio'] = item.data[this.num].ratio;
            initArr = [...initArr, initObj];
            return initArr;
        }, [])
    }

    public changeRatio(): any {
        return this.ratioArr.reduce((initArr: any[], item: any, index: number) => {
            let initObj: object = {name: item.name};
            for (let child of this.parallelArr) {
                if (child['name'] === item.name) {
                    initObj['ratio'] = this.addSubtractSwitch ? item.ratio + child['ratio'] : item.ratio - child['ratio'];
                    break;
                }
            }
            initArr = [...initArr, initObj];
            return initArr;
        }, [])
    }

}