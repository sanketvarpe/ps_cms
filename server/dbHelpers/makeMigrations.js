const path = require('path');
const fs = require('fs');
function makeMigration() {
    var normalizedPath = path.join(global.serverBaseDirPath,"/models/model");
    console.log("path",normalizedPath);
    fs.readdirSync(normalizedPath).forEach(async (file) => {
        const curPath = path.join(normalizedPath,file);
        console.log("file===>>",file);
        const curModel = require(`../models/model/${file}`);
        // console.log("curmodel");
        if(file!="error.js") {
            await curModel.sync({alter:true}).catch(err => {
                if(err){
                    throw err;
                }
            });
        }
    });
}

module.exports = makeMigration;