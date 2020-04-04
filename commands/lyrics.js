const Discord = require('discord.js');
var api = require('genius-api');
var genius = new api("AY45__E_qL4cCaNaXoV1krPw-5TqqduhcKExOsmHDVMIJixlEQQeFAegYPsNrHhl");
var cheerio = require("cheerio");
const fetch = require('node-fetch');

module.exports = {
    name: "lyrics",
    description: "Renvoi les paroles d'une musique",
    usage: 'lyrics nom',
    run: async (client, message, args) => {
        genius.search(JSON.stringify(args)).then(function (response) {
            var retour="";
            fetch(response.hits[0].result.url)
                .then( res => {
                    if(res.ok){
                        retour = res.text();
                        console.log(retour);
                        const $ = cheerio.load(retour);
                        const lyrics = $('.lyrics').text();
                        console.log(lyrics);
                    };
                })


            // const embed = new Discord.RichEmbed()
            //     .setColor('#ffff00')
            //     .setTitle(response.hits[0].result.title)
            //     .setURL(response.hits[0].result.url)
            //     .setAuthor("par " + response.hits[0].result.primary_artist.name)
            //     .addField(response.hits[0].result.full_title, response.hits[0].result.url)
            //     .setThumbnail(response.hits[0].result.song_art_image_thumbnail_url);
            // message.channel.send(embed);

            // URL = response.hits[0].result.url;
            // request({
            //         uri: URL
            //     },
            //     function (error, response, body) {
            //         data = extractor(body);
            //         var res = data.text.split("[");
            //         console
            //     });

        });
    }
}