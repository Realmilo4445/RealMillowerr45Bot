
const Discord = require('discord.js');
const nextPageEmoji = "➡"
const nextPreviousEmoji = "⬅"
module.exports = {
    name: "store",
  category: "economy",
    description: "View the store",

    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(🚗)Car** - **500** Moneys \n **(⏰)Watch** - **250** Moneys \n **(🎁)Lootbox** - **300** Moneys`)
        .setTimestamp()
        .setFooter(`Pa`);
      let msg = await message.channel.send(embed)
        
          let s = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(💍)Ring** - **280** Moneys \n **(🍔)Hamburger** - **50** Moneys \n **(🌭)Hotdog** - **10** Moneys`)
        .setTimestamp()
        .setFooter(`Page 2/2`);
msg.react('➡').then(() => msg.react('⬅'));

const filter = (reaction, user) => {
	return ['➡', '⬅'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '➡') {
			msg.edit(s)
		} else {
			msg.edit(embed)
		}
	})
	.catch(collected => {
		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
	});
                   }
                   }
                   