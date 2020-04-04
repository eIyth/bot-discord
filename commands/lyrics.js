const Discord = require('discord.js');
var api = require('genius-api');
var genius = new api("AY45__E_qL4cCaNaXoV1krPw-5TqqduhcKExOsmHDVMIJixlEQQeFAegYPsNrHhl");


module.exports = {
    name: "lyrics",
    description: "Renvoi les paroles d'une musique",
    usage: 'lyrics nom',
    run: async (client, message, args) => {
        genius.search(args[0]).then(function(response) {
            console.log('hits', response.hits);
        });

        // const embed = new Discord.RichEmbed()
        //     .setColor('grey')
        //     .setTitle("Paroles de" + lyricsValue.response.hits[0].result.title)
        //     .addField('Blablabla', '');
        // message.channel.send(embed);
    }
}