const Discord = require("discord.js");
const client = new Discord.Client()

module.exports = (title, description, color = "#8f28a6") => {
    const Embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(description);
    let yr = "";
    if (color == "error") yr = "0xFF0000";
    else if (color == "info") yr = "#5184b8";

    if (yr == "") Embed.setColor(color);
    else Embed.setColor(yr);
    return Embed;
};
