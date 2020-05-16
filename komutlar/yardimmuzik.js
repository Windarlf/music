const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» ♖ Kavatlar ♖ | Müzik Komutları')
.setTimestamp()
.addField('» -Çal- Müzik aratır ve çıkan sonuçlardan 1-10 arası seçim yapmanız istenir.','w!çal ')
.addField('» -Sıra- Şarkı Kuyruğunu Gösterir', 'w!liste')
.addField('» -Devam- Şarkıya Devam Eder', 'w!devam')
.addField('» -Duraklat- Şarkıyı Durdurur', 'w!duraklat')
.addField('» -Kapat- Şarkıyı Kapatır', 'w!dur')
.addField('» -Ses- Müziğin ses seviyesini değiştirisiniz 1-5 arası.', 'w!ses (1-5 arası değer girin)')
.addField('» -Geç- Şarkıyı Geçersiniz', 'w!geç')
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
  name: 'ymuzik',
  description: 'Müzik komutları gösterir.',
  usage: 'w!ymuzik'
};