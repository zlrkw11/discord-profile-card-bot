// Require files 

function display(msg, data){
    let output = "";
    for (i=0; i<data.length; i++){
        if(data[i].tag == msg.author.username){
            card = data[i]
            keys = Object.keys(card);
            for (x = 0; x < keys.length; x++){
                let line = keys[x] + ": " + card[keys[x]];
                output += line + "\n";
            }
        }
    }

    return output;
};

module.exports.display = display;