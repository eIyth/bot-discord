const Discord = require('discord.js');
const axios = require("axios");


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
        }
        req.end(function (res) {
            if (res.error) throw new Error(res.error);
        
            console.log(res.body);
        });
    }
}