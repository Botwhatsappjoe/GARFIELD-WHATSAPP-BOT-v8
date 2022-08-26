// 👈 You Can change this your choice
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *Hi 🥰 I m*
* 𝐣𝐨𝐞🧸✨ Ξ*
*I am 18 years old developer...*
*From eygpt 🇰*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Follow My Facebook - https://www.facebook.com/zenoixnoize*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+201141234934'] //👈  Enter Your number
global.premium =  ['+201141234934'] //👈  Enter Your number
global.ownernomer = '+201141234934' //👈  Enter Your number
global.ownername = ' 𝐣𝐨𝐞' //👈 Enter Your name
global.botname = ' 𝐣𝐨𝐞 𝐛𝐨𝐭 ' //👈 Enter Your Bot name
global.footer = '© 𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐣𝐨𝐞 𝐛𝐨𝐭' //👈 Enter Your Name
global.ig = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8' // 👈 You Can change this your choice
global.region = 'India, South India, Kerala' // 👈 You Can change this your choice
global.sc = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
global.fbt = 'Follw Us ℹ️' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://wa.me/+201141234934'// 👈 Enter your Social media link to follow now button
global.welcome = '*نورت الروم يقلبي ❤️🦋*' // 👈 You Can change this your choice
global.bye = ' مع السلام ❤️🐼*' // 👈 You Can change this your choice
global.packname = 'joe-BOTv8'  // 👈 You Can change this your choice 
global.author = 'joe whatsapp bot ' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'Done 🦋', // 👈 You Can change this your choice
    admin: 'الميزه دي متوفره للادمن بس !', // 👈 You Can change this your choice
    botAdmin: 'لازم اكون ادمن الاول !', // 👈 You Can change this your choice
    owner: 'الميزه دي متوفره فقط للمطور !', // 👈 You Can change this your choice
    group: 'الميزه دي متوفره فقط في الجروبات !', // 👈 You Can change this your choice
    private: 'ا الميزه دي متوفره في الشات الخاص فقط !', // 👈 You Can change this your choice
    bot: 'الميزه دي متوفره فقط للبوت ', // 👈 You Can change this your choice
    wait: '```يرجى الانتظار...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
// Do Not Change 👇 
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
