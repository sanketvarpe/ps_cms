var mongo_uri = `mongodb+srv://${process.env.mongo_user}:` + encodeURIComponent(process.env.mongo_pass) + '@cluster0.kgkf9.mongodb.net/pscms?retryWrites=true&w=majority';
// mongodb+srv://pscms:<password>@cluster0.kgkf9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
module.exports = mongo_uri;