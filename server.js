const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(new Date() + " Ping Received");
  response.sendStatus(400);
});
app.listen(3000);
setInterval(() => {
  http.get(`http://unmarred-equable-sidewalk.glitch.me/`);
}, 280000);

const { token, DEFAULT_PREFIX } = require("./config.json");
const { config } = require("dotenv");
const discord = require("discord.js") //Gonna use Discord.js Module xD
const { addexp } = require("./handlers/xp.js");
const { badwords } = require("./data.json");
const { Client, Collection } = require("discord.js");
const client = new discord.Client({
  disableEveryone: true // what does this disable thing do?
});
const db = require("quick.db")

// Collections
client.commands = new discord.Collection();
client.aliases = new discord.Collection();



// Run the command loader
["command"].forEach(handler => { 
  require(`./handlers/${handler}`)(client);
});

//Load up the bot...
const Discord = require('discord.js');
const bot = new Discord.Client();
 
 

client.on("ready", () => { //When bot is ready
  console.log("I am Reday to Go")
  client.user.setActivity(db.get(`status`)) //It will set status :)
})

//Url Function -Start
function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if(regexp.test(str)) {
    return true;
  } else {
    return false;
  }
  
}

client.on("message", async message => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix = "a?" 
  }
  
     let blacklist = await db.fetch(`blacklist_${message.author.id}`)
  
if(message.author.bot) return;
     //start
  
  if(!message.member.hasPermission("ADMINISTRATOR")) {
   
 
  
    if(is_url(message.content) === true) {
      message.delete()
      return message.channel.send("You can not send link here :/")
    }
  
    let confirm = false;
   
    var i;
    for(i = 0;i < badwords.length; i++) {
      
      if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;
      
    }
  
   if(confirm) {
      message.delete()
      return message.channel.send("You are not allowed to send badwords here")
    }    
  }
  //end
  
  if(!message.guild) return;
  
  if(!message.content.startsWith(DEFAULT_PREFIX)) return;
  
  if (blacklist === "Blacklisted") return message.reply("You are blacklisted from the bot!")
  
  // If message.member is uncached, cache it.
     if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(DEFAULT_PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);

    if(message.author.bot) return;
  if(!message.guild) return;
    return addexp(message)
 
 }); //All codes link in description

//GONNA USE EVENT HERE

client.on("guildMemberAdd", (member) => {
  let chx = db.get(`welchannel_${member.guild.id}`); //defining var
  
  if(chx === null) { //check if var have value or not
    return;
  }
 
  let wembed = new discord.MessageEmbed()
  .setAuthor(member.user.username, member.user.avatarURL())
  .setColor("#ff2050")
  .setThumbnail(member.user.avatarURL())
  .setDescription(`We are very happy to have you in our server`);
  
  client.channels.cache.get(chx).send(wembed)
})
const setupCMD = "!setreactionrole"
let initialMessage = `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`;
const roles = ["Gamers"];
const reactions = [":none:"]


 
bot.once('ready', () => {
    console.log('Ready!');
});
 
//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
 
//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`**React below to get the **"${role}"** role!**`); //DONT CHANGE THIS
    return messages;
}
 
 
bot.on("message", message => {
    if (message.member.hasPermission("ADMINISTRATOR") && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                }
            });
        }
    }
})
 
 
bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
       
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
       
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
       
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);
               
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj);
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }  
});
 
bot.login(process.env.TOKEN);
client.login(token)