const mongoose  = require('mongoose');

const errorSchema = new mongoose.Schema({
    custom_msg : {
        type : String,
        required : true
    },
    error_stack : {
        type : String,
        reuired : true
    }
});

const errorModel = mongoose.model('error',errorSchema);
module.exports = errorModel;