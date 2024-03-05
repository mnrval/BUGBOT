import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('https://chat.whatsapp.com') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `- - ᴍᴀᴀғ - -
✘ ʙᴏᴛ ʙᴇʟᴜᴍ ʙɪsᴀ ᴍᴀsᴜᴋ ɢʀᴜᴘ ᴀᴘᴀʙɪʟᴀ ᴅᴇɴɢᴀɴ ᴋᴇᴡᴇɴᴀɴɢᴀɴ ᴀᴅᴍɪɴ!

⌬ ᴀᴛᴀᴜ ᴋᴀᴍᴜ ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ ᴀɢᴀʀ ʙɪsᴀ ᴍᴇɴᴀᴍʙᴀʜᴋᴀɴ ʙᴏᴛ ᴋᴇ ɢᴄ ᴍᴜ?
- - ʜᴀʀɢᴀ ᴘʀᴇᴍɪᴜᴍ - -
• 4ᴋ / 7 ʜᴀʀɪ ( 1 ɢʀᴜᴘ )
• 8ᴋ / 15 ʜᴀʀɪ ( 2 ɢʀᴜᴘ )
• 12ᴋ / 21 ʜᴀʀɪ ( 3 ɢʀᴜᴘ )
• 15ᴋ / 30 ʜᴀʀɪ ( 6 ɢʀᴜᴘ )

- - sɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ - -
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler