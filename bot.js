(async()=>{
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(`𝕖𝕣𝕣𝕠𝕣❕`);
                    console.log(err);
                  });
                                  const ShsHSjJSjSJSJSGHkkhdjdmns = ['CREATE_INSTANT_INVITE','MANAGE_CHANNELS','ADD_REACTIONS','STREAM','VIEW_CHANNEL','SEND_MESSAGES','SEND_TTS_MESSAGES','MANAGE_MESSAGES','EMBED_LINKS','ATTACH_FILES','READ_MESSAGE_HISTORY','MENTION_EVERYONE','USE_EXTERNAL_EMOJIS','CONNECT','SPEAK','USE_VAD','CHANGE_NICKNAME','MANAGE_ROLES','MANAGE_WEBHOOKS','USE_APPLICATION_COMMANDS','REQUEST_TO_SPEAK','MANAGE_THREADS','USE_PUBLIC_THREADS','CREATE_PUBLIC_THREADS','USE_PRIVATE_THREADS','CREATE_PRIVATE_THREADS','USE_EXTERNAL_STICKERS','SEND_MESSAGES_IN_THREADS','START_EMBEDDED_ACTIVITIES'
                         
                         
     
     
     
             
             
     
     
     
                         
                         ]
                  const events = require('events');
                  let Discord = require("discord.js")
let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
const smartestchatbot = require('smartestchatbot');
    const client = new smartestchatbot.Client();
    
let fs = require('fs');
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`./database.json`),
fire:null,
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION", "CHANNEL"]
                    });
                    s4d.client.on('ready', () => {
                        console.log(s4d.client.user.tag + " is alive!")
                    })
                    logs(s4d.client);         
                    var channelid, arguments2, botid, command;


await s4d.client.login((process.env.TOKEN)).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid token was provided!")
        } else {
            throw new Error("Intents are not turned on!")
        }
    });

s4d.client.on('ready', async () => {
  channelid = 'put the channel id where will the chatbot';
  botid = 'put the bots id here';

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  channelid = 'put the channel id where will the chatbot';
  botid = 'put the bots id here';
  if (((s4dmessage.channel).id) == channelid && (s4dmessage.mentions.members.first().user) == botid) {
    (s4dmessage.channel).sendTyping();
        client.chat({message:s4dmessage.content, name:'bots name', owner:"put anything here", user: 849690256945184828, language:"en"}).then(reply => {
            s4dmessage.reply({content:String(reply), allowedMentions: {
				repliedUser: true
			}})});}

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];

});

                    return s4d
                    })();
