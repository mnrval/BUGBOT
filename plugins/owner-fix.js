let handler  = async (m, { conn, text }) => {
	let users = global.db.data.users

  var total = 0
  for (let jid in users){
    if (users[jid].limit > 0){
      users[jid].limit = 0
      total+=1
    }
    if (users[jid].koin > 0){
      users[jid].koin = 0
      total+=1
    }
    if (users[jid].exp > 0){
      users[jid].exp = 0
      total+=1
    }
    users[jid].koin = Math.floor(users[jid].koin)
    users[jid].limit = Math.floor(users[jid].limit)
  }
  return conn.reply(m.chat,`*Berhasil Memperbaiki ${total} Error Di Database.*`,m)
}
handler.help = ['fixdb']
handler.tags = ['owner']
handler.command = /^(fixdb)$/i
handler.owner = true

export default handler