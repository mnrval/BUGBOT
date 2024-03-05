import fs from 'fs'
import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Bot aktif kak*\n@${m.sender.split('@')[0]}`
await conn.reply(m.chat, info, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: author, body: bottime, sourceUrl: syt, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
conn.sendFile(m.chat, `${audio.getRandom()}`, "rifal.mp3", null, m, true, { type: "audioMessage", ptt: true, });
}
handler.customPrefix = /^(tes|tess|test|bot)$/i
handler.command = new RegExp

export default handler

const audio = [
	"./vn/clara.mp3",
	"./vn/clara1.mp3",
	"./vn/clara2.mp3",
	"./vn/clara3.mp3",
	"./vn/clara4.mp3",
];