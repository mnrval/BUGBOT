import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} RifalModzYT`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/ephoto1/mlwall?apikey=${global.lolkey}&text=${text}`
  conn.sendFile(m.chat, res, 'maskot.jpg', `Nih kak`, m, false)
}
handler.help = ['mlwall'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(mlwall)$/i
handler.register = true
handler.limit = true

export default handler