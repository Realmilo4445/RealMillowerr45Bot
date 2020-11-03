const { CanvasSenpai } = require("canvas-senpai");
const Discord = require("discord.js");
const client = new Discord.Client();
const canva = new CanvasSenpai();

module.exports = {
    name: "eject",
    category: "fun",
    description: "Returns latency and API hello",
    usage: "eject <@mention>",
    run: async (client, message, args) => {
 
    client.on('guildMemberAdd', async member => {
      
    let data = await canva.eject(member, { link: "https://i.ytimg.com/vi/D2LV7vILWTc/hqdefault.jpg" })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "eject.png"
    );

      
    message.channel.send(`{member.user.username}!, Was not an Impostor`, attachment)
      
    })
    }
}