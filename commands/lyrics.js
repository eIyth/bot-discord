const Discord = require('discord.js');
var unirest = require("unirest");


module.exports = {
    name: "lyrics",
    description: "Renvoi les paroles d'une musique",
    usage: 'lyrics nom',
    run: async (client, message, args) => {
        let getLyrics = async () => {
            var req = await unirest.get("https://genius.p.rapidapi.com/search/")
                .queryString("q", 'humble')
                .header("x-rapidapi-host", "genius.p.rapidapi.com")
                .header("x-rapidapi-key", "e0d10c86dfmsh30f5845af8ce81ep148e9ajsn82de9e842fc6");
            let lyrics = req.body;
            return lyrics;
        }
        let lyricsValue = await getLyrics();
        console.log(lyricsValue.response.hits);

        const embed = new Discord.RichEmbed()
            .setColor('grey')
            .setTitle("Paroles de" + lyricsValue.response.hits[0].result.title)
            .addField('Blablabla', '');
        message.channel.send(embed);
    }
}