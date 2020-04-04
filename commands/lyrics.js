const Discord = require('discord.js');
const axios = require("axios");


module.exports = {
    name: "lyrics",
    description: "Renvoi les paroles d'une musique",
    usage: 'lyrics artist musique',
    run: async (client, message, args) => {
        let getLyrics = async () => {


            let reponse = await axios({
                "method": "GET",
                "url": "https://genius.p.rapidapi.com/search/"+args[0],
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "genius.p.rapidapi.com",
                    "x-rapidapi-key": "AY45__E_qL4cCaNaXoV1krPw-5TqqduhcKExOsmHDVMIJixlEQQeFAegYPsNrHhl"
                }
            });

            let fact = response.data;
            console.log(fact);
        }
    }
}