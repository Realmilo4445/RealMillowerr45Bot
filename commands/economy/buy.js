const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "buy",
  category: "economy",
    description: "Buy an item from the store",

    async run (client, message, args) {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Please provide an item to buy')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
        let embed = new Discord.MessageEmbed()
        
        if(purchase === 'car'){
            if(amount < 500) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "(🚗)Car");
            embed.setColor('RED')
            embed.setAuthor(`Successfully bought one **(🚗)Car**`)
            message.channel.send(embed)
        }
        if(purchase === 'watch'){
            if(amount < 250) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 250);
            db.push(message.author.id, "(⏰)Watch");
            embed.setColor('RED')
            embed.setAuthor(`Successfully bought **(⏰)Watch**`)
            message.channel.send(embed)
        }
        if(purchase === 'sport utility car'){
            if(amount < 200) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 200);
            db.push(message.author.id, "(🚙)Sport Utility Car");
            embed.setColor('RED')
            embed.setAuthor(`Successfully bought one **(🚙)Sport Utility Car**`)
            message.channel.send(embed)
        }
        if(purchase === 'sport Car'){
            if(amount < 550) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 550);
            db.push(message.author.id, "(🏎)Sport Car");
            embed.setColor('RED')
            embed.setAuthor(`Successfully bought **(🏎)Sport Car**`)
            message.channel.send(embed)
        }
      if(purchase === 'hamburger'){
            if(amount < 5) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 5);
            db.push(message.author.id, "(🍔)Hamburger");
            embed.setColor('RED')
            embed.setAuthor(`Successfully bought one **(🍔)Hamburger**`)
            message.channel.send(embed)
        }
        if(purchase === 'pizza'){
            if(amount < 3) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 3);
            db.push(message.author.id, "(🍕)Pizza");
            embed.setColor('RED')
            embed.setAuthor(`Successfully bought **(🍕)Pizza**`)
            message.channel.send(embed)
        }
        if(purchase === 'hotdog'){
            if(amount < 4) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 4);
            db.push(message.author.id, "(🌭)Hotdog");
            embed.setColor('RED')
            embed.setAuthor(`Successfully bought one **(🌭)Hotdog**`)
            message.channel.send(embed)
        }
        if(purchase === 'common lootbox'){
            if(amount < 550) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 550);
            db.push(message.author.id, "(🎁)Common Lootbox");
            embed.setColor('RED')
            embed.setAuthor(`Successfully bought **(🎁)Common Lootbox**`)
            db.subtract(`money_${message.guild.id}_${message.author.id}`, "(🎁)Common Lootbox");
            db.push(message.author.id, "(👓)Glasses")
            embed.setDescription(`Congrats! you got (👓)Glasses from Lootbox!`)
            message.channel.send(embed)
        }
        if(purchase === 'common lootbox'){
            if(amount < 550) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 550);
            db.push(message.author.id, "(🎁)Common Lootbox");
            embed.setColor('RED')
            embed.setAuthor(`Successfully bought **(🎁)Common Lootbox**`)
            db.subtract(`money_${message.guild.id}_${message.author.id}`, "(🎁)Common Lootbox");
            db.push(message.author.id, "(👓)Glasses")
            embed.setDescription(`Congrats! you got (👓)Glasses from Lootbox!`)
            message.channel.send(embed)
        }
    }
}