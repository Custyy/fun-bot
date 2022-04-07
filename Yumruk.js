const Discord = require('discord.js')
const request = require('request')

exports.run = async (client, message, args) => {
const member = message.mentions.members.first()
if (!member) return thenDelete(message,'❌ Bir üye etiketlemen gerekli!',10000)

const Embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Bam! 💣')
.setDescription(`${message.author}, ${member} kullanıcısını yumrukladı.`)
.setImage('https://media.giphy.com/media/d31wMAc5PUktQGpq/giphy.gif')
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true }))
.setTimestamp()
message.channel.send(Embed)
//console.log(JSON.parse(body).results[0].url)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['yumruk'],
   permLevel: 0,
   category: "fun"
}
  
exports.help = {
   name: 'Yumruk',
   description: 'Birisini yumruklarsın.',
   usage: 'yumruk'
}