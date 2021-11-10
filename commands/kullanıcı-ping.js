const Discord = require('discord.js')
module.exports = {
    name: "kullanıcı-ping",
    aliases: ["kp","pingim"],
    execute(message, args, client ) {
        let pingmesaj;
        let pingdurum;

        let mesaj;
        let mesajdurum;
        if (Date.now() - message.createdAt < 100) {
            mesaj = ":red_circle:"
            mesajdurum = "#ff0000"
        }
        if (Date.now() - message.createdAt < 60) {
            mesaj = ":yellow_circle:"
            mesajdurum = "#ffff00"
        }
        if (Date.now() - message.createdAt < 30) {
            mesaj = ":green_circle: "
            mesajdurum = "#66ff00"
        }
        if (Date.now() - message.createdAt > 100) {
            mesaj = ":red_circle:"
            mesajdurum = "#ff0000"
        }

        if (Date.now() - message.createdAt > 60) {
            mesaj = ":yellow_circle:"
            mesajdurum = "#ffff00"
        }
        if (Date.now() - message.createdAt > 150) {
            mesaj = ":red_circle:"
            mesajdurum = "#ff0000"
        }
        if (Date.now() - message.createdAt > 250) {
            mesaj = ":red_circle:"
            mesajdurum = "#ff0000"
        }
        if (Date.now() - message.createdAt > 500) {
            mesaj = ":white_circle: "
            mesajdurum = "#66ff00"
        }
        if (Date.now() - message.createdAt > 1000) {
            mesaj = ":white_circle: "
            mesajdurum = "#66ff00"
        }
        /*for(var emojilers in client.emojiler){
        let emojis = client.emojis.get(emojilers)
        }*/
        if (client.ws.ping < 100) {
            pingmesaj = ":red_circle:"
            pingdurum = "#ff0000"
        }
        if (client.ws.ping < 60) {
            pingmesaj = ":yellow_circle:"
            pingdurum = "#ffff00"
        }
        if (client.ws.ping < 30) {
            pingmesaj = ":green_circle: "
            pingdurum = "#66ff00"
        }
        if (client.ws.ping > 100) {
            pingmesaj = ":red_circle:"
            pingdurum = "#ff0000"
        }

        if (client.ws.ping > 60) {
            pingmesaj = ":yellow_circle:"
            pingdurum = "#ffff00"
        }
        if (client.ws.ping > 150) {
            pingmesaj = ":red_circle:"
            pingdurum = "#ff0000"
        }
        if (client.ws.ping > 250) {
            pingmesaj = ":red_circle:"
            pingdurum = "#ff0000"
        }
        if (client.ws.ping > 500) {
            pingmesaj = ":white_circle: "
            pingdurum = "#66ff00"
        }
        if (client.ws.ping > 1000) {
            pingmesaj = ":white_circle: "
            pingdurum = "#66ff00"
        }
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username + " Adlı kullanıcı tarafından istendi.", message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`Gecikme: ${client.ws.ping + "ms"} ${pingmesaj}\n\nMesaj Gecikmesi: ${(Date.now() - message.createdAt) + "ms"} ${mesaj}`)
            .setColor(pingdurum)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(embed)

    }
}