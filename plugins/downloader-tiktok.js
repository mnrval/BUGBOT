import fg from 'api-dylux' 
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `✳️ Masukkan tautan Tiktok\n\n 📌 Contoh : ${usedPrefix + command} https://vm.tiktok.com/ZSNaS927R/`
if (!args[0].match(/tiktok/gi)) throw `❎ Verifikasi bahwa tautan tersebut berasal dari TikTok`

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
┌─⊷ TIKTOK
▢ *Nama:* ${p.nickname}
▢ *Username:* ${p.unique_id}
▢ *Durasi:* ${p.duration}
▢ *Deskripsi:* ${p.description}
└───────────`
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
    } catch {
    m.reply(`❎ Kesalahan mengunduh video`)
    }}

handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt)$/i
handler.limit = true

export default handler