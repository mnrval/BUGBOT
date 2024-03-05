import fs from 'fs'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let fkontak = { key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363195377875432@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: false}}}

let krtu = `
0ཻུ۪۪ꦽꦼ̷⸙‹•═══════════════♡᭄
│╭─── *「 Kartu Intro 」* ───
││  ══════════════
││  *Nama      :* 
││  *Gender    :* 
││  *Tetala     :*
││  *Umur      :* 
││  *Hobby     :* 
││  *Kelas      :* 
││  *Asal       :* 
││  *Agama    :* 
││  *Status     :* 
││  ══════════════
││  
││  ══════════════
││           *[ 𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫 ]*
││  ══════════════
│╰───────────────
0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
await conn.sendMessage(m.chat, {
	video: { url: 'https://telegra.ph/file/37ee85f96cd2725997202.mp4' },
	mimetype: `video/mp4`,
	fileLength: 9,
	caption: krtu,
	gifPlayback: true,	
	gifAttribution: 2,
	}, { quoted: fkontak })
}
handler.customPrefix = /^(intro)$/i;
handler.command = new RegExp();

export default handler
