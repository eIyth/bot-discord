const Discord = require('discord.js');
const unirest = require("unirest");


module.exports = {
    name: "mot",
    description: "Renvoi le définition d'un mot ou un mot aleatoire",
    usage: "mot rnd | mot def example",
    run: async (client, message, args) => {
        if (args[0] === 'def') {
            let getMot = async () => {
                let response = await unirest.get("https://wordsapiv1.p.mashape.com/words/" + args[1])
                    .header("X-Mashape-Key", process.env.TOKEN_WORDAPI)
                    .header("Accept", "application/json");
                let def = response.body;
                return def;
            }
            let motDef = await getMot();
            if (motDef.word) {
                const embed = new Discord.RichEmbed()
                    .setColor('grey')
                    .setTitle("Définition d'un mot")
                    .addField('Que veut dire ' + args[1] + '?', motDef.results[0].definition);
                for (let i = 1; i < motDef.results.length; i++) {
                    embed.addField('Autre définition n°' + i, motDef.results[i].definition)
                }
                message.channel.send(embed);

            } else {
                message.channel.send("Verifiez l'ortographe du mot");
            }
        } else if (args[0] === 'rnd') {
            let getMotRnd = async () => {
                let response = await unirest.get("https://wordsapiv1.p.mashape.com/words/?random=true")
                    .header("X-Mashape-Key", process.env.TOKEN_WORDAPI);
                let def = response.body;
                return def;
            }

            let motDefRnd = await getMotRnd();
            const embed = new Discord.RichEmbed()
                .setColor('red')
                .setTitle("Mot aléatoire")
                .addField('Savez-vous que veut-dire : ', motDefRnd.word)
                .addField('Définition :', motDefRnd.results[0].definition);
            message.channel.send(embed);
        }
    }
}