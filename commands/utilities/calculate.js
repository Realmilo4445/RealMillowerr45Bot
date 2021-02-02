const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "calculate",
    category: "utilities",
    description: "Get the answer to a math problem",
    usage: "math <your question",

    async run (client, message, args){
   
      let sembed = new Discord.MessageEmbed()
      sembed.setAuthor(`(:x:)Please provide a question`)
       let u = new Discord.MessageEmbed().setAuthor(`(:x:)Please provide valid question`)
        if(!args[0]) return message.channel.send(sembed);

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send(u)
        }

        const embed = new Discord.MessageEmbed()
        .setColor(`GRAY`)
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}