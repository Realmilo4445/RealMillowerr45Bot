const { CanvasSenpai } = require("canvas-senpai");
const Discord = require("discord.js");
const client = new Discord.Client();
const canva = new CanvasSenpai();

module.exports = {
    name: "eject",
    category: "fun",
    description: "Returns latency and API hello",
    usage: "eject <@user>",
    run: async (client, message, args) => {
 
    client.on('guildMemberAdd', async member => {
      
    let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );

      
    message.channel.send(`${member.user.username}!, Was not an Impostor`, attachment)
      
    })
    }
}