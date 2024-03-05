import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://raw.githubusercontent.com/ArifzynXD/database/master/asupan/korea.json')
  //if (!res.ok) throw await res.json()
  let asup = await res.json()
  let json = asup[Math.floor(Math.random() * asup.length)]
  //if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, 'korea.jpg', '_*Nih Kak Asupan Koreanya :3*_', m)
}
handler.help = ['korea']
handler.tags = ['random']
handler.command = /^(korea)$/i
handler.limit = true
handler.register = true

export default handler