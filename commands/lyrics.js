const Discord = require('discord.js');
var unirest = require("unirest");


module.exports = {
    name: "lyrics",
    description: "Renvoi les paroles d'une musique",
    usage: 'lyrics nom',
    run: async (client, message, args) => {
        let getLyrics = async () => {
            var req = unirest("GET", "https://genius.p.rapidapi.com/search/");
            req.query({
                "q": "humble"
            });
            req.headers({
                "x-rapidapi-host": "genius.p.rapidapi.com",
                "x-rapidapi-key": "0878bdba20msh3a2cb883c1d7b48p153c9djsn1087d1e71043"
            });

            req.end(function (res) {
                if (res.error) throw new Error(res.error);
                let lyrics = res.body;
                return lyrics;
                console.log(res.body);
            });
            
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