const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'slowmode',
    usage: 'slowmode <args>',
    category : "moderation",
    run: async (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('(❌)You do not have **MANAGE_CHANNELS** permission!').then(m => m.delete({ timeout: 5000 }));

        let eme = new MessageEmbed()
        .setAuthor("(❌)You did not specify a time!")
        .setColor(`GREEN`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      
        if (!args[0])return message.channel.send(eme).then(m => m.delete({ timeout: 5000}));

        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.channel.send('Channel cooldown is already off').then(m => m.delete({ timeout: 5000 }));

            embed.setTitle('Slowmode Disabled')
                .setColor(`DARK BLUE`)
            return message.channel.setRateLimitPerUser(0, reason)

        }

        const time = ms(args[0]) / 1000;

        let s = new MessageEmbed()
        .setAuthor(`Not a valid time, please try again!`)
        .setColor(`GREEN`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        if (isNaN(time)) return message.channel.send(s).then(m => m.delete({ timeout: 5000 }));

        let e = new MessageEmbed()
        .setAuthor("That slowmode limit too high, please enter anything lower than 6 hours")
        .setColor(`GREEN`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        
        if (time >= 21600) return message.channel.send(e).then(m => m.delete({ timeout: 5000 }));

        let es = new MessageEmbed()
        .setAuthor(`Slowmod`)
      
        if (currentCooldown === time) return message.channel.send(`Slowmode is already set to ${args[0]}`);

        embed.setTitle('Slowmode Enabled')
            .addField('Slowmode: ', args[0])
            .addField('Reason: ', reason)
            .setColor('#ff0000');

        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));

    }
}