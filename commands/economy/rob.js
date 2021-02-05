const db = require('quick.db');
const Discord = require('discord.js');
const { COLOR } = require('../.././config.json')
const ms = require('parse-ms')


module.exports = {
    name: "rob",
   category: "economy",
    description: "rob everyone",
    usage: "rob <mention>",
    run: async (client, message, args) => {
      let user = message.mentions.members.first()
let targetuser = await db.fetch(`money_${message.guild.id}_${user.id}`)
let author = await db.fetch(`rob_${message.guild.id}_${user.id}`)
let author2 = await db.fetch(`money_${message.guild.id}_${user.id}`)

let timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setAuthor(`(❌)You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    
let random = Math.floor(Math.random()*15) + 1;

let vip = await db.fetch(`bronze_${user.id}`)
if(vip === true) random = Math.floor(Math.random() * 200) + 1;
if (vip === null) random = Math.floor(Math.random() * 100) + 1;

let embed = new Discord.MessageEmbed()
.setAuthor(`(✅) You robbed ${user} and got away with ${random} moneys`)
message.channel.send(embed)

db.subtract(`money_${message.guild.id}_${user.id}`, random)
db.add(`money_${message.guild.id}_${user.id}`, random)
db.set(`rob_${message.guild.id}_${user.id}`, Date.now())
  
};
}

    }
