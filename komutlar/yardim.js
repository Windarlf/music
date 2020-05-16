const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» ♖ Kavatlar ♖ | Sunucu Komutları')
.setTimestamp()
.addField('» -w!yeglence-','Eğlence Komutlarımı gösterir.')
.addField('» -w!ymod-','Mod komutlarını gösterir.')
.addField('» -w!ymuzik-','Müzik komutlarını gösterir.')
.setFooter('♖ Kavatlar ♖', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardım','müzik','muzik','komutlar'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'w!yardım'
};