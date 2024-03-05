
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 Chat Tidak Mendukung Fitur *NSFW* \n\nSilahkan Kirim Perintah :\n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `❎ Usiamu Tidak Mencukupi Batas, Umur Minimal 18+`
  if (!text) throw `✳️ *Command Salah!.*\n📌 *Contoh :* _*${usedPrefix + command} <search>*_\n\nAtau Bisa Gunakan URL:\n*📌Contoh :* _*${usedPrefix + command} <url>*_`
    
    m.reply(wait)
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ Link Ini Bukan Link *xnxx.com*`)
        try {
            let xn = await fg.xnxxdl(text)
            conn.sendFile(m.chat, xn.url_dl, xn.title + '.mp4', `
≡  *XNXX DL*
            
▢ *📌Title :* _${xn.title}_
▢ *⌚Durasi :* _${xn.duration}_
▢ *🎞️Kualitas :* _${xn.quality}_
`.trim(), m, false, { asDocument: chat.useDocument })
 } catch (e) {
    m.reply(`🔴 Error : Terjadi Kesalahan!.`)
 }
    } else {
        try {
            let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
            } catch (e) {
              m.reply(`🔴 Error: Terjadi Kesalahan!.`)
               }
    }
}
handler.help = ['xnxx', 'xnxxdl', 'xnxxsearch'] 
handler.tags = ['downloader', 'premium']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = 2
handler.premium = true
handler.register = true

export default handler
