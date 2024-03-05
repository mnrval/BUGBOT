import jimp from 'jimp'
import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
import { apivisit } from './kanghit.js'
//menu settings 
let tags = {}

let fiturfull = Object.keys(global.plugins)
  .filter(plugin => !plugin.disabled)
  .map(plugin => {
    const helpArray = Array.isArray(global.plugins[plugin].help)
      ? global.plugins[plugin].help
      : [global.plugins[plugin].help];
    return {
      help: helpArray,
      helpCount: helpArray.length
    };
  })
  .reduce((total, plugin) => total + plugin.helpCount, 0);


let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
     let mpt = clockString(_mpt)
let defaultMenu = {
  before:  `ʜᴀɪ ᴋᴀᴋ *%name*🤗,
Kenalin Aku ${namabot}, Aku adalah sebuah Bot WhatsApp yang bisa membantu anda dan mencari informasi di WhatsApp, anda bisa bermain game bersama teman-teman anda dengan fitur yang ada di bot ini, *Terimakasih!.*

*乂  I N F O R M A T I O N*
   *✧ Nama Bot : ${namabot}*
   *✧ Runtime : %uptime*
   *✧ Prefix : [ %p ]*
   *✧ Mode : ${global.opts['self'] ? 'Private' : 'Public'}*
   *✧ ${Object.keys(global.db.data.users).length} Pengguna*
   *✧ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned*
   *✧ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned*
%readmore`,
header: `╭━━━━━━━━┈─◂\n│≡ *%category*\n├━━━━━━━━┈─◂\n│`,
body: '│➤   %cmd ',
footer: '╰━━━━━━━━┈─◂\n',
after: '*ꜱɪᴍᴘʟᴇ ʙᴏᴛ ʙʏ ʀɪꜰᴀʟᴍᴏᴅᴢ*',
}

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
await conn.sendMessage(m.chat, { react: { text: '⌛', key: m.key }});
try {
let name = m.pushName || conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'id'

let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric',
timeZone: 'Asia/Jakarta'
})
let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Jakarta' })
time = time.replace(/[.]/g, ':')
let _uptime
if (process.send) {
process.send('uptime')
_uptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let uptime = clockString(_uptime)
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})

    
// if (teks == '404') {
let groups = Object.keys(await conn.groupFetchAllParticipating())
let chats = Object.keys(await conn.chats)
let block = await conn.fetchBlocklist()
let to = new Date('April 22, 2023 00:00:00')
let now = new Date().getTime()
let distance = to - now
let days = Math.floor( distance / (1000 * 60 * 60 * 24));
let hours = Math.floor( distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
let minute = Math.floor( distance % (1000 * 60 * 60) / (1000 * 60))
let second = Math.floor( distance % (1000 * 60) / 1000)
let judul = `${ucapan()} ${conn.getName(m.sender)}`


    
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after
//// Mengurutkan objek help berdasarkan tags
help.sort((a, b) => {
  const aTag = a.tags && a.tags[0] ? a.tags[0] : '';
  const bTag = b.tags && b.tags[0] ? b.tags[0] : '';
  return aTag.localeCompare(bTag);
});

// Mengurutkan objek tags menjadi array of {tag, tag} pairs
const tagArray = Object.keys(tags).map(tag => ({ tag, tag })).sort((a, b) => a.tag.localeCompare(b.tag));

// Membentuk teks dengan mengiterasi array yang sudah diurutkan
let _text = [
  before,
  ...tagArray.map(tagObj => {
    const tag = tagObj.tag;
    return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
      ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
        return menu.help.map(help => {
          return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
            .replace(/%islimit/g, menu.limit ? '┣> Ⓛ' : ' ')
            .replace(/%isPremium/g, menu.premium ? '┣> Ⓟ' : '')
            .trim()
        }).join('\n');
      }),
      footer
    ].join('\n');
  }),
  after
].join('\n');



    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      me: conn.getName(conn.user.jid),
      name, date, time,
      readmore: readMore
    }
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => './src/avatar_contact.png')
//================={[(MENU WITH THUMBNAIL)]}========================//

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let ihu = pickRandom(global.thumbnailUrl);
let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let d3 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
let d4 = 'application/pdf'
let d5 = 'application/vnd.android.package-archive'
let d6 = 'application/zip'
let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`

let p1 = './tumnil/1.jpg'
let p2 = './tumnil/2.jpg'
let p3 = './tumnil/3.jpg'
let p4 = './tumnil/4.jpg'
let p5 = './tumnil/5.jpg'
let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
// Daftar mimetype yang didukung oleh WhatsApp
const mt = [
    'application/pdf',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.ms-powerpoint',
    'application/zip',
    'application/x-rar-compressed',
    'application/x-tar',
    'application/x-7z-compressed',
    'application/epub+zip',
    'application/json'
];
// Memilih secara acak satu mimetype dari daftar
const ri = Math.floor(Math.random() * mt.length);
const rm = mt[ri];
// showLoading(0);
let arc = pickRandom(global.AraChu2)
let sound = ['mangkane25','mangkane26','mangkane27','mangkane28','mangkane29','mangkane30','mangkane31','mangkane32','mangkane33','mangkane34','mangkane35','mangkane36','mangkane37','mangkane38','mangkane39','mangkane40','mangkane41','mangkane42','mangkane43','mangkane44','mangkane45','mangkane46','mangkane47','mangkane48','mangkane49','mangkane50','mangkane51','mangkane52','mangkane53','mangkane54'].getRandom()
let rifal = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/"+ sound +".mp3"
let fkontak = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363195377875432@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: false}}}

await conn.sendMessage(m.chat, {
	  text: text,
      contextInfo: {
      externalAdReply: {
	showAdAttribution: true,
	title: `${ucapan()} Kak ${name}`,
	body: time,
	thumbnail: await fs.readFileSync(prn),
	thumbnailUrl: arc,
	sourceUrl: sig,
	mediaType: 1,
	renderLargerThumbnail: true 
	}}}, { quoted: m });
	await conn.sendFile(m.chat, rifal, '', null, fkontak, true, { ptt: true });
	conn.sendMessage(m.chat, {
	react: {
	texy: '✅',
	key: m.key 
	}}); 	

} catch (e) {
conn.reply(m.chat, 'Maaf, menu sedang error', m)
throw e
}}

handler.help = ['allmenu']
handler.command = ['allmenu','menuall']
handler.tags = ['info']
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

async function genProfile(conn, m) {
  let font = await jimp.loadFont('./names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(thumbnailUrl.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'
    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())
    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}

const rifal = [
"./vn/menu.mp3",
"./vn/menu1.mp3",
"./vn/menu2.mp3",
"./vn/menu3.mp3",
"./vn/menu4.mp3",
"./vn/menu5.mp3",
"./vn/menu6.mp3"
]

function ucapan() {
    const time = moment.tz("Asia/Makassar").format("HH")
    let res = "Selamat Dini Hari ☀️"
    if (time >= 4) {
        res = "Selamat Pagi 🌄"
    }
    if (time >= 10) {
        res = "Selamat Siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat Sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat Malam 🌙"
    }
    return res
}