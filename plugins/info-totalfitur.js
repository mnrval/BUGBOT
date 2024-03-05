import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn, args, command }) => {
let totalfi = Object.keys(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
  const helpArray = Array.isArray(global.plugins[plugin].help) ? global.plugins[plugin].help : [global.plugins[plugin].help];
  return { help: helpArray, helpCount: helpArray.length }; }).sort((a, b) => b.helpCount - a.helpCount).reduce((total, plugin) => total + plugin.helpCount, 0);

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let name = await conn.getName(m.sender)
let RifalGanz = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363195377875432@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: false }}}
let p1 = './tumnil/1.jpg'
let p2 = './tumnil/2.jpg'
let p3 = './tumnil/3.jpg'
let p4 = './tumnil/4.jpg'
let p5 = './tumnil/5.jpg'
let prn = `${pickRandom([p1,p2,p3,p4,p5])}`

const mt = [
    'application/pdf',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.ms-powerpoint',
    'application/zip',
    'application/x-rar-compressed',
    'application/x-tar',
    'application/x-7z-compressed',
    'application/epub+zip',
    'application/json'
];
// Memilih secara acak satu mimetype dari daftar
let arc = pickRandom(global.AraChu2)
const ri = Math.floor(Math.random() * mt.length);
const rm = mt[ri];

await conn.sendMessage(m.chat, {
	document: fs.readFileSync("./package.json"),
	fileName: packname,
	mimetype: rm,
	fileLength: 99999999999999,
	bpageCount: 10909143,	
	jpegThumbnail: await (await conn.getFile('https://telegra.ph/file/5b03afd71ef136334a527.jpg')).data,
	caption: `*${wm} ʙʏ ${author}*\n\n_*Fitur Yang Dimiliki ${wm} Saat Ini :*_\n*📄 Total Plugins :* ±${totalfi} Plugins Files\n*📉 Total Fitur :* ±${totalfi} Menu`,
      contextInfo: {
      externalAdReply: {
	showAdAttribution: true,
	title: `Hai Kak ${name},\n${ucapan()}`,
	body: `©️ 2023 ʙʏ ${author}`,
	thumbnail: await fs.readFileSync(prn),
	thumbnailUrl: arc,
	sourceUrl: sig,
	mediaType: 1,
	renderLargerThumbnail: false 
	}}}, { quoted: RifalGanz, });
	   }
handler.help = ['totalfitur','allfitur']
handler.tags = ['info']
handler.command = ['totalfitur','allfitur']
export default handler

function ucapan() {
    const time = moment.tz("Asia/Jakarta").format("HH")
    let res = "Selamat Dini Hari ☀️"
    if (time >= 4) {
        res = "Selamat Pagi 🌄"
    }
    if (time >= 10) {
        res = "Selamat Siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat Sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat Malam 🌙"
    }
    return res
}