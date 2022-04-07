const Discord = require('discord.js')
const request = require('request')

exports.run = async (client, message, args) => {
const member = message.mentions.members.first()
if (!member) return thenDelete(message,'❌ Bir üye etiketlemen gerekli!',10000)

const Embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Çok Tatılar!')
.setDescription(`${message.author}, ${member} üyesine içtenlikler ile sarıldı!`)
.setImage('https://c.tenor.com/DxMIq9-tS5YAAAAM/milk-and-mocha-bear-couple.gif')
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true }))
.setTimestamp()
message.channel.send(Embed)
//console.log(JSON.parse(body).results[0].url)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['sarıl'],
   permLevel: 0,
   category: "fun"
}
  
exports.help = {
   name: 'Sarıl',
   description: 'Birisine sarılmaya ne dersin?',
   usage: 'sarıl'
}