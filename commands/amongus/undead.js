const { MessageEmbed } = require('discord.js')
const { DEFAULT_PREFIX } = require('../.././config.json')

module.exports = {
    name: 'au-revive',
  category: "amongus",
    description: 'Used for making a player **alive**.',
    run: async (client, message, args) => {
        const role = message.guild.roles.cache.find((r) => r.name === 'amongus-moderator')
        //--------------------------------------------------------------------------------------------------------
        if (!role) return message.channel.send(`Among Us has not been setup, please run \`${DEFAULT_PREFIX}au-setup\` to set it up.`)
        if (!message.member.roles.cache.has(role.id)) return message.channel.send(new MessageEmbed()
            .setDescription(`This command can only be used by members that has ${role}, role.`).setColor('RED')
        )
        let channel = message.member.voice.channel;
        for (let member of channel.members.filter((member) => !member.user.bot)) {
            await member[1].voice.setDeaf(false).then(member[1].voice.setMute(false));
        }
        message.channel.send('Reset Complete')
        message.react("760091234882027520");

    }
}