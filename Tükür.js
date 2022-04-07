const Discord = require('discord.js')
const request = require('request')

exports.run = async (client, message, args) => {
const member = message.mentions.members.first()
if (!member) return thenDelete(message,'❌ Bir üye etiketlemen gerekli!',10000)

const Embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Püh sana!')
.setDescription(`${message.author}, ${member} kullanıcısının yüzüne tükürdü.`)
.setImage('https://c.tenor.com/rZnD-KWgKDwAAAAC/p%C3%BCh-sana-anne.gif')
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true }))
.setTimestamp()
message.channel.send(Embed)
//console.log(JSON.parse(body).results[0].url)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['tükür'],
   permLevel: 0,
   category: "fun"
}
  
exports.help = {
   name: 'Tükür',
   description: 'Birisine tükür.',
   usage: 'tükür'
}