const Discord = require("discord.js");
module.exports = {
  name: "unlock",
  aliases: ["unlock", "ka"],
  execute(message, args) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;

    let channel = message.mentions.channels.first() || message.channel;
    message.channel
      .send(`${channel} kanalı açıldı.`)
      .then((m) => m.delete({ timeout: 7000 }));

    let everyone = message.guild.roles.cache.find(
      (a) => a.name === "@everyone"
    );
    channel.updateOverwrite(
      everyone,
      { SEND_MESSAGES: null },
      "Tarafından " + message.author.tag
    );
    channel.send(
      new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(channel.name + " adlı kanal açıldı.")
        .setDescription(`Kanalın kilidi açıldı.`)
    );
  },
};
