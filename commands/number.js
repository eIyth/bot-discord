const Discord = require('discord.js');
const unirest = require("unirest");

module.exports = {
    name: "number",
    description: "donne des fatcs (random) sur des nombres",
    usage : "number rnd | number 5",
    run: async (client, message, args) => {
        if (args[0] === 'rnd') {
            let getMot = async () => {
                let response = await unirest.get("http://numbersapi.com/random/math")
                    .header("X-Mashape-Key", TOKEN_WORDAPI)
                    .header("Accept", "application/json");
                let def = response.body;
                return def;
            }
            let numberFact = await getMot();
            

            const embed = new Discord.RichEmbed()
                    .setColor('blue')
                    .setTitle("Fact sur un nombre random")
                    .addField('Le saviez vous ? ', numberFact);
                message.channel.send(embed);
        }
            let getMot = async () => {
                let response = await unirest.get("http://numbersapi.com/"+args[0]+"/math")
                    .header("X-Mashape-Key", TOKEN_WORDAPI)
                    .header("Accept", "application/json");
                let def = response.body;
                return def;
            }
            let numberFact = await getMot();
            

            const embed = new Discord.RichEmbed()
                    .setColor('blue')
                    .setTitle("Fact sur "+ args[0])
                    .addField('Le saviez vous ? ', numberFact);
                message.channel.send(embed);
        }

}