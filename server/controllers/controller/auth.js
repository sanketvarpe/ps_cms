exports.loginController = (req,res) => {
    var body = req.body;
    console.log("we got the req ===>>",body);
    res.json({'msg':'we got u'});
}