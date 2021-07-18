const deptModel = require('../model/department');
const billModel = require('../model/bills');

exports.getDeptData = async (req,res,options = {}) => {
    let resObj = {
        err : false,
        msg : "",
        data : []
    };

    try {
        resObj.data = await deptModel.findAll({
            attributes : ['id','name']
        });
        resObj.msg = "department fetched succesfully";
    } catch (error) {
        console.log("error===>>",error);
        resObj.err = true;
        resObj.msg = "error while fetching department data";
    }

    return resObj;
}

exports.createBill = async (req,res,options = {}) => {
    let resObj = {
        err : false,
        msg : "",
        data : []
    };

    options.billObj.officeid = req.user.officeid;
    options.billObj.status = 'pending';
    options.billObj.reason = 'NA';
    options.billObj.created_by = req.user.name;
    options.billObj.approved_by = 'NA';

    try {
        let bill = await billModel.create(options.billObj);
        resObj.msg = 'bill successfully created!';
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while creating bill";
    }
    return resObj;
}