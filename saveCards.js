// Require plugins
const fs = require("fs");

function saveCards(path, data){
    fs.writeFileSync(path, JSON.stringify(data));
}

// Exporting the function
module.exports.saveCards = saveCards;
