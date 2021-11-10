module.exports = {
    name: "kick",
    guildOnly: true,
    permissions:"KICK_MEMBERS",
    execute(message, args, client, Embed) {
        const stayhigh = message.mentions.members.first();
        if(!stayhigh) return message.channel.send(Embed("", "Lütfen Bir Kullanıcıyı Etiketleyin","error"))

    }
}
