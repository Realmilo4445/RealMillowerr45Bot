const { Canvas } = require("canvas-constructor")
    
module.exports = {
  name: "water",
  description: "eat anything",
  usage: "eat <food>",
  category: "fun",
  run: async (client, message, args) => {  
     const content = args.join(" ")
let mage = new Canvas(500, 250)
.setColor("#ffffff")
.addText(`${content}`, 30, 200)
    
    message.channel.send({files: [mage]}) //lol i forget again
  }
}