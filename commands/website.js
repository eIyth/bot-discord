module.exports = {
    name: "website",
    description: "Renvoi le lien du site web",
    usage : "website",
    run: async (client, message, args) => {
        message.channel.send(`https://elyth.fr`);
    }
}