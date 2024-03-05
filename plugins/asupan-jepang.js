import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://github.com/ArifzynXD/database/raw/master/asupan/japan.json')
  //if (!res.ok) throw await res.json()
  let asup = await res.json()
  let json = asup[Math.floor(Math.random() * asup.length)]
  //if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, 'jepang.jpg', '_*Nih Kak Asupan Jepangnya :3*_', m)
}
handler.help = ['japan']
handler.tags = ['random', 'premium']
handler.command = /^(japan)$/i
handler.premium = true
handler.register = true

export default handler