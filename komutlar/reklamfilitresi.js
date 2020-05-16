const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(` Lütfen **aç** veya **kapat** Yazmalısın! Örnek: ${ayarlar.prefix}küfür-filtresi aç`).setColor("RED"));
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`Admin` Yetkisine Sahip Olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`reklam_${message.guild.id}`, 'acik') 
     return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(' Reklam Engel Başarıyla Açıldı! `Admin` Yetkisine Sahip Olanların Reklamı Engellenmicektir.').setColor("RANDOM"));
 message.delete();
  }
  if (args[0] == 'kapat') {
    db.set(`reklam_${message.guild.id}`, 'kapali') 
     return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(' Reklam Filtresi Başarıyla Kapatıldı.').setColor("RANDOM"));
  message.delete();
  } }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklamengel'],
  kategori: "ayarlar",
  permLevel: 0
};

exports.help = {
  name: 'reklam',
  description: 'Reklam Engelleme Sistemini Açar/Kapatır.',
  usage: 'w!reklam <aç/kapat>'
};