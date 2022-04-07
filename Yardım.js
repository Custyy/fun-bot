const Discord = require('discord.js')
const request = require('request')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
const Embed = new Discord.MessageEmbed()
.setColor('BLURPLE')
.setAuthor(`${client.user.username} Yardım Menüsü`, client.user.avatarURL())
.setDescription(`Toplamda **${client.commands.size}** komut var.

Eğlence:
${client.commands.filter(command => command.conf.category === 'fun').map(command => `**${ayarlar.prefix + command.conf.aliases[0]}**: ${command.help.description}`).join('\n')}`)
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true }))
.setTimestamp()
message.channel.send(Embed)
//console.log(JSON.parse(body).results[0].url)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['yardım'],
   permLevel: 0
}
  
exports.help = {
   name: 'Yardım',
   description: 'Komutları gösterir',
   usage: 'yardım'
}