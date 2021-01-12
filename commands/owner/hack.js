const ms = require('ms')

module.exports = {
  name: "hack",
  category: "owner",
  description: "dont use it!",
  run: async (client, message, args) => {
    
    if(!args[0]) return message.channel.send(`**Tell me who to want** ||hack||`)
    const toHack = args.slice(0).join(" ") && args.shift().toLowerCase()
    
    let msg = await message.channel.send(`Hacking ${toHack}...`)
    let time = '3s'
    setTimeout(function(){
      msg.edit(`Finding ${toHack} Email...`)  
    }, ms(time))
    let time1 = '6s'
    setTimeout(function(){
      msg.edit(`Email: ${toHack}@gmail.com`)  
    }, ms(time))
    let time2 = '9s'
    setTimeout(function(){
      msg.edit(`\`\`\`Password: ******\`\`\``)  
    }, ms(time))
  }
}