import axios from 'axios'
let handler = async (m, { conn, text: code, usedPrefix, command }) => {
    let text = m.quoted ? m.quoted.text : code
    if (!text) return m.reply(`Masukan Text Yang Ingin Dibuat\n\nContoh:\n${usedPrefix + command} print(hello world)`)
    await m.reply('_In Progress Please Wait..._')
    let { data } = await axios({
            url: 'https://carbonara.solopov.dev/api/cook',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { code: text },
            responseType: 'arraybuffer'
        })
    conn.sendFile(m.chat, data, false, text, m)
}
handler.help = ['carbon']
handler.tags = ['maker']
handler.command = /^(carbon)$/i
handler.limit = true
export default handler