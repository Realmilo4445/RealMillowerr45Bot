module.exports = {
    name: 'clear',
  usage: 'clear <number>',
  aliases: ['c'],
    category: "moderation",
    description: "Clear messages!",
   run: async(client, message, args) => {
     if(!message.member.hasPermission("ADMINISTRATOR")) {return message.channel.send('You are not allowed to use this command!')}
        if (!args[0]) return message.reply("Please enter the amount of messages to clear!");
 
        if(isNaN(args[0])) return message.reply("Please type a real number!");
 
        if(args[0] > 100) return message.reply("You can't remove more than 100 messages!");
        
        if(args[0] < 1) return message.reply("You have to delete at least one message!");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }
}   