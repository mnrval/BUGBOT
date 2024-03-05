import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 'Nyari Script Deck?',
 'Nyari Script Deck?',
 'Nyari Script Deck?',
 'Waduh Deck Minimal Beli/Buat Sendiri Lah',
 'Waduh Deck Minimal Beli/Buat Sendiri Lah',
 'Waduh Deck Minimal Beli/Buat Sendiri Lah',
 'Waduh Deck Minimal Beli/Buat Sendiri Lah',
 'Bocil Jb Jual Sc Free Sc Shel Di Jual Murah\nNgak Di Kasih Sc Kenon🖕🐶'
]

let { key } = await conn.sendMessage(m.chat, { text: 'Nyari Script Deck?' },{ quoted: m })//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, { text: loadd[i], edit: key },{ quoted: m })}

let rifalmodz = `*${namabot}*

_*Type :*_
• *Base :* _Plugins_
• *Language :* _NodeJs_
• *Bailey :* _@adiwashing/baileys_
• *Bailey Supp :* _@whiskeysockets/baileys_

_Jika anda menginginkan Script ini silahkan hubungi owner dengan mengetik [ .owner ] Untuk Membeli Script Ini._
`;
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let RifalGanz = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363195377875432@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
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
	fileName: `Nih Sc Nya!!...🗿\nMinimal-BeliDeck😂.zip`,
	mimetype: rm,
	fileLength: 99999999999999,
	bpageCount: 10909143,	
	jpegThumbnail: await (await conn.getFile('https://telegra.ph/file/8cfa3eb9f11eae20fbc55.jpg')).data,
	caption: rifalmodz,
	contextInfo: {
      externalAdReply: {
	showAdAttribution: true,
	title: `Nyari Script Deck?\nSC? Beli Lah🖕🗿`,
	body: 'Bocil Jb Kontol Ngemis Sc',
	thumbnail: await fs.readFileSync(prn),
	thumbnailUrl: arc,
	sourceUrl: `https://Ngak_Dikasih_Kenon🐶🖕`,
	mediaType: 1,
	renderLargerThumbnail: false 
	}}}, { quoted: RifalGanz, });
	conn.sendFile(m.chat, `${rifal.getRandom()}`, "kontol.mp3", null, m, true, { type: "audioMessage", ptt: true, });
	   }
handler.help = ['script','sourcecode']
handler.tags = ['info']
handler.command = ['sc', 'script', 'sourcecode', 'src'] 

export default handler

const rifal = [
"./vn/sc.mp3",
"./vn/sc1.mp3",
"./vn/sc2.mp3",
"./vn/sc3.mp3"
]