const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "fox",
    category: "animals",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/fox";
        const facts = "https://some-random-api.ml/facts/fox"

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
            .setTitle(`Random Fox Image and Fact`)
            .setColor("GREEN")
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}