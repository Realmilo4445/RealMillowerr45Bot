const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "panda",
    category: "animals",
    usage: "panda",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/panda";
        const facts = "https://some-random-api.ml/facts/panda"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
          let error = new MessageEmbed()
            error.setAuthor("(❌)An error occured, please try again!")
            error.setColor("GREEN")
          return message.channel.send(error)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Panda Image and Fact`)
            .setColor("GREEN")
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}
