const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js')
const { COLOR } = require('../../config.json')
const works = [
  {
    title: `The Cake needs 100ML Milk you have 25ML, What ML you need?`,
    options: ["50", "75", "49"],
    work: `(👨‍🍳)Chef`,
    correct: 2,
    fail: `You suck at (👨‍🍳)Chef and you dont earn Money`,
    amount: 250,
  },
  
  {
    title: `right <---🏃‍---> left || Where ways goes Robbery?`,
    options: ["Robbery goes right ways", "Robbery goes middle ways", "Robbery goes left ways"],
    correct: 1,
    work: `(👮‍♂️)Policeman`,
    fail: `You suck at (👮‍♂️)Policeman. Robbery has run`,
    amount: 150,
  },
  
  {
    title: `Airplane in middle ways, Airplane goes to Miami, Wheres the correct ways goes to Miami? Tips: Miami in left ways`,
    options: ["right", "middle", "left"],
    work: `(👨‍✈️)Pilot`,
    fail: `You suck at (👨‍✈️)Pilot and Airplane crashed you must pay for this!`,
    correct: 3,
    amount: 550,
  },
  
  {
    title: `Pilot want to practice fyling the Airplane, Airplane goes to Land and Airplane needs to select right ways! where correct ways for Airplane goes to Land?`,
    options: ["middle", "right", "left"],
    work: `(✈️)Airplane flying practice`,
    fail: `You suck at (✈️)flying practice and Almost crushed but your friend help you`,
    correct: 2,
    amount: 500,
  },
  
  {
    title: `What is code : 34404 607`,
    options: ["BRUH", "LOL BOT", "AI BOT", "ERROR BOT"],
    work: `(👨‍💻)Progrmmer`,
    fail: `You suck at (👨‍💻)Progrmmer and you dont get money to hack the bank`,
    correct: 4,
    amount: 250,
  }
             ]


module.exports = {
    name: "work",
    category: "economy",
    description: "Work your a** off",
    async run (client, message, args) {
    
const quiz = require('../../quiz.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
let em = new MessageEmbed()
em.setAuthor(item.question)
let msg = await message.channel.send(em).then(() => {
	message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		.then(collected => {
    let me = new MessageEmbed()
			me.setAuthor(quiz.correct)
      message.channel.send(me)
		})
		.catch(collected => {
			let mem = new MessageEmbed();
    mem.setAuthor(quiz.fail)
    message.channel.send(mem)
		});
})
      
      
    }
}
