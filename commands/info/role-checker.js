const { MessageEmbed, Permissions } = require('discord.js');

module.exports = {
    name: 'rolename',
  usage: 'rolename <role>',
  description: 'rolename',
  category: 'moderation',
    run: async (client, message, args) => {
      let embeds = new MessageEmbed()
      .setAuthor(`(❌)Role Doesn't Exist`)
      .setColor(`RED`)
        // code starts here
        try {
            const roleName = message.guild.roles.cache.find(r => (r.name === args.toString()) || (r.id === args.toString()))
            console.log(roleName)
            const perms = new Permissions(roleName.permissions.bitfield).toArray()

            const embed = new MessageEmbed()
                .setColor(roleName.color)
                .setTitle(roleName.name)
                .addFields(
                    {
                        name: 'Role ID: ',
                        value: roleName.id,
                        inline: true
                    },
                    {
                        name: 'Role Name: ',
                        value: roleName.name,
                        inline: true
                    },
                    {
                        name: 'Mentionable: ',
                        value: roleName.mentionable ? 'Yes' : 'No',
                        inline: true
                    },
                    {
                        name: 'Role Permissions: ',
                        value: perms.join(', ')
                    }
                )

            await message.channel.send(embed)

        } catch (e) {
            return message.channel.send(embeds).then(() => console.log(e))
        }

    }
}
