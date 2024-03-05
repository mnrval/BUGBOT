import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command }) => { 

await conn.sendMessage(m.chat, {
	text: `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`,
    contextInfo: {
    externalAdReply: {
       showAdAttribution: true,
       title: `2023 - 2025 © ${author}`,
       body: wm,
       mediaType: 1,
       thumbnailUrl: sgc,
       showAdAttribution: true, 
       renderLargerThumbnail: true,
       thumbnail: await (await conn.getFile("./thumbnail.jpg")).data,
       sourceUrl: sgc
	   }}}, { quoted: m });
	   }
          
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = ['gcbot','groupbot']
export default handler