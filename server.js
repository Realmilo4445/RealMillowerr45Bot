const http = require('http');
const express = require('express');
const app = express();

var server = require('http').createServer(app);
app.get("/", (request, response) => {
  console.log(" Ping Received");
  response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
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




client.login(token)