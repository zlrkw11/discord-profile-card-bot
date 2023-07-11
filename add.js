// Require files
const fs = require("fs");
const save = require("../helper/saveCards.js");


function add(data, msg, property, value, path){
    
    for (i=0; i<data.length; i++){
        if(data[i].tag === msg.author.username) {
            data[i][property] = value;
            console.log(data);
          }
    }
    
    save.saveCards(path, data);

}
module.exports.add = add;
