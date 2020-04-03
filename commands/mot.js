const Discord = require('discord.js');
const axios = require("axios");
const unirest = require("unirest");


module.exports = {
    name: "mot",
    description: "Renvoi le définition d'un mot ou un mot aleatoire",
    run: async (client, message, args) => {
        console.log(args);
        if (args[0] === 'def') {
            let getMot = async () => {
                let response = await unirest.get("https://wordsapiv1.p.mashape.com/words/" + args[1])
                    .header("X-Mashape-Key", "e0d10c86dfmsh30f5845af8ce81ep148e9ajsn82de9e842fc6")
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
                    .header("X-Mashape-Key", "e0d10c86dfmsh30f5845af8ce81ep148e9ajsn82de9e842fc6");
                let def = response.body;
                return def;
            }

            try {
                let motDefRnd = await getMotRnd();
                console.log(motDefRnd);
                const embed = new Discord.RichEmbed()
                    .setColor('red')
                    .setTitle("Mot aléatoire")
                    .addField('Savez-vous que veut-dire : ', motDefRnd.word)
                    .addField('Définition :', motDefRnd.results[0].definition);
                message.channel.send(embed);
            } catch {
                let motDefRnd = await getMotRnd();
                console.log(motDefRnd);
                const embed = new Discord.RichEmbed()
                    .setColor('red')
                    .setTitle("Mot aléatoire")
                    .addField('Savez-vous que veut-dire : ', motDefRnd.word)
                    .addField('Définition','franchement : je sais pas');
                message.channel.send(embed);
            }
        } else {
            const embed = new Discord.RichEmbed()
                .setColor('grey')
                .setTitle("Possibilté de commande mot")
                .addField("Avoir la définition d'un mot", '>mot def example')
                .addField("Avoir les synonymes d'un mot", '>mot syn example')
                .addField("Avoir un mot aleatoire", '>mot rnd');
            message.channel.send(embed);
        }

    }
}