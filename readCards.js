
const fs = require("fs");

function readCards(path){
    // Encoding for characters
    const encoding = "utf-8"; 
    
    return JSON.parse(fs.readFileSync(path, encoding));
}

module.exports.readCards = readCards;
