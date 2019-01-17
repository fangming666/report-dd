let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/individual", (req, res) => {
    setTimeout(() =>{
        let data = Mock.mock({
            code: 0,
            message: '',
            accountNumber:'sd_wfkw',
            username:'房明',
            teach:[
                "八年级7班  数学",
                "八年级8班  数学",
                "八年级9班  数学"
            ]
        });
        return res.json(data)
    },1000)
});
module.exports = router;