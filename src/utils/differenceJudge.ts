/**
 * 学校对比组件单元格对类名的判断]
 * @param {number|string}  difference  传入的判断依据
 * @param {boolean} special 特殊类名的开关控制
 * @return {string} goJudge
 * */
export default class DifferenceJudge {
    constructor(public difference: number | string = '/', public special: boolean = false) {
        this.difference = difference;
        this.special = special;
    }

    public goJudge(): string {
        let resultClassName: string = '';//span的类名
        if (this.difference === "/") {
            resultClassName = this.special ? '' : 'contrast-normal';
        } else if (this.difference === 0) {
            resultClassName = 'contrast-normal'
        } else if (this.difference > 0) {
            resultClassName = 'contrast-success'
        } else if (this.difference < 0) {
            resultClassName = 'contrast-danger'
        }
        return resultClassName
    }
}