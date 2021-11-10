const embed = require("../utils/embed");

module.exports = {
    name: "reload",
    aliases: ["reload","r"],
    execute(message, args, client, Embed) {
            if (!args.length)
                return message.channel.send(Embed("","Lütfen komut adını giriniz!","error"));

            const commandName = args[0];
            const command =
                client.commands.get(commandName) ||
                client.commands.find(
                    (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
                );

            if (!command)
                return message.channnel.send(Embed("",`${commandName} adında bir komut bulunmadı.`,"error"));

            delete require.cache[require.resolve(`./${commandName}.js`)];
            try {
                const newCommand = require(`./${command.name}`);
                client.commands.set(commandName, newCommand);
                message.channel.send(Embed("",
                    `\`${command.name}\` adlı komut başarıyla yenilendi.`,"info"
                ));
            } catch (e) {
                message.channel.send(Embed("",
                    `\`${command.name}\` adlı komut yenilenirken bir hata oluştu!`,"error")
                );
                console.error(e);
            }
    },
};
