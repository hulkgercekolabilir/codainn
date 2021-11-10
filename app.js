const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const {now} = require("moment");
const {token, prefix, outro} = require("./config.json");
const player = require("discordjs-ytdl-advanced");

//* utils
const Embed = require("./utils/embed.js");

//collections
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

// COMMANDS
const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));

commandFiles.forEach((file) => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
});

//Event Handlers Bot Ready
//const activities = [""];

/*client.on("ready", () => {
    // run every 10 seconds
    setInterval(() => {
         generate random number between 1 and list length.
         const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
         const newActivity = activities[randomIndex];


         client.user.setActivity(newActivity);
     }, 10000); 

 });*/

client.on("ready", () => {
    client.user.setActivity("VVS shinin’ wow ", {type: "LISTENING"});
    console.log(`${client.user.tag} \n${client.user.id} \nBot hazır`);
});

client.on('message', message => {
    if(message.content.toLowerCase() === "emoji")
        message.channel.send(
            new Discord.MessageEmbed() //Ver 11.5.1 of Discord.js
            .setTitle("This is a title")
            .setTitle("http://tryitands.ee")
            .setDescription("This is a description")
            .setTimestamp()
            .setFooter("This is a footer")
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .addField("This is a field", "this is its description")
            .setImage("https://cdn.discordapp.com/avatars/531093978980810753/ddcc891cba5e5b8a0090ed72dc8dfdc8.webp")
            .setThumbnail("https://cdn.discordapp.com/avatars/531093978980810753/ddcc891cba5e5b8a0090ed72dc8dfdc8.webp"))
        //* message.channel.send(Embed("",`${message.author.displayAvatarURL()}`,"error"))
})


client.on("message", (message) => {
    if (message.author.bot) return;
    if (
        message.content.includes("@here") ||
        message.content.includes("@everyone")
    )
        return false;
    if (message.mentions.has(client.user.id)) {
        message.channel.send(`Prefix'im \`${prefix}\``);
    }
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    //  \n\u200b -> Satır boşluğu bırakır
    //   \u\200B -> Boş bırakır

    const command =
        client.commands.get(commandName) ||
        client.commands.find(
            (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
        );

    if (!message.content.startsWith(prefix) || !command) return;
    if (command.guildOnly && message.channel.type == "dm")
        return message.channel.send(Embed(":x: Bu komut sadece sunucuda çalışır.", ""));

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const timestamp = cooldowns.get(command.name);
    const cooldownAmount = 2500;
    const now = Date.now();
    if (timestamp.has(message.author.id)) {
        const expirationTime =
            timestamp.get(message.author.id) + cooldownAmount;
        if (expirationTime > now) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.channel.send(Embed(
                "", `Lütfen ${parseInt(timeLeft)} saniye bekleyin.`, "info"
            ));
            
        }
    }

    timestamp.set(message.author.id, now);
    setTimeout(() => {
        timestamp.delete(message.author.id);
        console.log(`${message.author.tag} adlı kullanıcının cooldownı bitti`);
    }, cooldownAmount);

    try {
        command.execute(message, args, client, Embed);
    } catch (e) {
        console.error(e);
        message.channel.send(Embed("", "Bir hata oluştu", "RED"));
    }
});

//! 7/24 RADYO KOMUT HAZIR
// async function RadioRepeater() {
//     let Channel = client.channels.cache.get("904145227458162728");
//     var streamURL = "http://kralpopwmp.radyotvonline.com/;";
//     if (!Channel) return;
//     await Channel.leave();
//     Channel.join().then((connection) => {
//         const dispatcher = connection.play(streamURL);
//         dispatcher.setVolume(100 / 100); //Radyonun sesini ayarlarsınız. Değiştirmek isterseniz en soldakini değiştirin. Örnek olarak: dispatcher.setVolume(50/100)
//     });
// }

// client.on("ready", () => {
//     RadioRepeater();
//     setInterval(RadioRepeater, Math.max(3600000));
//     let Channel = client.channels.cache.get("904145227458162728");
//     if (!Channel) return;
//     var streamURL = "http://kralpopwmp.radyotvonline.com/;";

//     Channel.join().then((connection) => {
//         const dispatcher = connection.play(streamURL);
//         dispatcher.setVolume(100 / 100); //Radyonun sesini ayarlarsınız. Değiştirmek isterseniz en soldakini değiştirin. Örnek olarak: dispatcher.setVolume(50/100)
//     });
// });

client.login(token);
