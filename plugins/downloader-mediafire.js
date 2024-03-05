import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
    conn.mediafire = conn.mediafire ? conn.mediafire : {}

    if (!args[0]) return m.reply(`Masukan Url!\n\nContoh:\n${usedPrefix + command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`)
    if (m.sender in conn.mediafire) return m.reply('Kamu Masih Mendownload!')
    if (!/https:\/\/www.mediafire.com\//i.test(args[0])) return m.reply('Invalm.sender Url!')

    try {
        conn.mediafire[m.sender] = true
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = await mediafiredl(args[0])

        if (!isPrems && filesize > 100000) return m.reply(`Maximal download is 100 MB, This file size is ${filesizeH}`)
        if (isPrems && filesize > 500000) return m.reply(`Maximal download is 500 MB, This file size is ${filesizeH}`)

        let caption = `
    [ MEDIAFIRE ]
*📮 Name File:* ${filename}
*📁 Size File:* ${filesizeH}
*🗂️ Extension:* ${ext}
*📨 Uploaded:* ${aploud}
`.trim()

        let { data } = await conn.getFile(url)
        let msg = await m.reply(caption)
        await conn.sendMessage(m.chat, { document: data, fileName: filename, mimetype: ext }, { quoted: msg })

    } catch (e) {
        throw e
    } finally {
        delete conn.mediafire[m.sender]
    }
}
handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i
handler.limit = true
export default handler