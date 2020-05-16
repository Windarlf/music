const Discord = require('discord.js');

exports.run = (client, message) => {
    //mesaj gönderme 
    message.channel.send("Botun gecikme süresi: " + Math.round(client.ping) + " MS")
message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping', 'ping'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini ölçer.',
  usage: 'w!ping [Botun pingini ölçer]'
};
