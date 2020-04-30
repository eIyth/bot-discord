const Discord = require('discord.js');

module.exports = {
    name: "report",
    description: "Envoyer un report sur un utilisateur",
    usage : 'report @Username#0000 | report',

    run: async (client, message, args) => {
        if (args[0] === ''){
            message.channel.send(`Vous devez choisir un utilisateur`);
        }
        else {
            const embed = new Discord.RichEmbed()
                .setColor('yellow')
                .setTitle("Report envoyé sur "+ args[0])
                .addField('Motif du report', JSON.stringify(args));
            message.channel.send(embed);
        }
    }
}