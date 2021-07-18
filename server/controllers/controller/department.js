const createBillService = require('../service/department')

/**
 * @description:fetches all departments data to be rendered
*/
exports.createBillController = async (req,res) => {
    let body = req.body;
    let billObj = {};
    Object.keys(body).forEach((key) => {
        billObj[key] = body[key];
    })
    console.log("bill obj===>>",billObj);
    let resObj = await createBillService.createBill(req,res,{billObj});
    console.log("resObj==>>",resObj);
    res.status(200).json(resObj);
}