module.exports = {
    name: "ping",
    aliases: ["ping", "pign", "inpg", "pgin", "gecikme"],
    execute(message, args, client, Embed) {
        const discordPing = message.client.ws.ping;

        message.channel
            .send(Embed("", "Ping hesaplanıyor..."))
            .then(async (msg) => {
                msg.edit(
                    Embed(
                        "",
                        `🏓Bot Gecikmesi: ${
                            msg.createdTimestamp - message.createdTimestamp
                        }ms. Discord Gecikmesi: ${Math.round(discordPing)}ms`
                    )
                );
            });
    },
};
