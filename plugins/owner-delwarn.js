let handler = async (m, { conn, args, usedPrefix }) => {
    if (args.length > 0) {
        let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
        let ban = m.mentionedJid[0] || m.quoted.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
        let warn = global.db.data.users[ban].warn
        if (warn < 3) {
            global.db.data.users[ban].warn -= 1
            m.reply(`*berhasil Unwarn!*`)
            conn.reply(ban, '*Kamu di unwarn oleh moderator, dan sekarang kamu punya ' + (warn - 1) + '.Ingat Jika kamu mendapat warn 4 kali kamu akan otomatis ke banned*', null)
      }
    } else conn.reply(m.chat, '*Siapa yang mau di Unwarn?*', m)
}
handler.help = ['delwarn @tag']
handler.tags = ['owner']
handler.command = /^delwarn$/i
handler.mods = true

export default handler