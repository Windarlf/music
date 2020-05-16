const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» ♖ Kavatlar ♖ | Sunucu Komutları')
.setTimestamp()
.addField('» -Afk- Sunucuda afk olmanızı sağlar ve birisi sizi etiketleyince afk olduğunuzu sebebi ile belirtir.','w!afk <sebep> ')
.addField('» -Ping- Botun pingini ölçer.','w!ping ')
.addField('» -Havadurumu- Hava durumunu gösterir','w!havadurumu <şehir> ')
.addField('» -İstatistik- Botun istatistiğini gösterir.','w!istatistik ')
.addField('» -Reklam Taraması- Kullanıcıların Oynuyor mesajındaki ve Kullanıcı adlarındaki reklamları tarar.','w!reklamtara')
.addField('» -Yaz- İstediğiniz şeyi bota yazdırır.','w!yaz <mesaj> ')
.addField('» -Sunucu Bilgi- Sunucunun bilgilerini gönderir.', 'w!sunucubilgi')
.addField('» -Büyük Harf Engel- Capslock kullanımını engeller.','w!capsengel [#kanal]')
.addField('» -Oylama Kanalı- Oylama kanalını seçmenizi sağlar','w!oylakanal [#kanal]')
.addField('» -Oylama- Seçilen oylama kanalına oylama yapar.','w!oyla <oylanacak soru>')
.addField('» -Reklam Filitresi- Reklam Engelleme Sistemini Açar/Kapatır.','w!reklam <aç/kapat> ')
.addField('» -Mesaj Sil- Belirlenen miktarda mesajı siler.','w!sil ')
.addField('» -Üye Durum- Üye Durumlarını ve sunucudaki üye sayısını gösterir','w!üyedurum ')
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
  name: 'ymod',
  description: 'Mod komutları gösterir.',
  usage: 'w!ymod'
};