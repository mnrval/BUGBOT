let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw `Example ${usedPrefix}nulis (*Teks Yang Ingin Kamu Tulis*)`
    let kertas = API('lol', '/api/nulis', { text: text }, 'apikey')
    await conn.sendFile(m.chat, kertas, 'Kontol Eror Anjg🗿.jpg', 'Kapan Majunya Indonesia Kalo Manusianya Males Nulis🗿', m)
}
handler.help = ['nulis']
handler.tags = ['tools']
handler.command = /^nulis$/i

export default handler