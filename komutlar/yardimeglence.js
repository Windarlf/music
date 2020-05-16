const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» ♖ Kavatlar ♖ | Eğlence Komutları')
.setTimestamp()
.addField('» -Wasted- belirtilen kişiye wasted. efekti ekler','w!wasted <@kullanıcı> ')
.addField('» -Aşk Ölçer- Seçilen Kişi ile Aşkını Ölçmeni sağlar.', 'w!askolc')
.addField('» -Yazı Tura- Yazı-Tura atar.', 'w!yazıtura')
.addField('» -Steam Ara- Aranan oyunun bilgilerini yazar', 'w!steamara <Oyun Adı>')
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
  name: 'yeglence',
  description: 'Eğlence komutları gösterir.',
  usage: 'w!yeglence'
};