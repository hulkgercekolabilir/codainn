const player = require("discordjs-ytdl-advanced");
const Discord = require("discord.js");


module.exports = {
    name:"play",
    aliases:["play","p"],
    guildOnly:true,
    async execute(message,args, client, Embed){
        if(!args[0]) return message.channel.send('boş bırakma');
        if(message.member.voice.channel){
            const lvyen = await message.member.voice.channel.join()
            const song = await player(args.join(" "))
            song.play(lvyen)
            const rivrivriv = new Discord.MessageEmbed()
            .setTitle("Şimdi Çalıyor")
            //.setURL(song.url)
            .setColor("#8f28a6")
            .setDescription(`[${song.title}](${song.url})`+ ` **[<@${message.author.id}>]**`)
            //.setThumbnail(song.thumbnail)
            message.channel.send(rivrivriv)

        } else {
            const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription("Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmalısın!")
            .setColor("0xFF0000")
            //.setFooter(client.user.tag, client.user.displayAvatarURL())
            //.setTimestamp()
        message.channel.send(embed)

        }
    }

}