const Discord = require("discord.js");
module.exports = {
    name: "lock",
    aliases: ["lock", "kk", "lck"],
    permLevel: 0,
    execute(message, args, client) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return;

        let channel = message.mentions.channels.first() || message.channel;

        let reason;
        if (!message.mentions.channels.first()) {
            if (args[0]) reason = args.slice(0).join(" ");
        }
        if (message.mentions.channels.first()) {
            if (args[1]) reason = args.slice(1).join(" ");
        }

        let reasonn;
        if (!reason) reasonn = "______";
        if (reason) reasonn = ` ${reason}`;
        message.channel
            .send(`${channel} kanalı kilitlendi.`)
            .then((m) => m.delete({ timeout: 1000 }));

        let everyone = message.guild.roles.cache.find(
            (a) => a.name === "@everyone"
        );
        channel.updateOverwrite(
            everyone,
            { SEND_MESSAGES: false },
            "Tarafından " + message.author.tag
        );
        channel.send(
            new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(channel.name + "  kanalı kilitlendi.")
                .setDescription(
                    `Maalesef modlar${reasonn} nedeni ile bu kanalı kilitlemek zorunda kalmışlardır. Lütfen bu karara saygı gösterin belki ileride yeniden AÇILABİLİR..`
                )
        );
    },
};
