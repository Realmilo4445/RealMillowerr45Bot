const Discord = require("discord.js");
const client = new Discord.Client();
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();

client.once("ready", () => {
  console.log("Ready!")
})