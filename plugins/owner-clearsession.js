import { readdirSync, rmSync } from 'fs'
let handler = async (m, { conn }) => {
    const dir = './SessionsRifal'
    readdirSync(dir)
    .filter(v => v != 'creds.json')
    .forEach(f => rmSync(`${dir}/${f}`))
    await m.reply('Berhasil Menghapus File Sessions')
}
handler.help = ['clearsession']
handler.tags = ['owner']
handler.command = /^(clear(sesi|session))$/i
handler.mods = true
export default handler