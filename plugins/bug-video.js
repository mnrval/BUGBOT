import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, { video: { url: `https://telegra.ph/file/77d3611a41ce05f5bef7c.mp4` }, caption: 'Mati Lu Sana🗿', viewOnce: true, footer: author }, { quoted: m });
}
handler.help = ['bugvideo']
handler.tags = ['bugs']
handler.command = /^(bugvideo)$/i
handler.rowner = true
export default handler
