let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/talk/login/index", (req, res) => {
    setTimeout(() => {
        let data = Mock.mock({
            status: 200,
            mag: '登录成功',
            talk_user_id: 123,
            user_id: 456
        });
        return res.json(data)
    }, 1000)
});
module.exports = router;
