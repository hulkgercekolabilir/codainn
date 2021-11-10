const Discord = require('discord.js');
module.exports = {
    name: "avatar",
    aliases: ["avatar", "av"],
    execute(message, args) {
        let target = message.mentions.users.first() || message.author || message.mentions.users.id.first();
        message.channel.send(new Discord.MessageEmbed()
            .setAuthor(target.tag, target.displayAvatarURL({ dynamic: true }))
            .setTitle('Avatar')
            .setColor("#8f28a6")
            .setImage(target.displayAvatarURL({ dynamic: true, size: 1024 })));
            
    }
}