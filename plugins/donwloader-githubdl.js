let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw 'Masukan username nya kak.'
if (!args[1]) throw 'Masukan repo ?'
if (!args[2]) throw 'branch nya juga kak.'
let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/${args[2]}.zip`
//F
m.reply(`compressing data to file zip*`)
conn.sendFile( m.chat, url, `${args[1]} ${args[2]}.zip`, null, m)

}
handler.help = ['githubdl']
handler.tags = ['downloader']
handler.command = /githubdl/i
handler.limit = true

export default handler