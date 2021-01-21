const Discord = require('discord.js')
module.exports = {
    name: "work",
    category: "economy",
    description: "Work your a** off",
    async run (client, message, args) {
return message.channel.send(
	currency.sort((a, b) => b.balance - a.balance)
		.filter(user => client.users.cache.has(user.user_id))
		.first(10)
		.map((user, position) => `(${position + 1}) ${(client.users.cache.get(user.user_id).tag)}: ${user.balance}💰`)
		.join('\n'),
	{ code: true }
);
    }
}