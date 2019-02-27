let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/bind", (req, res) => {
    setTimeout(() => {
        let data = Mock.mock({
            code: 0,
            message: '登录成功',
            authority: 0//权限：0教育局，1教研员，2校长，3学校教研员，4班主任，5任课老师
        });
        return res.json(data)
    }, 1000)
});
module.exports = router;