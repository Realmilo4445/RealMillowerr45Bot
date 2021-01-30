const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js')
const { COLOR } = require('../../config.json')


module.exports = {
    name: "work",
    category: "economy",
    description: "Work your a** off",
    usage: "work",
    async run (client, message, args) {
db.add(`worked_${message.guild.id}_${message.author.id}`)
const quiz = require('../../quiz.json');
      let user = message.author
const item = quiz[Math.floor(Math.random() * quiz.length)]
const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
let em = new MessageEmbed()
em.setAuthor(item.question)
let msg = await message.channel.send(em).then(() => {
	message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		.then(collected => {
    let me = new MessageEmbed()
			me.setAuthor(item.correct)

      db.add(`money_${message.guild.id}_${user.id}`, item.amount)
      me.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
message.channel.send(me)
    
		})
		.catch(collected => {
			let mem = new MessageEmbed()
      mem.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
      mem.setAuthor(item.fail)
    message.channel.send(mem)
		});

})

      
    }
}
