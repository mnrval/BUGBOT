import moment from 'moment-timezone'
import PhoneNumber from 'awesome-phonenumber'
import fs from 'fs'
import fetch from 'node-fetch'
import { pickRandom } from '../lib/other-function.js'

let menulist = async (m, { conn, args }) => {
  const perintah = args[0] || 'tags'; // Default ke 'tags' jika tidak ada tag yang disebutkan
  const tagCount = {};
  const tagHelpMapping = {};

  Object.keys(global.plugins)
    .filter(plugin => !plugin.disabled)
    .forEach(plugin => {
      const tagsArray = Array.isArray(global.plugins[plugin].tags)
        ? global.plugins[plugin].tags
        : [];

      if (tagsArray.length > 0) {
        const helpArray = Array.isArray(global.plugins[plugin].help)
          ? global.plugins[plugin].help
          : [global.plugins[plugin].help];

        tagsArray.forEach(tag => {
          if (tag) {
            if (tagCount[tag]) {
              tagCount[tag]++;
              tagHelpMapping[tag].push(...helpArray);
            } else {
              tagCount[tag] = 1;
              tagHelpMapping[tag] = [...helpArray];
        }}}); }});

  // Ambil informasi tentang plugin
  let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  });

  if (perintah === 'tags') {
    const daftarTag = Object.keys(tagCount)
      .sort()
      .join('\n   ' + pmenus + ' .menulist ');
    const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let name = m.pushName || conn.getName(m.sender)
    let p1 = './tumnil/1.jpg'
    let p2 = './tumnil/2.jpg'
    let p3 = './tumnil/3.jpg'
    let p4 = './tumnil/4.jpg'
    let p5 = './tumnil/5.jpg'
    let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
    let arc = pickRandom(global.AraChu2)
    let fkontak = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363195377875432@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: false}}}
    let sound = ['mangkane25','mangkane26','mangkane27','mangkane28','mangkane29','mangkane30','mangkane31','mangkane32','mangkane33','mangkane34','mangkane35','mangkane36','mangkane37','mangkane38','mangkane39','mangkane40','mangkane41','mangkane42','mangkane43','mangkane44','mangkane45','mangkane46','mangkane47','mangkane48','mangkane49','mangkane50','mangkane51','mangkane52','mangkane53','mangkane54'].getRandom()
    let rifal = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/"+ sound +".mp3"
    //await conn.sendFile(m.chat, rifal, '', null, fkontak, true, { ptt: true });

await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key }})
conn.sendMessage(m.chat, {
text: `ʜᴀɪ ᴋᴀᴋ *${name}*🤗,
Kenalin Aku ${namabot}, Aku adalah sebuah Bot WhatsApp yang bisa membantu anda dan mencari informasi di WhatsApp, anda bisa bermain game bersama teman-teman anda dengan fitur yang ada di bot ini, *Terimakasih!.*

*乂  I N F O R M A T I O N*
   *✧ Nama Bot : ${namabot}*
   *✧ Nama Owner : ${author}*
   *✧ Prefix : [ . ]*
   *✧ Mode : ${global.opts['self'] ? 'Private' : 'Public'}*
   *✧ ${Object.keys(global.db.data.users).length} Pengguna*
   *✧ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} Chat Terbanned*
   *✧ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} Pengguna Terbanned*
${readMore}
*乂 T A G - L I S T*
   ${pmenus} .menulist ${daftarTag}

*Total Tag: ${Object.keys(tagCount).length}*`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `Hai Kak Kak ${name} ${ucapan()}`,
body: wm,
mediaType: 1,
thumbnail: fs.readFileSync(prn),
thumbnailUrl: arc,
sourceUrl: sig,
renderLargerThumbnail: true
}}}, { quoted: m });
await conn.sendFile(m.chat, rifal, '', null, fkontak, true, { ptt: true });
conn.sendMessage(m.chat, { react: { text: "✅", key: m.key, } } )
} else if (tagCount[perintah]) {
const daftarHelp = tagHelpMapping[perintah].map((helpItem, index) => {
const premiumSign = help[index].premium ? '🅟' : '';
const limitSign = help[index].limit ? 'Ⓛ' : '';
return `.${helpItem} ${premiumSign}${limitSign}`;
}).join('\n' + pmenus + ' ');
    
    let name2 = m.pushName || conn.getName(m.sender)
    let p1 = './tumnil/1.jpg'
    let p2 = './tumnil/2.jpg'
    let p3 = './tumnil/3.jpg'
    let p4 = './tumnil/4.jpg'
    let p5 = './tumnil/5.jpg'
    let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
    let arc = pickRandom(global.AraChu2)
    let fkontak = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363195377875432@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: false}}}
    let sound = ['mangkane25','mangkane26','mangkane27','mangkane28','mangkane29','mangkane30','mangkane31','mangkane32','mangkane33','mangkane34','mangkane35','mangkane36','mangkane37','mangkane38','mangkane39','mangkane40','mangkane41','mangkane42','mangkane43','mangkane44','mangkane45','mangkane46','mangkane47','mangkane48','mangkane49','mangkane50','mangkane51','mangkane52','mangkane53','mangkane54'].getRandom()
    let rifal = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/"+ sound +".mp3"

await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key }})

    conn.sendMessage(m.chat, {
    text: `*乂 ${perintah}*

${global.pmenus} ${daftarHelp}

*Total Item:${tagHelpMapping[perintah].length}*`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `Hai Kak Kak ${name2} ${ucapan()}`,
body: wm,
mediaType: 1,
thumbnail: await fs.readFileSync(prn),
thumbnailUrl: arc,
sourceUrl: sig,
renderLargerThumbnail: true
}}}, { quoted: m });
await conn.sendFile(m.chat, rifal, '', null, fkontak, true, { ptt: true });
await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key }})
} else if (perintah === 'all') { // Menampilkan semua tag dan bantuan
let name = m.pushName || conn.getName(m.sender)
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const allTagsAndHelp = Object.keys(tagCount).map(tag => {
const daftarHelp = tagHelpMapping[tag].map((helpItem, index) => {
const premiumSign = help[index].premium ? '🅟' : '';
const limitSign = help[index].limit ? 'Ⓛ' : '';
return `.${helpItem} ${premiumSign}${limitSign}`;
}).join('\n' + pmenus + ' ');
return `*乂 ${tag}*

${daftarHelp}

`;
}).join('\n');
    
    let name3 = m.pushName || conn.getName(m.sender)
    let p1 = './tumnil/1.jpg'
    let p2 = './tumnil/2.jpg'
    let p3 = './tumnil/3.jpg'
    let p4 = './tumnil/4.jpg'
    let p5 = './tumnil/5.jpg'
    let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
    let arc = pickRandom(global.AraChu2)
    let fkontak = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363195377875432@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: false}}}
    let sound = ['mangkane25','mangkane26','mangkane27','mangkane28','mangkane29','mangkane30','mangkane31','mangkane32','mangkane33','mangkane34','mangkane35','mangkane36','mangkane37','mangkane38','mangkane39','mangkane40','mangkane41','mangkane42','mangkane43','mangkane44','mangkane45','mangkane46','mangkane47','mangkane48','mangkane49','mangkane50','mangkane51','mangkane52','mangkane53','mangkane54'].getRandom()
    let rifal = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/"+ sound +".mp3"

await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key }})

conn.sendMessage(m.chat, {
text: `ʜᴀɪ ᴋᴀᴋ *${name}*🤗,
Kenalin Aku ${namabot}, Aku adalah sebuah Bot WhatsApp yang bisa membantu anda dan mencari informasi di WhatsApp, anda bisa bermain game bersama teman-teman anda dengan fitur yang ada di bot ini, *Terimakasih!.*

*乂  I N F O R M A T I O N*
   *✧ Nama Bot : ${namabot}*
   *✧ Nama Owner : ${author}*
   *✧ Prefix : [ . ]*
   *✧ Mode : ${global.opts['self'] ? 'Private' : 'Public'}*
   *✧ ${Object.keys(global.db.data.users).length} Pengguna*
   *✧ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned*
   *✧ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned*
${readMore}
*乂 T A G L I S T - H E L P*

${allTagsAndHelp}

*Total Tags:${Object.keys(tagCount).length}*`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `Hai Kak Kak ${name3} ${ucapan()}`,
body: wm,
mediaType: 1,
thumbnail: await fs.readFileSync(prn),
thumbnailUrl: arc,
sourceUrl: sig,
renderLargerThumbnail: true
}}}, { quoted: m });
await conn.sendFile(m.chat, rifal, '', null, fkontak, true, { ptt: true });
await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key }})

} else {
conn.sendMessage(m.chat, { text : `Tag '${perintah}' tidak ditemukan. Gunakan 'menulist tags' atau 'menulist all' untuk melihat tag yang tersedia.` }, { quoted: m });
}}

menulist.help = ['menulist']
menulist.tags = ['info']
menulist.command = ['menulist', 'listmenu']
export default menulist

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

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