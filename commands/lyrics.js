const Discord = require('discord.js');
var api = require('genius-api');
var genius = new api("AY45__E_qL4cCaNaXoV1krPw-5TqqduhcKExOsmHDVMIJixlEQQeFAegYPsNrHhl");


module.exports = {
    name: "lyrics",
    description: "Renvoi les paroles d'une musique",
    usage: 'lyrics nom',
    run: async (client, message, args) => {
        console.log(args);
        genius.search(args[0]).then(function (response) {

            const embed = new Discord.RichEmbed()
                .setColor('#ffff00')
                .setTitle(response.hits[0].result.title)
                .setURL(response.hits[0].result.url)
                .setAuthor("par " +response.hits[0].result.primary_artist.name)
                .addField( response.hits[0].result.full_title, response.hits[0].result.url)
                .setThumbnail(response.hits[0].result.song_art_image_thumbnail_url);
            message.channel.send(embed);
        });
    }
}