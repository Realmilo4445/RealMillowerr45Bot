const { MessageEmbed } = require('discord.js')
const { COLOR } = require('../../config.json')

module.exports = {
    name: "clear",
    category: "moderation",
    description: "Clears messages",
    async run (client, message, args) {
      let Embed = new MessageEmbed()
      .setColor(COLOR)
      
        const amount = args.join(" ");

        if(!amount) return message.reply('please provide an amount of messages for me to delete')

        if(amount > 100) return message.reply(`you cannot clear more than 100 messages at once`)
        if(amount > 90) return message.reply(`you cannot clear more than 100 messages at once`)
        if(amount < 1) return message.reply(`you need to delete at least one message`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});

    Embed.setAuthor('Success!')
    message.channel.send(Embed)

    }
}