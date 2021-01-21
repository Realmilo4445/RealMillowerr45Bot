const Discord = require('discord.js');

module.exports = {
    name: "store",
  category: "economy",
    description: "View the store",

    run: async (client, message, args) => {

        const one = new Discord.MessageEmbed()
        .setTitle('Car Store')
        .setDescription(`**(🚗)Car** - **500** Moneys \n **(🏎)Sport Car** - **550** Moneys \n **(🚙)Sport Utility Car** - **300** Moneys`)
        .setFooter(`Page 1/4`)
        .setTimestamp();

        const msg = await message.channel.send(one);
      
      const two = new Discord.MessageEmbed()
        .setTitle('Food Store')
        .setDescription(`**(🍔)Hamburger** - **5** Moneys \n **(🍕)Pizza** - **3** Moneys  \n **(🌭)Hotdog** - **4** Moneys`)
        .setFooter(`Page 2/4`)
        .setTimestamp();
      
      const three = new Discord.MessageEmbed()
        .setTitle('Lootbox Store')
        .setDescription(`**(🎁)Common Lootbox** - **200** Moneys \n **(🎁)Rare Lootbox** - **250** Moneys
    **(🎁)Epic Lootbox** - **450** Moneys 
    **(🎁)Legendary Lootbox** - **1,000** Moneys`)
        .setFooter(`Page 3/4`)
        .setTimestamp();
      
      const four = new Discord.MessageEmbed()
        .setTitle('Modern Store')
        .setDescription(`**(🎟)Ticket** - **10** Moneys \n **(💻)Laptop** - **150** Moneys`)
        .setFooter(`Page 4/4`)
        .setTimestamp();
      
msg.react('1️⃣').then(() => msg.react('2️⃣').then(() => msg.react('3️⃣').then(() => msg.react('4️⃣'))));

const filter = (reaction, user) => {
	return ['1️⃣', '2️⃣', '3️⃣', '4️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		  if (reaction.emoji.name === '1️⃣') {
			msg.edit(one)
		} if (reaction.emoji.name === '2️⃣') {
			msg.edit(two)
    }if (reaction.emoji.name === '3️⃣') {
			msg.edit(three)
		} if (reaction.emoji.name === '4️⃣') {
			msg.edit(four)
    }
	})
    }
}