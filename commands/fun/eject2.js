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
   const user = p.getMention(p.args[0]);
		if (!user) {
			p.errorMsg(", you must tag a user!", 5000);
			p.setCooldown(5);
			return;
		}
  }
}