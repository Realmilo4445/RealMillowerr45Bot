module.exports = {
    name: "hello",
    category: "info",
    description: "Returns latency and API hello",
    usage: "hello",
    run: async (client, message, args) => {
       message.channel.send(`**Hi!**`);
    }
  
}