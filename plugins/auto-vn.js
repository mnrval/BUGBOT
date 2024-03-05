import fetch from 'node-fetch'

let handler = m => m

handler.before = async function (m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    if (chat.autoVn) {
    let sim = await fetch(`https://api.lolhuman.xyz/api/simi?apikey=${global.lolkey}&text=${m.text}&badword=true`)
    let res = await sim.json()
    let tts = `https://api.lolhuman.xyz/api/gtts/id?apikey=${global.lolkey}&text=${m.text}`
    conn.sendMessage(m.chat, { audio: { url: tts }, mimetype: 'audio/mp4' })
    }
}

export default handler