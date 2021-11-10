const Discord = require('discord.js');
module.exports = {
  name: "nick",
  aliases: ["nick", "isim"],
  guildOnly: true,
  execute(message, args, client, Embed) {
    if (!message.guild) {
      const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xFF0000)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTimestamp()
      .addField(`${message.author.username} **Bu Komut Özel Mesajlarda Kullanılmaz!**`)
      return message.author.send(ozelmesajuyari); }
      if (!message.member.hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send(
        Embed("",`❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`,
      "error"));
        let member = message.mentions.members.first();
        let isim = args.slice(1).join(" ");
        if (!member) return message.channel.send(Embed("","❌ Bir Üye Etiketlemelisin!","error"));
    if (!isim) return message.channel.send(Embed("","❌ Bir İsim Yazmalısın!","error"));
    member.setNickname(`${isim}`);
    const embed = new Discord.MessageEmbed()
      .addField(
        `**🏷 İsim Değiştirildi 🏷**`,
        `\n \n**🔸️İsmi Değiştirilen Kullanıcı:** ${member.user} \n🔸️ **Yeni Kullanıcı Adı:** \`${isim}\``
      )
      .setFooter(`Kullanan: ${message.author.username}`)
      .setThumbnail(client.user.avatarURL);
    message.channel.send(embed);
  }
};
