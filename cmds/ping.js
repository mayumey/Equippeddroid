const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, bot); //Connecting to DiscordBotList
    dbl.on('posted', () => {
        console.log('Server count posted!');
      })
      
      dbl.on('error', e => {
       console.log(`Oops! ${e}`);
      })
    
    let m = await message.channel.send("Pinging...");
    
    let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription(":ping_pong: Pong!")
            .addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`)
            .setColor("#000000")
            .setFooter(`Information shown here may not be accurate!`)
            
            message.channel.send({embed: embed});
}

module.exports.help = {
    name: "ping"
}