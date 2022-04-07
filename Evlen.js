const Discord = require('discord.js')
const request = require('request')

exports.run = async (client, message, args) => {
const member = message.mentions.members.first()
if (!member) return thenDelete(message,'❌ Bir üye etiketlemen gerekli!',10000)

const Embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Mutluluklar 🥳')
.setDescription(`${message.author}, ${member} kullanıcısı ile evlendi.`)
.setImage('https://media.giphy.com/media/Ymyd9kiZUaIxj3hO4r/giphy.gif')
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true }))
.setTimestamp()
message.channel.send(Embed)
//console.log(JSON.parse(body).results[0].url)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['evlen'],
   permLevel: 0,
   category: "fun"
}
  
exports.help = {
   name: 'Evlen',
   description: 'Birisini ile evlen.',
   usage: 'evlen'
}