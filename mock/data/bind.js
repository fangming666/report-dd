let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/bind", (req, res) => {
    setTimeout(() => {
        let data = Mock.mock({
            code: 0,
            message: '登录成功',

        });
        return res.json(data)
    }, 1000)
});
module.exports = router;