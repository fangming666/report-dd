let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/chooseReport", (req, res) => {
    setTimeout(() => {
        let data = Mock.mock({
            code: 0,
            message: '',
            data: [
                {
                    title: "联考整体报告",
                    list: [
                        {name: "整体", id: 0},
                        {name: "语文", id: 1},
                        {name: "数学", id: 2},
                        {name: "英语", id: 3},
                        {name: "道德与法治", id: 4},
                        {name: "物理", id: 5}
                    ]
                },
                {
                    title: "63中",
                    list: [
                        {name: "整体", id: 0},
                        {name: "语文", id: 1},
                        {name: "数学", id: 2},
                        {name: "英语", id: 3},
                        {name: "思想品德", id: 4},
                        {name: "物理", id: 5}
                    ]
                },
                {
                    title: "语文",
                    list: [
                        {name: "1班", id: 0},
                        {name: "2班", id: 1},
                        {name: "3班", id: 2},
                        {name: "4班", id: 3},
                        {name: "5班", id: 4},
                        {name: "6班", id: 5}
                    ]
                },
            ]
        });
        return res.json(data)
    }, 1000)
});
module.exports = router;