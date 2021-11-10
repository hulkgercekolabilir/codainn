module.exports = {
    name: "ban",
    guildOnly: true,
    permissions:"BAN_MEMBERS",
    execute(message, args, client, Embed) {
        const stayhigh = message.mentions.members.first();
        if(!stayhigh) return message.channel.send(Embed(
            "", "Lütfen Bir Kullanıcıyı Etiketleyin","error"
            ))

        message.guild.members.ban(stayhigh)
        .then(() => {
            message.channel.send(Embed("", `${stayhigh.displayName} Sunucudan Yasaklandı!`))
        })
        .catch(() => {
            message.channel.send(Embed("", `${stayhigh.displayName} Adlı Kişinin Yetkisi Benim Yetkimden Yüskek olduğu için Bu Kişiyi Yasaklayamıyorum!`, "error"))

        })

    }
}