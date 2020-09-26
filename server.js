const { token, prefix } = require("./config.json");
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

client.on("message", async message => {
  
if(message.author.bot) return;
     //start
  
  if(!message.member.hasPermission("ADMINISTRATOR")) {
   
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
  
  //end
  
  if(!message.guild) return;
  if(!message.content.startsWith(prefix)) return;
  
  // If message.member is uncached, cache it.
     if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
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