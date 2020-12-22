require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client();
client.login(process.env.BOTTOKEN)

client.on('ready', () =>{
    console.log('bot is on bby')
})

const prefix = "!stop"

client.on('message', (message)=>{

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ')

    if(args.length != 1) 
        return message.channel.send(`You fucked up the arguments,  ${message.author}!`)

    const member = message.mentions.users.first()

    const guildMember = message.guild.member(member)

    guildMember.roles.set(['791018349559676958']) //set the poopy head role

    return message.channel.send(
        `Hold it right there, ${member}`,
    new Discord.MessageAttachment("https://image.shutterstock.com/z/stock-photo-police-officer-369187457.jpg")
    )
})