import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Kirim/Reply Gambar dengan caption ${usedPrefix + command}`
m.reply(wait)

let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.kimzzoffc.me/api/openai/tozombie?url=${url}&apikey=OsOKZjWXie`)).buffer()
await conn.sendFile(m.chat, hasil, 'Maaf Jika Hasilnya Tidak Sesusai Keinginan 🙏☺', global.wm, m)
}

handler.help = ['jadizombie', 'tozombie']
handler.tags = ['ai', 'tools', 'premium']
handler.command = /^(tozombie|jadizombie)$/i
handler.premium = true

export default handler