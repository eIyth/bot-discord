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
        let lyricsValue = await getLyrics();
        if(lyricsValue.lyrics.length>2000){
            const embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle("Paroles de "+args[1])
            .addField(args[1]+" par "+args[0], "Desole le message est trop long (>2000 caracteres)")
            message.channel.send(embed);
        }
        else {
            const embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle("Paroles de "+args[1])
            .addField(args[1]+" par "+args[0], lyricsValue.lyrics)
            message.channel.send(embed);
        }
    }
}