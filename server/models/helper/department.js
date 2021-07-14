const deptModel = require('../model/department');

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
    } catch (error) {
        console.log("error===>>",error);
        resObj.err = true;
        resObj.msg = "error while fetching department data";
    }

    return resObj;
}