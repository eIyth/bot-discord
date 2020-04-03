module.exports = {
    name: "ping",
    description: "Renvoi pong",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Attends....`);

        msg.edit(`🏓 Pong!`);

    }
}