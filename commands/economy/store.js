const Discord = require('discord.js');

module.exports = {
    name: "store",
  category: "economy",
    description: "View the store",

    async run (client, message, args) {

        const one = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(🚗)Car** - **500** Moneys \n **(⏰)Watch** - **250** Moneys`)
        .setFooter(`Page 1/4`)
        .setTimestamp();

        let msg = message.channel.send(one);
      
      const two = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(🚗)Car** - **500** Moneys \n **(⏰)Watch** - **250** Moneys`)
        .setFooter(`Page 2/4`)
        .setTimestamp();

      
      msg.react('⏪').then(() => message.react('◀')).then(() => message.react('▶')).then(() => message.react('⏩'));

const filter = (reaction, user) => {
	return ['⏪', '◀', '▶', '⏩'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 4, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '▶') {
			msg.edit(two)
		} else if (reaction.emoji.name === '◀') {
			msg.edit(one)
    }else if (reaction.emoji.name === '⏪') {
			msg.edit(one)
    }
	})
	.catch(collected => {
		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
	});
    }
}