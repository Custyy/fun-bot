const Discord = require('discord.js')
const request = require('request')

exports.run = async (client, message, args) => {
const Embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Hadi oyuna!')
.setDescription(`${message.author} halay çekiyor!`)
.setImage('https://media.giphy.com/media/SGYQNfCsrnRRmWyQBk/giphy-downsized-large.gif')
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true }))
.setTimestamp()
message.channel.send(Embed)
//console.log(JSON.parse(body).results[0].url)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['halay'],
   permLevel: 0,
   category: "fun"
}
  
exports.help = {
   name: 'Halay',
   description: 'Halay çek.',
   usage: 'halay'
}