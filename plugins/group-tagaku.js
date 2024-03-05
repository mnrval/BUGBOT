import fs from 'fs'
import moment from "moment-timezone"

let handler = async(m, { conn, text, usedPrefix, command }) => {
let RifalModz = '```NAPA OM TAG OWNER KU?...\nOwnerku Lagi SadBoy😔\nDia Sekarang Pengen Sendiri Dulu Katanya :)```'
//let ftoko = { key: {  participant: `0@s.whatsapp.net`, remoteJid: `120363195377875432@g.us` }, message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }, title: wm, description: `Time : ${moment.tz("Asia/Jakarta").format("HH:mm:ss")}`, currencyCode: "IDR", priceAmount1000: 75000, retailerId: "RifalModz", productImageCount: 1 }, businessOwnerJid: `0@s.whatsapp.net` },}}
//let ftroli = { key: { participant: `62877695159381@s.whatsapp.net`, remoteJid: `120363195377875432@g.us` }, message: { orderMessage: { jpegThumbnail: fs.readFileSync('./thumbnail.jpg'), itemCount: 75000, status: 1, surface: 1, message: `Time : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`, orderTitle: author, sellerJid: `6283853305641@s.whatsapp.net` }, }}
//const rifal = { key: { fromMe: [], participant: "6283853305641@s.whatsapp.net", ...(m.chat ? { remoteJid: "120363195377875432@g.us" } : {}) }, message: { stickerMessage: { url: "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc", fileSha256: "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=", fileEncSha256: "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=", mediaKey: "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=", mimetype: "image/webp", height: 40, width: 40, directPath: "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781", fileLength: "99999999", mediaKeyTimestamp: "16572901099967", isAnimated: [] }}}
const fvideo = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "videoMessage": { "title": wm, h: author, seconds: 359996400, caption: `${author}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg') }, }}

conn.sendMessage(m.chat, { video: {
       url: 'https://telegra.ph/file/98678165109e71028f26e.mp4' },
       mimetype: 'video/mp4',
       fileLength: 12,
       caption: RifalModz,
       gifPlayback: true,
       gifAttribution: 4,
       caption: RifalModz
       }, { quoted: fvideo });
}

handler.customPrefix = /^(@6283853305641|@+62 838-5330-5641|@RifalModzYT)$/i;
handler.command = new RegExp();

export default handler