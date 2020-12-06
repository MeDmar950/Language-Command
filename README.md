#  Language Changer Command
Basic Language Changer Command

# Preview :
[![Language](https://cdn.discordapp.com/attachments/784407645489594418/785253824238714900/unknown.png)](https://github.com/MeDmar950/Language-Command)

# Usage :
* $setlang `<en/ar>`
* $test For Show Langauge

##  This Code For show language in server:
```
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
```
##  now your answer how make Ex Help Command: 
```
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
```
<table>
  <tr>
     <td align="center"><a href="https://github.com/MeDmar950"><img src="https://cdn.discordapp.com/avatars/599351862692544532/89ef6d6c0750823f7a4b2ae5d771fbaf.png?size=1024" width="100px;" alt=""/><br /><sub><b>Dmar.</b></sub></a><br /><a href="https://github.com/MeDmar950" title="Developer"></a></td>
 </tr>
 </table>
