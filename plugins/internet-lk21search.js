import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Nyari Apa?`
  let res = await fetch(`https://wibu-api.eu.org/api/lk21/search?title=${text}`)
  m.reply(wait)
  let json = await res.json()
  json = json.result.map((v) => `*Judul:* ${v.judul}\n*Link:* ${v.link}\n*Kategori:* ${v.kategori}\n*Download:* ${v.dl}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(json)
}
handler.help = ['lk21search']
handler.tags = ['internet','premium']
handler.command = /^(lk21search)$/i
handler.premium = true

export default handler