const Discord = require('discord.js');
const axios = require("axios");


module.exports = {
    name: "lyrics",
    description: "Renvoi les paroles d'une musique",
    usage : 'lyrics artist musique',
    run: async (client, message, args) => {
        let getFact = async () => {
            let response = await axios.get("https://api.lyrics.ovh/v1/"+args[0]+"/"+args[1]);
            let fact = response.data;
            console.log(fact);
            return fact
        }
        let factValue = await getFact();
        message.channel.send(factValue.lyrics);
    }
}