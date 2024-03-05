let handler = async (m, { conn }) => {
  let werewolf = global.db.data.werewolf || {}
  if (typeof werewolf.status == "undefined" || werewolf.status != "playing") {
    conn.reply(m.chat, "Permainan manusia serigala tidak sedang berlangsung", m)
    return
  }
  if (typeof werewolf.players[m.sender] != "undefined") {
    conn.reply(m.chat, "Anda sudah bergabung dalam permainan", m)
    return
  }
  werewolf.players[m.sender] = "villager"
  werewolf.villagers.push(m.sender)
  global.db.data.werewolf = werewolf
  conn.reply(m.sender, "Anda telah bergabung dalam permainan sebagai penduduk desa", m)
}
handler.help = ['wwjoin']
handler.tags = ['game']
handler.command = /^wwjoin$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler