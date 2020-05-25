const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

["commands"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("guildCreate", guild => {

    let defaultChannel = "";
    guild.channels.cache.forEach((channel) => {
      if(channel.type == "text" && defaultChannel == "") {
        if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
          defaultChannel = channel;
        }
      }
    })
    defaultChannel.send('Hello, thanks for inviting me !')
    
    
    });

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);
    client.user.setPresence({
        status: "online",
        game: {
            name: " myself getting developped",
            type: "WATCHING"
        }
    }); 
})

client.on("message", async message => {
    const prefix = ">";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});

client.on('raw', event => {
    const eventName = event.t;
    if (eventName === 'MESSAGE_REACTION_ADD') {
        if (event.d.message_id === '714528427968823356') {
            console.log("Correct Message.");
        }
    }
});


client.login(process.env.TOKEN);
