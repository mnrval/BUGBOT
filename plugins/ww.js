let handler = async (m, { conn }) => {
  let werewolf = global.db.data.werewolf || {}
  if (typeof werewolf.status != "undefined" && werewolf.status == "playing") {
    conn.reply(m.chat, "Permainan Werewolf sudah berlangsung", m)
    return
  }
  werewolf.status = "playing"
  werewolf.players = {}
  werewolf.villagers = []
  werewolf.wolves = []
  werewolf.votes = {}
  global.db.data.werewolf = werewolf
  conn.reply(m.chat, "Permainan manusia serigala dimulai. Silakan kirim '.wwjoin' untuk bergabung dalam permainan", m)
}
handler.help = ['ww']
handler.tags = ['game']
handler.command = /^ww$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler