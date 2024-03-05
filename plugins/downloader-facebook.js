import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) throw `✳️ Mengirim tautan ke video Facebook\n\n📌 Contoh :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
    await conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key,
        }
    })
   try {
    let result = await fg.fbdl(args[0]);
    let tex = `
┌─⊷ *FB DL*
▢ *Titel :* ${result.title}
└───────────`;
    conn.sendFile(m.chat, result.videoUrl, 'fb.mp4', tex, m);
    await conn.sendMessage(m.chat, {
        react: {
            text: "✅",
            key: m.key,
        }
    })
  } catch (error) {
 	m.reply('Error: Intente de nuevo con otro link')
 	} 
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.limit = true

export default handler