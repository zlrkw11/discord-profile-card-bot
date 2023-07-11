// Require fs & path
const fs = require("fs");
const save = require("../helper/saveCards.js");

function createCard(msg, path, data){

    // Detect if this is the only card that user has
    for (i=0; i<data.length; i++){
        if(data[i].tag == msg.author.username){
            return 
        }
    }

    // Adds a card into cards.json
    // If data is empty []
    if (data.length == 0){
        data = [{tag: msg.author.username}];
        console.log(data);
    }

    else {
        data.push({tag: msg.author.username});
    }

    save.saveCards(path, data);
    
}

module.exports.createCard = createCard;
