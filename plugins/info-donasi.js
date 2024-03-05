import fs from 'fs'
import fetch from 'node-fetch'
import { apivisit } from './kanghit.js'
import moment from "moment-timezone"
let handler = async (m, { conn, args, usedPrefix, command }) => {
let fkontak = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363195377875432@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: false}}}

let donasi = `
_*Hai kak, kamu ingin berdonasi yah?, bisa kok kak!, semakin banyak anda berdonasi semakin baik anda mendukung pengembangan bot ini!. anda bisa donasi di nomor dibawah ini ya kak!.*_

*Dana :* _*Chat Owner*_
*Axis :* _*Chat Owner*_
*Xl :* _*Chat Owner*_
`;
       
       conn.sendMessage(m.chat, { image: {
       url: 'https://telegra.ph/file/2470e50268bed965b945e.jpg' },
       caption: donasi,
       }, { quoted: fkontak, })
await apivisit
}
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
export default handler