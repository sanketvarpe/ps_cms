var mongo_uri = `mongodb+srv://${process.env.mongo_user}:` + encodeURIComponent(process.env.mongo_pass) + '@cluster0.mi4fu.mongodb.net/pc_cms?retryWrites=true&w=majority';

module.exports = {
    mongo_uri = mongo_uri
}