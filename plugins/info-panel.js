import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
const memek = await conn.profilePictureUrl(conn.user.jid).catch(_ => "./src/avatar_contact.png")
let Caca = { key: { fromMe: false, participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 2023, status: 200, thumbnail: await conn.resize(memek, 100, 100), surface: 200, message: `WhatsApp Bot Md By ${author}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true }
let Rifal =`*🤗List Harga Panel Rifal X Caca Store🤗*

*Ini List Harga Panel Kami Kak!*
RAM 1 GB / 3K
RAM 2 GB / 4K
RAM 3 GB / 5K
RAM 4 GB / 6K
RAM 5 GB / 7K
RAM 6 GB / 8K
RAM UNLI / 12K

🗣️ : Kak Kenapa Mahal?
👫 : Karena Panel Kami Aman Kak!, Anti Colong Script, Anti Lelet + Panel Private, Jadinya Aman Kak!.

*Masih Ragu?*
🗣️: Ada Testimoninya Ngak Kak!.🤗
👫: Tentu Ada Kok Kak!.

🗣️: Keuntungannya Apa Kak!?.
👫: Keuntungannya Adalah :

1. BISA RUN BOT SEPUASNYA
2. BOT TETEP ON MESKI WEB CLOSE
3. TIDAK BOROS KOUTA
4. AMAN DAN TIDAK LELET.

Segitu Doang Ya Kak!...🤗`

await conn.sendMessage(m.chat,{image:{url:`https://telegra.ph/file/01312a78a490cd5d57639.png`},caption:Rifal},{quoted:Caca})
await apivisit
}
handler.help = ['panel','harga']
handler.tags = ['info']
handler.customPrefix = /^(panel|.panel|.harga|harga)$/i;
handler.command = new RegExp();

export default handler