let handler = async (m, { conn }) => {
  let werewolf = global.db.data.werewolf || {}
  if (typeof werewolf.status == "undefined" || werewolf.status != "playing") {
    conn.reply(m.chat, "Permainan manusia serigala tidak sedang berlangsung", m)
    return
  }
  if (typeof werewolf.players[m.sender] == "undefined") {
    conn.reply(m.chat, "Anda bukan peserta dalam permainan ini", m)
    return
  }
  delete werewolf.players[m.sender]
  let index = werewolf.villagers.indexOf(m.sender)
  if (index >= 0) {
    werewolf.villagers.splice(index, 1)
  }
  index = werewolf.wolves.indexOf(m.sender)
  if (index >= 0) {
    werewolf.wolves.splice(index, 1)
  }
  global.db.data.werewolf = werewolf
  conn.reply(m.chat, "Anda telah meninggalkan permainan", m)
}
handler.help = ['wwleft']
handler.tags = ['game']
handler.command = /^wwleft$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler