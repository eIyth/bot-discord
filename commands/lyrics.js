const Discord = require('discord.js');
const genius = require("genius-lyrics");
const Genius = new genius.Client('AY45__E_qL4cCaNaXoV1krPw-5TqqduhcKExOsmHDVMIJixlEQQeFAegYPsNrHhl');

module.exports = {
    name: "lyrics",
    description: "Renvoi les paroles d'une musique",
    usage: 'lyrics nom',
    run: async (client, message, args) => {

            const search = await Genius.findTrack(JSON.stringify(args));
            const url = await Genius.getUrl(search);
            const lyricsJSON = await Genius.getLyrics(url);
            const lyrics = lyricsJSON.lyrics;

            const re = /\[[^)]*?\]/g
            const result = lyrics.split(re);
            
            const embed = new Discord.RichEmbed()
                .setColor('#ffff00')
                .setTitle("Parole de "+ JSON.stringify(args))
                .setURL(url);
                for (let i = 1; i < result.length; i++) {
                    console.log(result[i])
                }
            
                message.channel.send(embed);


            //     const embed = new Discord.RichEmbed()
            //         .setColor('#ffff00')
            //         .setTitle(response.hits[0].result.title)
            //         .setURL(response.hits[0].result.url)
            //         .setAuthor("par " + response.hits[0].result.primary_artist.name)
            //         .addField(response.hits[0].result.full_title, response.hits[0].result.url)
            //         .setThumbnail(response.hits[0].result.song_art_image_thumbnail_url);
            //     message.channel.send(embed);
            // }
    }
}