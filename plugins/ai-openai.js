import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw 'Example: .ai how are you'
  let anu = await fetch(`https://aemt.me/openai?text=${text}`)
  let data = await anu.json()
  m.reply(data.result)
  }
handler.help = ['openai']
handler.tags = ['ai']
handler.command = /^(ai|openai|gpt)$/i
handler.limit = true

export default handler
