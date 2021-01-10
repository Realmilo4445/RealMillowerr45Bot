const { MessageEmbed } = require('discord.js')
const { DEFAULT_PREFIX } = require('../.././config.json')
module.exports = {
    name: 'vote',
  category: 'amongus',
    description: '**Undeafened** everyone in the voice chat.',
    run: async (client, message, args) => {
        const role = message.guild.roles.cache.find((r) => r.name === 'amongus-moderator')
        //--------------------------------------------------------------------------------------------------------
        if (!role) return message.channel.send(`Among Us has not been setup, please run \`${DEFAULT_PREFIX}setup\` to set it up.`)
        if (!message.member.roles.cache.has(role.id)) return message.channel.send(new MessageEmbed()
            .setDescription(`This command can only be used by members that has ${role}, role.`).setColor('RED')
        )
        let channel = message.member.voice.channel;
        for (let member of channel.members.filter((member) => !member.user.bot)) {
          await member[1].voice.setDeaf(false);
        }
        message.channel.send(
          new MessageEmbed()
            .setTitle("Voting session")
            .setTimestamp()
            .setDescription("Who is the impostor?")
            .setColor("RANDOM")
            .setFooter('Created by recon#0001')
        );

    }
}