const Discord = require('discord.js')
const request = require('request')

exports.run = async (client, message, args) => {
const member = message.mentions.members.first()
if (!member) return thenDelete(message,'❌ Bir üye etiketlemen gerekli!',10000)

const Embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('O da neydi?')
.setDescription(`${message.author}, ${member} kullanıcısına parmak attı :­D`)
.setImage('https://media.giphy.com/media/FLiQVj94ThGBr5mEM7/giphy.gif')
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true }))
.setTimestamp()
message.channel.send(Embed)
//console.log(JSON.parse(body).results[0].url)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['parmak'],
   permLevel: 0,
   category: "fun"
}
  
exports.help = {
   name: 'Parmak',
   description: 'Birisini parmaklarsın.',
   usage: 'parmak'
}