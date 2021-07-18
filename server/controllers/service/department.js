const deptHelper = require('../../models/helper/department');

exports.createBill = async (req,res,options = {}) => {
    let resObj = await deptHelper.createBill(req,res,options);
    return resObj;
}