const Discord = require('discord.js')
const request = require('request')

exports.run = async (client, message, args) => {
const Embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('O zaman dans!')
.setDescription(`${message.author} dans ediyor! Ona katılın!`)
.setImage('https://media.giphy.com/media/3o7qDQ4kcSD1PLM3BK/giphy.gif')
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true }))
.setTimestamp()
message.channel.send(Embed)
//console.log(JSON.parse(body).results[0].url)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['dans'],
   permLevel: 0,
   category: "fun"
}
  
exports.help = {
   name: 'Dans',
   description: 'Dans et.',
   usage: 'dans'
}