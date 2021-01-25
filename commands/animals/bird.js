const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bird",
    category: "animals",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/birb";
        const facts = "https://some-random-api.ml/facts/birb"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
          let error = new MessageEmbed()
            error.setAuthor("👩‍")
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Bird Image and Fact`)
            .setColor("GREEN")
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}