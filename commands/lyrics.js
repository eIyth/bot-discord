const Discord = require('discord.js');
var unirest = require("unirest");


module.exports = {
    name: "lyrics",
    description: "Renvoi les paroles d'une musique",
    usage: 'lyrics artist musique',
    run: async (client, message, args) => {
        let getLyrics = async () => {
            var req = await unirest.get("https://genius.p.rapidapi.com/search/")
                .query("q", args[0])
                .header("x-rapidapi-host", "genius.p.rapidapi.com")
                .header("x-rapidapi-key", "0878bdba20msh3a2cb883c1d7b48p153c9djsn1087d1e71043");
            let fact = req.body;
            return fact;
        }
        let lyricsValue = await getLyrics();
        console.log(lyricsValue);

        const embed = new Discord.RichEmbed()
            .setColor('grey')
            .setTitle("Paroles de" + lyricsValue.reponse.hits[0].result.title)
            .addField('Blablabla', '');
        message.channel.send(embed);
    }
}