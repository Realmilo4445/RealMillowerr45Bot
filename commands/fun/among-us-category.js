const Commando = require('discord.js-commando')

module.exports = class amongUsCategoryCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'aucat',
      group: 'fun',
      memberName: 'aucat',
      userPermissions : [
        'ADMINISTRATOR'
      ],
      description: "",
      run: async(client, message, args) => {
        
        const categoryId = args
        if (!categoryId)
        message.reply('Please specify a category ID')
        return
      }
      
    }
  )}
}