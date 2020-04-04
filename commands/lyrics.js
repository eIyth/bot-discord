const Discord = require('discord.js');
const axios = require("axios");


module.exports = {
    name: "lyrics",
    description: "Renvoi les paroles d'une musique",
    usage : 'lyrics artist musique',
    run: async (client, message, args) => {
        let getLyrics = async () => {
            let response = await axios.get("https://api.lyrics.ovh/v1/"+args[0]+"/"+args[1]);
            let fact = response.data;
            console.log(fact);
            return fact
        }
        let factValue = await getLrycis();
        if(factValue.lyrics,length>2000){
            messaage.channel.send("desole le message est trop gros (>2000 caracteres)");
        }
        else {
            message.channel.send(factValue.lyrics);
        }
    }
}