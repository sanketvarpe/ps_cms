const homeService = require('../service/home')

/**
 * @description:fetches all departments data to be rendered
*/
exports.homeController = async (req,res) => {
    let resObj = await homeService.getDeptData(req,res,option = {});
    console.log("resObj==>>",resObj);
    res.status(200).json(resObj);
}