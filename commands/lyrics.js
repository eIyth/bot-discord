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

            const all = await Genius.getAll(search);
            console.log(all);

            const re = /\[[^)]*?\]/g
            const result = lyrics.split(re);
            
            const embed = new Discord.RichEmbed()
                .setColor('#ffff00')
                .setTitle("Paroles de "+all.title )
                .setAuthor("par "+ all.primary_artist.name)
                .setThumbnail(all.song_art_image_thumbnail_url)
                .setURL(url)
                .setDescription("Vous pouvez retrouver le lien des paroles en cliquant sur le nom de la musique en haut");
                for (let i = 1; i < result.length; i++) {
                    embed.addField("Couplet "+i,result[i]);
                }
            
                message.channel.send(embed);
    }
}