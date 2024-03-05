import fetch from "node-fetch"
import fs from "fs"

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
const delay = time => new Promise(res => setTimeout(res, time))
let aku
try {
    aku = await conn.profilePictureUrl(who, "image")
	} catch (e) {
	aku = "https://telegra.ph/file/e47d9ec693e5288ad9382.jpg"
	}

await conn.sendContact(m.chat, [[`${nomorown}` + `@s.whatsapp.net`, author ]], m, {
 contextInfo: { 
 forwardingScore: 9,
isForwarded: true, 
 externalAdReply: {
 showAdAttribution: true,
 title: 'Tʜᴇ Oᴡɴᴇʀ',
 body: bottime,
 mediaType: 1,
 thumbnailUrl: sig,
 renderLargerThumbnail: true,
 thumbnail: await (await conn.getFile(aku)).data,
 sourceUrl: sig
 }
   }
     },
       {
         quoted: m,
         ephemeralExpiration: ephemeral
           }
             );
            let anjay = await conn.sendFile(m.chat, './vn/owner.mp3', '', null, m, true, { type: "audioMessage", ptt: true, waveform: [1,4,8,9,18,23,17,14,12,15,7,3] }, { quoted: m })
            await delay(3200)
            await conn.sendMessage(m.chat, { delete: anjay.key })
            await delay(100)
            conn.reply(m.chat, `Ngak Jadi Vn, Malu Ish...🗿`, anjay)
} 
handler.help = ['owner','creator','developer']
handler.tags = ['misc']
handler.command = /^(owner|creator|developer|dev)$/i

export default handler