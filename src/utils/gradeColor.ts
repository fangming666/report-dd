/**
 * 根据等级给予不同的类名
 * @param {string} grade 等级
 * @param {number} num 索引（根据索引做斑马线效果）
 * @return {string} getColor 返回对应的color类名
 * */
export default class GradeColor {
    private colorMap: Map<string, string[]>;

    constructor(public grade: string = 'A', public num: number = 0) {
        this.grade = grade;
        this.num = num;
        this.colorMap = new Map([
            ['A', ['grade-yellow', 'grade-yellow-other']],
            ['B', ['grade-green', 'grade-green-other']],
            ['C', ['grade-blue', 'grade-blue-other']],
            ['D', ['grade-purple', 'grade-purple-other']],
            ['E', ['grade-pink', 'grade-pink-other']],
        ])
    }

    public getColor(): string {
        // @ts-ignore
        return this.colorMap.get(this.grade)[this.num % 2 ? 0 : 1]
    }
}