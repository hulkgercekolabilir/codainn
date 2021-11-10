module.exports = {
    name: "sahip",
    guildOnly: false,
    execute(message, args, client, Embed) {
        if (message.author.id == "531093978980810753")
            message.channel.send(Embed(
                "", 
                ":white_check_mark: **Sahip sensin**", "GREEN")
                );
        else message.channel.send(Embed(
            "",
            ":negative_squared_cross_mark:  **Sahip sen değilsin**","info"
            ));
    },
};
