let handler = async (m, { conn, args, usedPrefix, command  }) => {
  let teks = args.join(' ').split('|')
  if (!teks[0] || !teks[1]) throw `Masukan Text Nya!\n\nContoh\n${usedPrefix + command} The|Avengers`
  let res = API('https://api.lolhuman.xyz', '/api/textprome2/avenger', { text1: teks[0], text2: teks[1] }, 'apikey')
  conn.sendFile(m.chat, res, 'error.jpg', 'Ini Dia Kak', m, false)
}
handler.help = ['avengers']
handler.tags = ['maker']
handler.command = /^(avengers)$/i
handler.limit = true
export default handler