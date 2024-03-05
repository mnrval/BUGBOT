import fs from 'fs'
let handler = async (m, { conn }) => {
  let aboutID = `𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫 adalah bot WhatsApp yang cerdas dan sangat berguna untuk membantu Anda dalam menjawab pertanyaan dan memberikan solusi yang tepat dalam waktu yang singkat. Dikembangkan oleh ifung Dev, bot ini menggunakan sumber asli base Botcahx yang terus diperbarui oleh Ifung Dev untuk memberikan pengalaman berinteraksi yang lebih mudah dan menyenangkan.

Dengan kemampuannya yang luas dalam menjawab pertanyaan dan memberikan solusi, 𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫 dapat membantu Anda dalam berbagai hal seperti, mencari informasi tentang produk atau layanan, mengatur jadwal, dan banyak lagi. 𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫 juga dapat memberikan jawaban yang akurat dan cepat sehingga Anda tidak perlu lagi menunggu lama untuk mendapatkan jawaban yang Anda butuhkan.

Sebagai produk yang dikembangkan dan diperbarui oleh ifung Dev, 𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫 selalu menerima pembaruan fitur-fitur terbaru untuk memberikan layanan yang semakin baik dan canggih. Dengan 𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫j, Anda tidak perlu khawatir tentang kualitas layanan yang diberikan karena bot ini selalu siap memberikan solusi yang terbaik bagi pengguna WhatsApp. Jadi, tunggu apa lagi? Gunakan 𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫 sekarang dan nikmati kemudahan serta kenyamanan dalam berinteraksi dengan bot cerdas ini di WhatsApp!`

  let aboutEN = `𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫 is a smart WhatsApp bot that is very useful for helping you answer questions and provide accurate solutions in a short amount of time. Developed by ifung Dev, this bot uses the original source of Botcahx that is constantly updated by Kemii Lèarning to provide an easier and more enjoyable interactive experience.

With its broad ability to answer questions and provide solutions, 𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫 can assist you in various things such as searching for information about products or services, scheduling appointments, and much more.𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫 can also provide accurate and quick answers so you no longer have to wait long to get the answers you need.

As a product developed and updated by ifung Dev, 𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫 always receives the latest feature updates to provide better and more advanced services. With 𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫, you don't have to worry about the quality of the service provided because this bot is always ready to provide the best solutions for WhatsApp users. So, what are you waiting for? Use 𝑭𝒓𝒆𝒚𝒂 - 𝑴𝑫 now and enjoy the ease and convenience of interacting with this smart bot on WhatsApp!`
  
	conn.sendMessage(m.chat, {
	react: { text: '🕒', key: m.key }})

  let about = `${aboutID}\n\n${aboutEN}`
  
let p1 = './tumnil/1.jpg'
let p2 = './tumnil/2.jpg'
let p3 = './tumnil/3.jpg'
let p4 = './tumnil/4.jpg'
let p5 = './tumnil/5.jpg'
let prn = `${pickRandom([p1,p2,p3,p4,p5])}`
let arc = pickRandom(global.AraChu2)

 await conn.sendMessage(m.chat, {
 text: about,
 contextInfo: {
 externalAdReply: {
	showAdAttribution: true,
	title: namabot,
	body: 'By ' + author,
	thumbnail: await fs.readFileSync(prn),
	thumbnailUrl: arc,
	sourceUrl: sig,
	mediaType: 1,
	renderLargerThumbnail: true 
	}}}, { quoted: m });
conn.sendMessage(m.chat, {
react: { text: '✅', key: m.key }})
}

handler.help = ['about']
handler.tags = ['info']
handler.command = /^(about|about bot|tentang|tentangbot|infobot)$/i
handler.register = true
export default handler

        function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}