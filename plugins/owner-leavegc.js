let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Sayonara , , ! (≧ω≦)ゞ', m.chat)
         let loadd = [
 'ʟ',
 'ʟᴏ',
 'ʟᴏᴀ',
 'ʟᴏᴀᴅ',
 'ʟᴏᴀᴅɪ',
 'ʟᴏᴀᴅɪɴ',
 'ʟᴏᴀᴅɪɴɢ',
 'ʟᴏᴀᴅɪɴɢ\nᴄ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏᴍ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏᴍᴘ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏᴍᴘʟ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏᴍᴘʟᴇ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏᴍᴘʟᴇᴛ',
 'ʟᴏᴀᴅɪɴɢ\nᴄᴏᴍᴘʟᴇᴛᴇ',
 'ʀɪꜰᴀʟʙᴏᴛᴢ\nʙʏ ʀɪꜰᴀʟᴍᴏᴅᴢ'  //ʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇ
 ]

let { key } = await conn.sendMessage(m.chat, {text: 'ᴀᴡᴀɪᴛ ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out']
handler.tags = ['owner']
handler.command = /^(out|leavegc)$/i

handler.rowner = true

export default handler