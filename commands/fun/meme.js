const { Random } = require("something-random-on-discord")
const random = new Random();
 
module.exports = {
  name: "meme",
  category: "fun",
  usage: "meme",
  description: "Get Fresh meme :D",
  run: async (client, message, args) => {
  
    let data = await random.getMeme()
    message.channel.send(data)
  const lol = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fejected-gifs&psig=AOvVaw2fcgYo1jAVv3L_NJl6vXKM&ust=1612320237315000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCwx_6Wyu4CFQAAAAAdAAAAABADCFQAAAAAdAAAAABAD"
  
}
}