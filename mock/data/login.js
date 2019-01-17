let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/login", (req, res) => {
    setTimeout(() =>{
        let data = Mock.mock({
            code: 0,
            message: '',
            loginStatus:true
        });
        return res.json(data)
    },1000)
});
module.exports = router;