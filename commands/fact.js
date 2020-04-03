const Discord = require('discord.js');
const axios = require("axios");


module.exports = {
    name: "fact",
    description: "Renvoi une fact random ou le fact du jour",
    run: async (client, message, args) => {
        if (args[0] === 'jour') {
            let getFact = async () => {
                let response = await axios.get("https://uselessfacts.jsph.pl/today.json?language=en");
                let fact = response.data;
                return fact
            }
            let factValue = await getFact();
            const embed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle("Funfact du jour")
                .addField('Le saviez-vous ?', factValue.text)
                .setAuthor(factValue.source)
                .setTimestamp('');
    
            message.channel.send(embed);
        } else {
            let getFact = async () => {
                let response = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
                let fact = response.data;
                return fact
            }
            let factValue = await getFact();
            const embed = new Discord.RichEmbed()
                .setColor('#cc0000')
                .setTitle("Funfact random")
                .addField('Le saviez-vous ?', factValue.text)
                .setAuthor(factValue.source)
                .setTimestamp('');
    
            message.channel.send(embed);
    
    
        }
    }
}
