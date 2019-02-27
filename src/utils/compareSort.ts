/**
 * 对象数组的排序
 *@param {object[]} initArr:传入的对象数组
 *@param {string|number} syllable:根据某个字段进行排序
 *@return {object[]} sort:返回排序的结果
 * */

export default class CompareSort {
    constructor(public initArr: object[] = [], public syllable: string | number = 'ratio') {
        this.initArr = initArr;
        this.syllable = syllable;
    }

    public sort(): object[] {
        return this.initArr.sort(this.compareDown(this.initArr, this.syllable))
    }

    //升序
    public compareUp(data: any[], propertyName: any): any { // 升序排序
        if ((typeof data[0][propertyName]) != "number") { // 属性值为非数字
            return function (object1: object, object2: object) {
                let value1 = object1[propertyName];
                let value2 = object2[propertyName];
                return value1.localeCompare(value2);
            }
        } else {
            return function (object1: object, object2: object) { // 属性值为数字
                let value1 = object1[propertyName];
                let value2 = object2[propertyName];
                return value1 - value2;
            }
        }
    }

    //降序
    public compareDown(data: any[], propertyName: any): any { // 升序排序
        if ((typeof data[0][propertyName]) != "number") { // 属性值为非数字
            return function (object1: object, object2: object) {
                let value1 = object1[propertyName];
                let value2 = object2[propertyName];
                return value1.localeCompare(value2);
            }
        } else {
            return function (object1: object, object2: object) { // 属性值为数字
                let value1 = object1[propertyName];
                let value2 = object2[propertyName];
                return value2 - value1;
            }
        }
    }
}