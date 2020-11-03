const
const request = require('request');
const rocketEmoji = '🚀';

module.exports = {

	alias:["eject", "amongus"],

	args:"@user",

	desc:"Eject a user into space!",

	example:[],

	related:[],

	permissions:["sendMessages","attachFiles"],

	group:["memegeneration"],

	cooldown:30000,
	half:100,
	six:500,
	bot:true,

	execute: async function(p){
			await p.send(`${rocketEmoji} **| ${p.msg.author.username}** decided to vote off ${user.username}`,null,{file:data,name:"eject.gif"});
}}