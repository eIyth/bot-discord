const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'Njc4NTYyMTEwNTM1MzY4NzE0.Xkkmbg.541pp2kO50e48wgYXt1sFpYmXZE';

const PREFIX = '>';


var version = '0.0.1'

var servers = {};
const axios = require("axios");

bot.on('ready', () => {
    console.log('le bot est online');
});


bot.on('message', async message => {

    let args = message.content.substring(PREFIX.length).split(" ");


    switch (args[0]) {
        case 'ping':
            message.channel.send('Pong !');
            break;
        case 'website':
            message.channel.send('http://www.elyth.fr');
            break;
        case 'info':
            if (args[1] === 'version') {
                message.channel.send('Version ' + version);
            } else {
                message.channel.send('Mauvaise utilisation da la commande !');
            }
            break;
        case 'clear':
            if (!args[1]) return message.reply('Il faut un deuxieme argument');
            message.channel.bulkDelete(args[1]);
            break;
        case 'fact':
            if (args[1] === 'jour') {
                let getFact = async () => {
                    let response = await axios.get("https://uselessfacts.jsph.pl/today.json?language=en");
                    let fact = response.data;
                    return fact
                }
                let factValue = await getFact();
                const embed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle("Funfact du jour")
                .addField('Le savier-vous ?',factValue.text)
                .setAuthor(factValue.source)
                .setTimestamp('');

                message.channel.send(embed);
            }
            else {
                let getFact = async () => {
                    let response = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
                    let fact = response.data;
                    return fact
                }
                let factValue = await getFact();
                const embed = new Discord.RichEmbed()
                .setColor('#cc0000')
                .setTitle("Funfact random")
                .addField('Le savier-vous ?',factValue.text)
                .setAuthor(factValue.source)
                .setTimestamp('');

                message.channel.send(embed);


            }
            break;
        case 'mot':
            if (args[1] === 'def') {
               let getMot = async () => {
                  let response = await axios.get("https://wordsapiv1.p.mashape.com/words/"+args[2]+"/definitions");
                  let def = response.data;
                  return def;
               }
               let motDef = await getDef();
               const embed = new Discord.RichEmbed()
               .setColor('grey')
               .setTitle("Définition d'un mot")
               .addField('Que veut dire '+args[2]+'?',motDef.definitions[definition]);

               message.channel.send(embed);
        }


    }
});

bot.login(token);