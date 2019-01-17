let Mock = require("mockjs");
let express = require("express");

let router = express.Router();
router.use("/removeBind", (req, res) => {
  setTimeout(() =>{
    let data = Mock.mock({
      code: 0,
      message: '',
    });
    return res.json(data)
  },1000)
});
module.exports = router;