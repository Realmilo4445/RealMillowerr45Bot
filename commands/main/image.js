var Scraper = require('images-scraper')
const { MessageEmbed } = require("discord.js")
const google = new Scraper({
    puppeteer : {
        headless : true,
    }
})

module.exports = {
    name : 'image',
   category: 'main',
  usage: "image <>",
    run : async(client, message, args) => {
      let emb = new MessageEmbed()
      .setAuthor(`(❌)Please enter search query`)
      .setColor(`DARK BLUE`)
      .setFooter(message.author.id, message.author.displayAvatarURL({dynamic: true}))
        const query = args.join(" ")
        if(!query) return message.channel.send(emb)

        const results = await google.scrape(query, 1)
        message.channel.send(results[0].url);
    }
}