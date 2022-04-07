const Discord = require('discord.js')
const request = require('request')

exports.run = async (client, message, args) => {
const RandomNumber = Math.floor(Math.random() * 100) + 1
if (RandomNumber > 1 && RandomNumber < 11)  heartPercentage = "💖🖤🖤🖤🖤🖤🖤🖤🖤🖤"
if (RandomNumber > 10 && RandomNumber < 21) heartPercentage = "💖💖🖤🖤🖤🖤🖤🖤🖤🖤"
if (RandomNumber > 20 && RandomNumber < 31) heartPercentage = "💖💖💖🖤🖤🖤🖤🖤🖤🖤"
if (RandomNumber > 30 && RandomNumber < 41) heartPercentage = "💖💖💖💖🖤🖤🖤🖤🖤🖤"
if (RandomNumber > 40 && RandomNumber < 51) heartPercentage = "💖💖💖💖💖🖤🖤🖤🖤🖤"
if (RandomNumber > 50 && RandomNumber < 61) heartPercentage = "💖💖💖💖💖💖🖤🖤🖤🖤"
if (RandomNumber > 60 && RandomNumber < 71) heartPercentage = "💖💖💖💖💖💖💖🖤🖤🖤"
if (RandomNumber > 70 && RandomNumber < 81) heartPercentage = "💖💖💖💖💖💖💖💖🖤🖤"
if (RandomNumber > 80 && RandomNumber < 91) heartPercentage = "💖💖💖💖💖💖💖💖💖🖤"
if (RandomNumber > 90 && RandomNumber < 101) heartPercentage = "💖💖💖💖💖💖💖💖💖💖"

const member = message.mentions.members.first()
if (!member) return thenDelete(message,'❌ Bir üye etiketlemen gerekli!',10000)

const Embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Birileri aşık mı oldu?')
.setDescription(`${message.author} ile ${member} kullanıcısı arasındaki aşk seviyesini ölçtüm ve sonuç **%${RandomNumber}** çıktı!

${heartPercentage}`)
.setImage('https://media.giphy.com/media/eiRpSPB8OSGVcbkOIJ/giphy.gif')
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true }))
.setTimestamp()
message.channel.send(Embed)
//console.log(JSON.parse(body).results[0].url)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['aşk-ölçer','aşk'],
   permLevel: 0,
   category: "fun"
}
  
exports.help = {
   name: 'Aşk Ölçer',
   description: 'Kullanıcılar arasında aşk ölçer.',
   usage: 'aşk'
}