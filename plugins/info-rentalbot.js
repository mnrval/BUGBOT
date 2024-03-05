import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let rifalmodz = `*╔═════════════════❑*\n*║      ◆ LIST SEWA BOT ◆*\n*║═════════════════❑*\n*║ ✾  1 Minggu : Rp.3.000*\n*║ ✾  2 Minggu : Rp.6.000*\n*║ ✾  3 Minggu : Rp.8.000*\n*║ ✾  1 Bulan  : Rp.12.000*\n*║ ✾  Permanen : [ Maintenance ]*\n*╚═════════════════❏*
_Sewa bot bisa memasukkan bot ke grup dan mendapatkan premium jadi bisa akses fitur premium di bot_
*Fitur :*
_Downloader Tiktok, Instagram, Facebook, Mega, Dan Lain2_
*Special Fitur :*
_Otakudesu Latest, Downloader Xnxx, Hdr, Remini Dan Lain2_

*Pembayaran??*
*Dana :* Chat ketik [ .owner ]
*Via pulsa :* nambah 3k [ Lebih Mahal Dikit ]
_Chat ketik_ *[ .owner ]* _untuk membeli fitur premium_
`;

conn.sendMessage(m.chat, {
      text: rifalmodz,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true,
      title: `List Harga Sewa ${namabot}`,
      body: author,
      thumbnailUrl: 'https://telegra.ph/file/2470e50268bed965b945e.jpg',
      sourceUrl: sig,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, { quoted: m })
}
handler.help = ['iklan', 'sewabot']
handler.tags = ['info']
handler.command = /^(rental|iklan|sewa|sewabot)$/i
export default handler