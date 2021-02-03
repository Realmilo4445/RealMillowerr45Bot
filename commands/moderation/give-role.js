const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'give-role',
    usage: 'give-role <mention> <role',
  description: 'give role',
    category : "moderation",
    run: async (client, message, args) => {

        message.delete();

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`You do not have MANAGE_ROLES permission`).then(m => m.delete({ timeout: 5000 }));

        if (!args[0] || !args[1]) return message.channel.send("Incorrect usage, It's `<username || user id> <role name || id>").then(m => m.delete({ timeout: 5000 }))

        try {

          let say = new MessageEmbed()
          .setColor(`GREEN`)
          .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
          .setAuthor("User already has that role")
             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.channel.send(say).then(m => m.delete({ timeout: 5000 }));

          let sy = new MessageEmbed()
          .setAuthor(`Try to give a role that exist next time...`)
          .setColor(`GREEN`)
          .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
          
             const embed = new MessageEmbed()
                 .setTitle(`Role Name: ${roleName.name}`)
                 .setDescription(`${message.author} has successfully given the role ${roleName} to ${member.user}`)
                 .setColor('GREEN')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString())

            return member.roles.add(roleName).then(() => message.channel.send(embed));
        } catch (e) {
          let sy = new MessageEmbed()
          .setAuthor(`Try to give a role that exist next time...`)
          .setColor(`GREEN`)
          .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
          
            return message.channel.send(sy).then(m => m.delete({ timeout: 5000 })).then(() => console.log(e))
        }
    }
}