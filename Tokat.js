const Discord = require('discord.js')
const request = require('request')

exports.run = async (client, message, args) => {
const member = message.mentions.members.first()
if (!member) return thenDelete(message,'❌ Bir üye etiketlemen gerekli!',10000)

const Embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Slap!')
.setDescription(`${message.author}, ${member} kullanıcısını tokatladı.`)
.setImage('https://media.giphy.com/media/X2kcxNkl73BOo/giphy.gif')
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true }))
.setTimestamp()
message.channel.send(Embed)
//console.log(JSON.parse(body).results[0].url)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['tokat'],
   permLevel: 0,
   category: "fun"
}
  
exports.help = {
   name: 'tokat',
   description: 'Birisine tokat at.',
   usage: 'tokat'
}