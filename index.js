// ===== IMPORTING MODULE ===== //

const { Client, Guild } = require('discord.js-selfbot-v13');
const d = require('delay')
const e = require('express')
const client = new Client()

// ===== IMPORTING MODULE ===== //



// =====      CONFIG      ===== //

const chid = "967384779295187005" // Channel Id.
const sacrifice = "no" // Input yes Or no ( Lower Case )
const gamble = "yes" // Input yes Or no ( Lower Case )
const gambleValue = 50000 // The Value You Want To Be Gambled ( Number Only )

// =====      CONFIG      ===== //



// =====      SERVER      ===== //

const s = e()
s.all('/', (req, res) => {
  res.send(`Konto`)
})

s.listen(3000, () => {
  console.log(`Hosted!`)
})

// =====      SERVER      ===== //



// =====      CLIENT      ===== //

client.on('ready', async () => {
  console.log(`==============================`)
  console.log(`= THE FARM IS READY          =`)
  console.log(`= COMMAND : _farm            =`)
  console.log(`= MADE BY ImpThreal          =`)
  console.log(`= HOST ME AT uptimerobot.com =`)
  console.log(`= ENJOY!                     =`)
  console.log(`==============================`)
})

client.on('messageCreate', async (message) => {
  if(message.content.includes('verify') || message.content.includes('captcha')) return process.exit().then(() => message.channel.send(`Need To Be Verified...`))
  if(message.channel.id != chid || message.author.bot || !message.guild) return
  if(message.content.toLowerCase() === "_farm") {
    message.reply(`Started Farming...`)
    setInterval( async () => {
      message.channel.sendTyping()
      await d(1000)
      message.channel.send(`wh`).then(() => {
        console.log(`Successful Hunt!`)
      })
    }, 20 * 1000)
    setInterval( async () => {
      message.channel.sendTyping()
      await d(1000)
      message.channel.send(`wb`).then(() => {
        console.log(`Successful Battle!`)
      })
    }, 45 * 1000)
    if(gamble === "yes") {
    setInterval( async () => {
      message.channel.sendTyping()
      await d(1000)
      
      message.channel.send(`ws ${parseInt(gambleValue)}`).then(() => {
        console.log(`Successful Gamble!`)
      })
    }, 20 * 1000)
   }
    setInterval( async () => {
      message.channel.sendTyping()
      await d(1000)
      message.channel.send(`wcash`).then(() => {
        console.log(`Successfully Checked The Balance!`)
      })
    }, 60 * 1000)
    if(sacrifice === "yes") {
      setInterval( async () => {
      message.channel.sendTyping()
      await d(1000)
        
      message.channel.send(`wsc all`).then(() => {
        console.log(`Successful Sacrifice!`)
      })
    }, 120 * 1000)
   }
    setInterval( async () => {
      message.channel.sendTyping()
      await d(1000)
      message.channel.send(`wpray`).then(() => {
        console.log(`Successful Pray!`)
      })
    }, 5 * 60 * 1000)
  }
})

// =====      CLIENT      ===== //



// =====    INITIALIZE    ===== //

client.login(process.env.token) // Put Token In Environment / Secret

// =====    INITIALIZE    ===== //
