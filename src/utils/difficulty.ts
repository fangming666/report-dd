/**
 * 试卷质量的难度
 * @param {number} difficultyVal 难度系数
 * @return {string} compare
 * @rule P>0.9:过易   P>0.6&&P<=0.9:偏易   P>0.5&&P<=0.6:适中    P>0.3&&P<=0.5:偏难    P<0.3:过难
 * */

export default class Difficulty {
    constructor(public difficultyVal: number = 0) {
        this.difficultyVal = difficultyVal;
    }

    public compare(): string {
        let resultText: string = '';
        if (this.difficultyVal > 0.9) {
            resultText = '过易'
        } else if (this.difficultyVal > 0.6 && this.difficultyVal <= 0.9) {
            resultText = '偏易'
        } else if (this.difficultyVal > 0.5 && this.difficultyVal <= 0.6) {
            resultText = '适中';
        } else if (this.difficultyVal > 0.3 && this.difficultyVal <= 0.5) {
            resultText = '偏难'
        } else {
            resultText = '过难'
        }
        return resultText;
    }
}