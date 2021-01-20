const Discord = require('discord.js');

module.exports = {
    name: "store",
  category: "economy",
    description: "View the store",

    async run (client, message, args) {

        const one = new Discord.MessageEmbed()
        .setTitle('Store')
        .settITLE('Car Shop')
        .setDescription(`**(🚗)Car** - **500** Moneys \n **(🏎)Sport Car** - **550** Moneys \n **(🚙)Sport Utility Car** - **300** Moneys`)
        .setFooter(`Page 1/4`)
        .setTimestamp();

        let msg = message.channel.send();
      
      const two = new Discord.MessageEmbed()
        .setTitle('Store')
        .setAuthor('Food Shop')
        .setDescription(`**(🍔)Hamburger** - **5** Moneys \n **(🍕)Pizza** - **3** Moneys  \n **(🌭)Hotdog** - **4** Moneys`)
        .setFooter(`Page 2/4`)
        .setTimestamp();
      
      const three = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(🎁)Common Lootbox** - **200** Moneys \n **(🎁)Rare Lootbox** - **250** Moneys **(🎁)Epic Lootbox** - **450** Moneys **(🎁)Legendary Lootbox** - **1,000** Moneys`)
        .setFooter(`Page 3/4`)
        .setTimestamp();
      
      const four = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(🚗)Car** - **500** Moneys \n **(⏰)Watch** - **250** Moneys`)
        .setFooter(`Page 4/4`)
        .setTimestamp();
      
msg.react('1️⃣').then(() => message.react('2️⃣').then(() => message.react('3️⃣')).then(() => message.react('4️⃣')));

const filter = (reaction, user) => {
	return ['1️⃣', '2️⃣', '3️⃣', '4️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 4, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '1️⃣') {
			msg.edit(one)
		} else if (reaction.emoji.name === '2️⃣') {
			msg.edit(two)
    } else if (reaction.emoji.name === '3️⃣') {
			msg.edit(three)
    } else if (reaction.emoji.name === '4️⃣') {
			msg.edit(four)
    }
	})
	.catch(collected => {
		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
	});
    }
}