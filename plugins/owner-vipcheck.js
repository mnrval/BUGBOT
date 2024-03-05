let handler = m => m
handler.before = async (m, { conn, isVip, owner }) => {
	if (isVip) {
    if (new Date() * 1 >= global.db.data.users[m.sender].vipDate) {
      conn.reply(m.chat, "✘ ᴍᴀᴀғ ᴀᴋsᴇs ᴠɪᴘ ᴀɴᴅᴀ sᴜᴅᴀʜ ʜᴀʙɪs, sɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʀᴘᴀɴᴊᴀɴɢ", m).then(() => {
        global.db.data.users[m.sender].vip = false
        const data = global.owner.filter(([id, isCreator]) => id && isCreator)
        this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
           })
        }
      }
   }
export default handler