const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require('mongoose');
const prefix = '$';
const LanguageModel = require('./models/lang');
client.on('ready', async() => {
    console.log('Online');
    mongoose.connect("mongodb+srv://work:work123@cluster0.e0df5.mongodb.net/work?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(console.log('MongoDB is Ready'));
});

client.on('message', async(message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'setlang')) {
        let args = message.content.split(' ');
        if(!args[1]) return message.channel.send(`**Usage: ${prefix}setlang \`<en/ar>\`**`);
        if(args[1] === 'en') {
            LanguageModel.findOne({
                guildID: message.guild.id
            }, async(err, doc) => {
                if(err) throw err;
                if(!doc) {
                    new LanguageModel({
                        guildID: message.guild.id,
                        lang: 'en'
                    }).save().catch(err => console.log(err));
                    message.channel.send(`**✅ | Done Has Been Selected English Language**`);
                } else {
                await LanguageModel.findOneAndUpdate({guildID: message.guild.id, lang: 'en'});
                    message.channel.send(`**✅ | Done Has Been Selected English Language**`);
                }
            })
        } else if(args[1] === 'ar') {
            LanguageModel.findOne({
                guildID: message.guild.id,
            }, async(err, doc) => {
                if(err) throw err;
                if(!doc){ 
                    new LanguageModel({
                        guildID: message.guild.id,
                        lang: 'ar'
                    }).save().catch(err => console.log(err));
                    message.channel.send(`**✅ | Done Has Been Selected Arabic Language**`);
                } else {
                   await LanguageModel.findOneAndUpdate({guildID: message.guild.id, lang: 'ar'});
                    message.channel.send(`**✅ | Done Has Been Selected Arabic Language**`);
                }
            })
        }
    }
});

client.on('message', async(message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'test')) {
        let language = await LanguageModel.findOne({guildID: message.guild.id});
        if(language.lang === 'en') {
            message.channel.send(`**My Language is English**`);
        } else if(language.lang === 'ar') {
            message.channel.send(`**لغتي تكون العربيه**`);
        }
    }
});

client.on('message', async(message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'help')) {
        let language = await LanguageModel.findOne({guildID: message.guild.id});
        if(language.lang === 'en') {
            message.channel.send(new Discord.MessageEmbed().setDescription(`**Welcome to Help ${client.user.username}**`).addField(`Public commands :`, `\`$test\``));
        } else if(language.lang === 'ar') {
            message.channel.send(new Discord.MessageEmbed().setDescription(`**مرحبا بك في رساله الااوامر ${client.user.username}**`).addField(`الاوامر العامة :`, `\`$test\``));
        }
    }
});
client.login('NzYwNTI1MzI4NDUwOTc3Nzky.X3NUaA.KLn445jULoqzGDnIUsu5GwfVsL8');