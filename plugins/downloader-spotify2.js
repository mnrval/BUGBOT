import fetch from 'node-fetch'
async function handler(m, { conn, usedPrefix, command, text }) {
    if (!text) return m.reply(`Masukan Query Atau Link\n\nContoh :\n${usedPrefix + command} Mantra Hujan\n${usedPrefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
    if (/open.spotify.com/i.test(text)) {
        let response = await fetch (API('lol', '/api/spotify', { url: text }, 'apikey'))
        let { result } = await response.json()
        let caption = `
❃ Title : ${result.title}
❃ Artist : ${result.artists}
❃ Duration : ${result.duration}
❃ Popularity : ${result.popularity}
❃ Id : ${result.id}

❃ Link : https://open.spotify.com/track/${result.id}

*L O A D I N G . . .*
`.trim()
        let msg = await this.sendFile(m.chat, result.thumbnail, '', caption, m)
        this.sendFile(m.chat, result.link, result.title + '.mp3', '', msg, false, { mimetype: 'audio/mpeg' })
    } else {
        let response = await fetch (API('lol', '/api/spotifysearch', { query: text }, 'apikey'))
        let { result } = await response.json()
        let body = result.map((v, i) => {
            return `
_*${i + 1}. ${v.title}*_
❃ Artist : ${v.artists}
❃ Link : ${v.link}
`.trim()
        }).join('\n\n')
        let head = `_*Download Lagu Dengan Cara :*_ \n_*${usedPrefix + command} ${result[0].link}*_\n\n`
        conn.reply(m.chat, head + body, m)
        //conn.adReply(m.chat, head + body, result[0].title, '▶︎\n━━━━━━━•───────────────', fs. readFileSync('./media/spotify.jpg'), result[0].link, m)
    }
}
handler.help = ['spotify2'].map(v => v + ' <query>')
handler.tags = ['downloader']
handler.command = /^spotify2$/i

handler.onlyprem = true
handler.limit = true

export default handler