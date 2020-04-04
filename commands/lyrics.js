const Discord = require('discord.js');
var unirest = require("unirest");


module.exports = {
    name: "lyrics",
    description: "Renvoi les paroles d'une musique",
    usage: 'lyrics artist musique',
    run: async (client, message, args) => {
        let getLyrics = async () => {
            var req = unirest("GET", "https://genius.p.rapidapi.com/search/"+args[0]);

            req.headers({
                "x-rapidapi-host": "genius.p.rapidapi.com",
                "x-rapidapi-key": "AY45__E_qL4cCaNaXoV1krPw-5TqqduhcKExOsmHDVMIJixlEQQeFAegYPsNrHhl"
            });

            let fact = req.body;
            return fact;
        }
        let lyricsValue = await getLyrics();
        console.log(lyricsValue);
    }
}