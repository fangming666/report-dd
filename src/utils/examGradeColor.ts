/**
 * 考试列表根据不同的年纪给予不同的颜色
 * @param {number} grade 传进来的年纪
 * @param {Map} colorMap 颜色值得Map集合
 * @return {string} give 返回根据年纪对应的颜色
 * */
export default class ExamGradeColor {
    private colorMap: Map<number, string>;

    constructor(public grade: number = 1) {
        this.grade = grade;
        this.colorMap = new Map([
            [1, "#3296FA"],
            [2, "#02B5FF"],
            [3,"#98D30F"],
            [4,"#F2AE43"],
            [5,"#FC733B"],
            [6,"#15BC84"],
            [7,"#32B3FA"],
            [8,"#ADD404"],
            [9,"#F0A836"],
            [10,"#32A7FA"],
            [11,"#0ECB8D"],
            [12,"#F2AF43"],
        ])
    }
    public give():string{
        // @ts-ignore
        return this.colorMap.get(this.grade)
    }
}
