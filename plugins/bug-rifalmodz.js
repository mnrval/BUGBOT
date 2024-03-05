import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, { video: { url: `https://telegra.ph/file/43af41309f0f3a172fdd1.mp4` }, caption: 'Mati Lu Sana🗿', viewOnce: true, footer: author }, { quoted: m });
}
handler.help = ['rifalmodzyt']
handler.tags = ['bugs']
handler.command = /^(rifalmodzyt)$/i
handler.rowner = true
export default handler
