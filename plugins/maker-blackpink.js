let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukan Text Nya!\n\nContoh\n${usedPrefix + command} Blackpink`
  let res = API('lol', '/api/textprome/blackpink', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'error.jpg', 'Ini Dia Kak', m, false)
}
handler.help = ['blackpink2']
handler.tags = ['maker']
handler.command = /^(blackpink2)$/i
handler.limit = true
export default handler