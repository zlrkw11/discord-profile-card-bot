// Data gathering
const Discord = require("discord.js"); // discord.js node module.
const { config } = require("./config.json"); // contains a string that is the password for the discord bot.
const { create } = require("domain");
const savePath = "./cards.json"
let data;

// Gateway Intents were introduced by Discord so bot developers can choose 
// which events their bot receives based on which data it needs to function.
// With partials we will be able to receive the full data of the objects returned from each event.
const Client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
    ],
    partials: [
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.Message,
        Discord.Partials.User
    ]
}); // Creating a new client with intents and partials needed for this bot to function.
// partials makes sure that we receive the full data of the object returned from events.

// Ready event captures the state when the bot gets online.
Client.on("ready", (client) => {
    // Import the readCard function
    const {readCards} = require("./helper/readCards.js");
    data = readCards(savePath);
    console.log(data);
    console.log("This bot is now online " + client.user.tag);
});


// messageCreate event captures data of a message that is created/posted.
Client.on("messageCreate", (message) => {
    
    // if user who wrote the message is NOT a bot user.
    if (message.author.bot){
        return 
    }

    // Convert user input to lowercase
    const inputSplit = message.content.toLowerCase().split(" ");
    

    // !help command
    if (inputSplit[0] == "!help" || inputSplit[0] == "!commands") {
        message.reply("```!create: create a profile card \n!delete: delete a profile card\n!add [property] [value]: add a property to your card```")
    }

    // !create command
    else if (inputSplit[0] == "!create"){
        const create = require("./functions/create.js");
        create.createCard(message, savePath, data);
        
    }

    // !add command
    else if (inputSplit[0] == "!add"){
        console.log(inputSplit);
        const add = require("./functions/add.js");
        add.add(data, message, inputSplit[1], inputSplit[2], savePath);
    }

    // !display command
    else if (inputSplit[0] == "!display"){
        const show = require("./functions/display.js");
        message.reply(show.display(message, data));
    }

});

Client.login(config); // Logs in the discord bot with the password stored in an external file.

