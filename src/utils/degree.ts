/**
 * 试卷质量区分度评价
 * @param {number} degreeVal 区分度系数
 * @return {string} compare
 * @rule D>=0.4:优秀   D>=0.3&&D<0.4:良好   D<0.3:差
 * */
export default class Degree {
    constructor(public degreeVal: number = 0) {
        this.degreeVal = degreeVal;
    }

    public compare(): string {
        let resultText: string = '';
        if (this.degreeVal >= 0.4) {
            resultText = '优秀'
        } else if (this.degreeVal >= 0.3 && this.degreeVal < 0.4) {
            resultText = '良好'
        } else {
            resultText = '差'
        }
        return resultText;
    }
}