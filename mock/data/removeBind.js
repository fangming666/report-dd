let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/talk/auth/release", (req, res) => {
  setTimeout(() =>{
    let data = Mock.mock({
      status: 200,
      msg: '',
    });
    return res.json(data)
  },1000)
});
module.exports = router;
