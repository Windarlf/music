const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage(' **Botun Yeniden Başlatılmasını Onaylıyor Musun ?**')
.then(() => {
  message.delete();
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage('  **Yeniden Başlıyorum**   ').then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] :space_invader: **Bot Yeniden Başlatılıyor** :space_invader:`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.delete();
      message.channel.sendMessage(' `Yeniden Başlama İşlemini İptal Ettim` ');
    });
  message.delete();
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenile','yb'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: '[YAPIMCI]',
  usage: 'w!reboot'
};