// var mongo_uri = `mongodb+srv://${process.env.mongo_user}:` + encodeURIComponent(process.env.mongo_pass) + '@cluster0.kgkf9.mongodb.net/pscms?retryWrites=true&w=majority';
var mongo_uri = 'mongodb+srv://pscms:pscms%40123@cluster0.kgkf9.mongodb.net/pscms?retryWrites=true&w=majority';
module.exports = mongo_uri;