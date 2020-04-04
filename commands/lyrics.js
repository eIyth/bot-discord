const Discord = require('discord.js');
var unirest = require("unirest");


module.exports = {
    name: "lyrics",
    description: "Renvoi les paroles d'une musique",
    usage: 'lyrics nom',
    run: async (client, message, args) => {
        let getLyrics = async () => {
            var req = await unirest.get("api.genius.com/search?q="=args[0])
                .header("Authorization", "Bearer AY45__E_qL4cCaNaXoV1krPw-5TqqduhcKExOsmHDVMIJixlEQQeFAegYPsNrHhl");
            let lyrics = req.body;
            return lyrics;
        }
        let lyricsValue = await getLyrics();
        console.log(lyricsValue);

        // const embed = new Discord.RichEmbed()
        //     .setColor('grey')
        //     .setTitle("Paroles de" + lyricsValue.response.hits[0].result.title)
        //     .addField('Blablabla', '');
        // message.channel.send(embed);
    }
}