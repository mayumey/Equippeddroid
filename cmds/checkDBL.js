const Discord = module.require("discord.js");
const DBL = require("dblapi.js");

module.exports.run = async (bot, message, args) => {
    const dbl = new DBL(process.env.DBL_TOKEN, bot);   
    
    
        if(!args[0]) return  message.channel.send("Please mention a bot or write his ID!");
    dbl.getBot(args[0]).then(bot => {
        
        let emb = new Discord.RichEmbed()
        .setAuthor(bot.username)
        .setDescription(`Here is some Info about this bot on [DiscordBotList](https://discordbots.org/bot/${bot.id})`)
        .addField("Bot's Username", `${bot.username}#${bot.discriminator}`, true)
        .addField("Bot's Prefix", bot.prefix, true)
        .addField("Short Description", bot.shortdesc, true)
        .addField("Library", bot.lib, true)
        .addField("Tags", bot.tags, true)
        .addField("Website", `[Website !!May Not Be Safe!!](${bot.website})`, true)
        .addField("GitHub Repo", bot.github, true)
        .addField("Owners", bot.owners, true)
        .addField("Upvotes", bot.points, true)
        .addField("Is the bot certified?", bot.certifiedBot, true)
        .addField("Invite", `[Click to Invite ${bot.username}](${bot.invite})`, true)
        message.channel.send(emb)
        
        
        
        
        
    })
  
}

module.exports.help = {
    name: "dbl"
}