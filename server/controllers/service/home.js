const deptHelper = require('../../models/helper/department');

exports.getDeptData = async (req,res,options = {}) => {
    let resObj = await deptHelper.getDeptData(req,res,options);
    return resObj;
}