let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You need the 'MANAGE_MESSAGES' permission to do that!");
    if (!amount) return message.reply('Must specify an amount to delete!');
    if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
    message.channel.fetchMessages({
        limit: amount+1,
        }).then((messages) => {
        if (user) {
        const filterBy = user ? user.id : Client.user.id;
        messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
        }
    message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
}

module.exports.help = {
    name: "purge"
}