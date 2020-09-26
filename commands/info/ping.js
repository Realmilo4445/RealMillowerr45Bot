module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API lol",
    usage: "ping",
    run: async (client, message, args) => {
       message.channel.send(`**Pong**${client.ws.ping}`);
    }
  
}