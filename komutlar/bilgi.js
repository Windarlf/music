const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('♖ Kavatlar ♖ Bot Bilgi')
.setTimestamp()
.addField('Kuruluş Yılı', '2019')
.addField('Bot Sahibi', '<@103505147396624384>')
.setFooter('♖ Kavatlar ♖ - Bot - Bilgi Komutu', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.delete();
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};
exports.help = {
  name: 'botbilgi',
  description: '.',
  usage: 'w!botbilgi'
};